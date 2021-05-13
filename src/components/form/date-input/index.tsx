import cx from 'classnames';
import { Text, TextInput } from 'components';
import { set } from 'date-fns';
import * as React from 'react';
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

    const [currentDate, setDateToState] = React.useState(new Date());

    const formatter = (type: string, value) => {
      const formatValueMapping = {
        month: value - 1,
      };

      if (formatValueMapping[type]) {
        return formatValueMapping[type];
      } else {
        return value;
      }
    };

    console.log(currentDate);

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
                onChange={(e) =>
                  setDateToState(set(new Date(currentDate), { [input.type]: formatter(input.type, e.target.value) }))
                }
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
