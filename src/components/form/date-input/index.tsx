import cx from 'classnames';
import { Text, TextInput } from 'components';
import { set } from 'date-fns';
import * as React from 'react';
import { useRef } from 'react';
import { useMode, useTheme } from 'utils/hooks';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

// const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// import { DayPicker as DayPickerComponent } from 'react-day-picker';

// const cx = cx_;

// import DayPicker from "../../../../node_modules/react-day-picker/types"
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

    const input1 = useRef<HTMLInputElement>(null)
    const input2 = useRef<HTMLInputElement>(null)
    const input3 = useRef<HTMLInputElement>(null)

    const inputToRef = {
      0: input1,
      1: input2,
      2: input3,
    }

    const [currentDate, setDateToState] = React.useState(new Date());

    const [dateValue, setDateValueToState] = React.useState("");
    // const [month, setMonthValueToState] = React.useState(null);

    // const typeToValue = {
    //   "date": dateValue
    // }

    const formatter = (type: string, value, index) => {
      if (value === ''){
        return
      }
      const formatValueMapping = {
        month: value - 1,
      };
      console.log(type, value);
      if (type === 'date'){
        setDateValueToState(value.slice(0,2))
        if(value.length > 2 && inputToRef[index + 1]?.current){
          console.log('focus', inputToRef[index + 1].current, inputToRef[index + 1].current.focus);
          inputToRef[index + 1].current.focus();
        }
      }
      
      if (formatValueMapping[type]) {
        console.log(1, formatValueMapping[type]);
        return formatValueMapping[type];
      } else {
        console.log(2, value);
        return value;
      }
    };

    console.log(currentDate, dateValue);

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
                onChange={(e) => setDateToState(set(new Date(currentDate), { [input.type]: formatter(input.type, e.target.value, index) }))
                }
                ref={inputToRef[index]}
                title={input.title}
                style={{ width: `${inputWidth}px` }}
                placeholder={input.placeholder}
              />
              {isLastItem ? <Text className="dateInputItemDivider">{divider}</Text> : null}
            </div>
          );
        })}
      </StyledDayPicker>
    );
  },
);
