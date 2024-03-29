import cx from 'classnames';

import { Text, TextInput } from 'components';

import * as React from 'react';
import { useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';
import { InputComponent, WrapperProps } from 'utils/types';
import DateUtils from './date-utils';

import { StyledDayPicker } from './style';

const utils = new DateUtils();

interface InputPropsType extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  [key: string]: any;
}

interface InputProp extends InputPropsType {
  format: string;
  title: string;
  type: string;
}

export interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'>,
    Pick<InputComponent, 'error'> {
  /**
   * Input divider
   */
  divider?: string;
  /**
   * The props used for input component
   * */
  inputProps?: InputPropsType;
  /**
   * Pass a ref to the `input` element
   * */
  inputRef?: React.Ref<any>;
  /**
   * Inputs config
   * */
  inputs: InputProp[];
  /**
   * Callback fired when the input is blurred
   * */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /**
   * Callback fired when the value changes
   * */
  onChange(newValue): void;
  /**
   * The value of the input
   * */
  value?: string | Date | null;
  /**
   * The props used for wrapper component
   * */
  wrapperProps?: WrapperProps;
}

export const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  (
    { inputs, disabled, divider, wrapperProps, value, onChange, onBlur, className, error }: DateInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();

    const format = useMemo(() => {
      return inputs.map((i) => i.format).join('/');
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

    React.useEffect(() => {
      if (!currentDate && currentInputValue !== currentDate) setDateToState(currentInputValue);
    }, [currentInputValue]);

    // eslint-disable-next-line no-shadow
    const handleFocusNextInput = (value: string, index: number): void => {
      if (value[0] === '0' && value.length > 1 && inputToRef[index + 1]?.current) {
        inputToRef[index + 1].current.focus();
        return;
      }

      if (Number(value) > 9 && inputs[index + 1] && inputToRef[index + 1]?.current) {
        inputToRef[index + 1].current.focus();
      } else if (inputToRef[index]?.current) {
        inputToRef[index].current.focus();
      }
    };

    // eslint-disable-next-line no-shadow
    const validateLength = (type: string, value: string): boolean => {
      return inputs.some((item) => item.type === type && value.length <= item.format.length);
    };

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>, index: number, type: string): void => {
      // eslint-disable-next-line no-shadow
      const { value } = target;

      if (!validateLength(type, value)) {
        return;
      }

      let date: string | null | Date | Array<HTMLInputElement> = Object.values(inputToRef)
        .filter((item) => item.current)
        .map((item) => item?.current?.value)
        .join('/');
      setDateToState(date);
      date = date === null ? null : utils.parse(date, format);
      onChange(date);
      handleFocusNextInput(value, index);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      if (
        onBlur &&
        inputToRef[0].current !== e.relatedTarget &&
        inputToRef[1].current !== e.relatedTarget &&
        inputToRef[2].current !== e.relatedTarget
      ) {
        onBlur(e);
      }
    };

    return (
      <StyledDayPicker className={cx('dateInput', error && 'error', className)} ref={ref} {...wrapperProps}>
        <div className='dateInputWrapper'>
          {inputs.map((input, index) => {
            const inputWidth = input.format.length * 10 + 40;

            const isLastItem = index + 1 !== inputs.length;
            return (
              <div className='dateInputItem' key={`text-input-${input.type}`}>
                <TextInput
                  key={`text-input-${input.type}-input`}
                  onChange={(e): void => {
                    handleChange(e, index, input.type);
                  }}
                  onBlur={handleBlur}
                  disabled={disabled}
                  inputRef={inputToRef[index]}
                  title={input.title}
                  style={{ width: `${inputWidth}px` }}
                  placeholder={input.placeholder}
                  value={currentDate.split('/')[index]}
                />
                {isLastItem ? <Text className='dateInputItemDivider'>{divider}</Text> : null}
              </div>
            );
          })}
        </div>
        {error ? (
          <Text
            component='span'
            size={theme.typography.sizes.xs}
            color={theme.colors.error}
            className='inputErrorLabel'
          >
            {error}
          </Text>
        ) : null}
      </StyledDayPicker>
    );
  },
);
