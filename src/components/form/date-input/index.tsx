import cx from 'classnames';
import { Text, TextInput } from 'components';

import * as React from 'react';
import { useMemo, useRef } from 'react';
import { useMode, useTheme } from 'utils/hooks';
import { WrapperProps } from 'utils/types';
import DateUtils from './date-utils';

import { StyledDayPicker } from './style';

const utils = new DateUtils();

interface InputPropsType extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  [key: string]: any;
}

interface InputProp extends InputPropsType {
  type: string;
  format: string;
}

export interface DateInputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
  inputRef?: React.Ref<any>;
  inputs: InputProp[];
  value: string;
  divider: string;

  onChange(newValue): void;
}

export const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  ({ inputs, divider, wrapperProps, value, onChange }: DateInputProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    const format = useMemo(() => {
      return inputs.map(i => i.format).join('/');
    }, [inputs]);

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);

    const inputToRef = {
      0: input1,
      1: input2,
      2: input3,
    };

    const currentInputValue = utils.getDate(value, format);
    const [currentDate, setDateToState] = React.useState<string>(currentInputValue);

    // eslint-disable-next-line no-shadow
    const handleFocusNextInput = (value: string, index: number): void => {
      if (value[0] === '0' && value.length > 1) {
        inputToRef[index + 1].current.focus();
        return;
      }

      if (Number(value) > 9 && inputs[index + 1] && inputToRef[index + 1].current) {
        inputToRef[index + 1].current.focus();
      } else {
        inputToRef[index].current.focus();
      }
    };

    // eslint-disable-next-line no-shadow
    const validateLength = (type: string, value: string): boolean => {
      const isValidDay = type === 'date' && value.length <= 2;
      const isValidMonth = type === 'month' && value.length <= 2;
      const isValidYear = type === 'year' && value.length <= 4;
      return isValidDay || isValidMonth || isValidYear;
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, index: number, type: string): void => {
      // eslint-disable-next-line no-shadow
      const { value } = target;

      if (!validateLength(type, value)) {
        return;
      }

      let date: string | null | Date | Array<HTMLInputElement> = Object.values(inputToRef)
        .map((item) => item?.current?.value)
        .join('/');

      setDateToState(date);
      date = date === null ? null : utils.parse(date, format);
      onChange(date);
      handleFocusNextInput(value, index);
    };

    return (
      <StyledDayPicker className={cx('dateInput')} theme={theme} mode={mode} ref={ref} {...wrapperProps}>
        {inputs.map((input, index) => {
          const inputWidth = input.format.length * 10 + 40;

          const isLastItem = index + 1 !== inputs.length;
          return (
            <div className='dateInputItem' key={`text-input-${input.type}`}>
              <TextInput
                id={`text-input-${input.type}`}
                key={`text-input-${input.type}-input`}
                onChange={(e): void => {
                  handleChange(e, index, input.type);
                }}
                inputRef={inputToRef[index]}
                title={input.title}
                style={{ width: `${inputWidth}px` }}
                placeholder={input.placeholder}
                value={
                  currentDate.split('/')[index]
                }
              />
              {isLastItem ? <Text className='dateInputItemDivider'>{divider}</Text> : null}
            </div>
          );
        })}
      </StyledDayPicker>
    );
  },
);
