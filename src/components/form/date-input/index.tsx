import cx from 'classnames';
import { Text, TextInput } from 'components';
import { set, getDate, getMonth, getYear, getDaysInMonth as getDaysInMonthDateFns } from 'date-fns';

import * as React from 'react';
import { useRef } from 'react';
import { useMode, useTheme } from 'utils/hooks';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

const typeToGetMethod = {
  date: getDate,
  month: getMonth,
  year: getYear,
};

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
  divider: string;
}

export interface DateParamsProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  date?: number;
  month?: number;
  year?: number;
}

export const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  ({ inputs, divider, wrapperProps }: DateInputProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);

    const inputToRef = {
      0: input1,
      1: input2,
      2: input3,
    };

    const [currentDate, setDateToState] = React.useState(new Date());

    const handleDayInput = (
      strValue: string,
      dateParams: DateParamsProps,
      daysInCurrentMonth: number,
    ): DateParamsProps => {
      let value = Number(strValue.slice(0, 2));
      if (value > daysInCurrentMonth) {
        value = daysInCurrentMonth;
      }
      return { ...dateParams, date: value };
    };

    const handleMonthInput = (
      strValue: string,
      dateParams: DateParamsProps,
      daysInCurrentMonth: number,
    ): DateParamsProps => {
      let value = Number(strValue.slice(0, 2)) - 1;
      if (value > 11) {
        value = 11;
      }

      if (getDate(currentDate) > daysInCurrentMonth) {
        return { ...dateParams, date: daysInCurrentMonth, month: value };
      }
      return { ...dateParams, month: value };
    };

    const handleYearInput = (strValue: string, dateParams: DateParamsProps): DateParamsProps => {
      return { ...dateParams, year: Number(strValue.slice(0, 4)) };
    };

    const typeToHandler = {
      date: handleDayInput,
      month: handleMonthInput,
      year: handleYearInput,
    };

    const handleFocusNextInput = (value: number, index: number): void => {
      if (value > 9 && inputs[index + 1] && inputToRef[index + 1].current) {
        inputToRef[index + 1].current.focus();
      } else {
        inputToRef[index].current.focus();
      }
    };

    const getDaysInMonth = (type: string, value: number): number => {
      return type === 'month'
        ? getDaysInMonthDateFns(set(new Date(currentDate), { month: value - 1 }))
        : getDaysInMonthDateFns(new Date(currentDate));
    };

    const handleChange = (type: string, strValue: string, index: number): string => {
      const re = /^[0-9\b]+$/;
      if (re.test(strValue)) {
        const value = Number(strValue);
        const formatValueMapping = {
          month: value - 1,
        };

        let dateParams = { [type]: value };

        const daysInCurrentMonth = getDaysInMonth(type, value);

        handleFocusNextInput(value, index);

        dateParams = typeToHandler[type](strValue, dateParams, daysInCurrentMonth);

        setDateToState(set(new Date(currentDate), dateParams));

        if (formatValueMapping[type]) {
          return formatValueMapping[type];
        }

        return value.toString();
      }
      return '';
    };

    return (
      <StyledDayPicker className={cx('dateInput')} theme={theme} mode={mode} ref={ref} {...wrapperProps}>
        {inputs.map((input, index) => {
          const inputWidth = input.format.length * 10 + 40;

          const isLastItem = index + 1 !== inputs.length;

          return (
            <div className="dateInputItem" key={`text-input-${input.type}-${currentDate}`}>
              <TextInput
                id={`text-input-${input.type}-${currentDate}`}
                onChange={(e): string => handleChange(input.type, e.target.value, index)}
                inputRef={inputToRef[index]}
                title={input.title}
                style={{ width: `${inputWidth}px` }}
                placeholder={input.placeholder}
                value={
                  input.type === 'month'
                    ? typeToGetMethod[input.type](currentDate) + 1
                    : typeToGetMethod[input.type](currentDate)
                }
              />
              {isLastItem ? <Text className="dateInputItemDivider">{divider}</Text> : null}
            </div>
          );
        })}
      </StyledDayPicker>
    );
  },
);
