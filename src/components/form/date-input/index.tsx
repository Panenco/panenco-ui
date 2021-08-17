import cx from 'classnames';
import { Text, TextInput } from 'components';
import { set, getDate, getMonth, getYear, getMinutes, getHours, getDaysInMonth } from 'date-fns';
// import { set, getDate,  getDaysInMonth } from 'date-fns';
import * as React from 'react';
import { useRef } from 'react';
import { useMode, useTheme } from 'utils/hooks';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

// const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// const cx = cx_;

const typeToGetMethod = {
  date: getDate,
  month: getMonth,
  year: getYear,
  minutes: getMinutes,
  hours: getHours,
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

export const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  (
    { inputs, divider, className, inputProps, title, wrapperProps, placeholder = '', ...props }: DateInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    // const customFormat = (dateStr, formatStr) => {
    //   const dateObj = dateStr ? new Date(dateStr) : new Date();
    //   return format(dateObj, formatStr);
    // };

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);

    const inputToRef = {
      0: input1,
      1: input2,
      2: input3,
    };

    const handleFocusNextInput = (value, index): void => {
      if (value.length > 1 && inputs[index + 1] && inputToRef[index + 1].current) {
        inputToRef[index + 1].current.focus();
      }
    };

    const [currentDate, setDateToState] = React.useState(new Date());

    const handleChange = (type: string, value, index): void => {
      const re = /^[0-9\b]+$/;
      if (value === '' || re.test(value)) {
        const formatValueMapping = {
          month: value - 1,
        };

        const dateParams = { [type]: value };
        console.log(type, value, dateParams);

        const daysInCurrentMonth =
          type === 'month'
            ? getDaysInMonth(set(new Date(currentDate), { month: value - 1 }))
            : getDaysInMonth(new Date(currentDate));

        if (type === 'date') {
          let date = value.slice(0, 2);
          if (value > daysInCurrentMonth) {
            date = daysInCurrentMonth;
          }
          dateParams[type] = date;
        }

        if (type === 'month') {
          let month = value.slice(0, 2) - 1;
          if (month > 11) {
            month = 11;
          }

          if (getDate(currentDate) > daysInCurrentMonth) {
            dateParams.date = daysInCurrentMonth;
          }
          dateParams[type] = month;
        }

        if (type === 'year') {
          dateParams[type] = value.slice(0, 4);
        }

        if (type === 'hours') {
          dateParams[type] = value > 24 ? 24 : value;
        }

        if (type === 'minutes') {
          dateParams[type] = value > 60 ? 60 : value;
          console.log('minut', dateParams);
        }

        console.log(111, dateParams, set(new Date(currentDate), dateParams));

        setDateToState(set(new Date(currentDate), dateParams));

        handleFocusNextInput(value, index);

        if (formatValueMapping[type]) {
          return formatValueMapping[type];
        } else {
          return value;
        }
      }
    };

    console.log(currentDate);
    console.log(101010, set(new Date(currentDate), { month: 0 }));
    return (
      <StyledDayPicker
        className={cx('dateInput')}
        // error={error}
        theme={theme}
        mode={mode}
        ref={ref}
        {...wrapperProps}
      >
        {inputs.map((input, index) => {
          const inputWidth = input.format.length * 10 + 40;

          const isLastItem = index + 1 !== inputs.length;

          return (
            <div className="dateInputItem">
              <TextInput
                // id={key}
                // key={key}
                onChange={(e) => handleChange(input.type, e.target.value, index)}
                // onChange={(e) => setDateToState(set(new Date(currentDate), { [input.type]: formatter(input.type, e.target.value, index) }))
                // }
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
