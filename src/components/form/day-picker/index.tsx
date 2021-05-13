import cx from 'classnames';
import { Icon, PrimaryButton, TextInput } from 'components';
import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps } from 'react-day-picker/types/Props';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { useMode, useTheme } from 'utils/hooks';

import { WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';

const WEEKDAYS_SHORT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export interface PickerProps extends DayPickerInputProps {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  isTimePicker: Boolean;
  // inputProps?: InputPropsType; // will be removed in next versions
}

// function OverlayComponent({ children, isTimePicker, ...props }) {
//   return (

//   );
// }

const transformTime = () => {
  const date = new Date();
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

export const DayPicker = React.forwardRef<HTMLDivElement, PickerProps>(
  (
    {
      // className,
      // type = 'text',
      // title,
      // subTitle,
      // iconBefore,
      // iconAfter,
      // disabled,
      // error,
      // wrapperProps,
      isTimePicker,
      inputProps,
      placeholder = '',
      // inputRef,
      ...props
    }: PickerProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    let dayPickerInputRef;

    const hideDayPicker = () => {
      dayPickerInputRef.hideDayPicker();
    };

    const [dateTime, setDateTime] = React.useState(transformTime());

    const OverlayComponent = ({ children, ...props }) => {
      return (
        <div className="overlay" {...props}>
          {children}
          {isTimePicker ? (
            <div className="footer">
              <MaskedInput
                mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                placeholder="--:--"
                onChange={(e) => setDateTime(e.target.value)}
                pipe={createAutoCorrectedDatePipe('HH:MM')}
                id="my-input-id"
                render={(ref) => (
                  <TextInput
                    id="34254"
                    title="Time"
                    iconAfter={Icon.icons.clock}
                    ref={(input) => ref(input)}
                    // {...props}
                  />
                )}
                value={dateTime}
              />
              <PrimaryButton className="submitTime" type="button" onClick={hideDayPicker}>
                Save
              </PrimaryButton>
            </div>
          ) : null}
        </div>
      );
    };

    return (
      <StyledDayPicker
        className={cx('dayPickerInput')}
        // error={error}
        theme={theme}
        mode={mode}
        ref={ref}
        // {...wrapperProps}
      >
        <DayPickerInput
          ref={(ref) => (dayPickerInputRef = ref)}
          className="wrapper"
          showOverlay
          hideOnDayClick={!isTimePicker}
          // showOutsideDays
          // keepFocus
          overlayComponent={OverlayComponent}
          dayPickerProps={{
            weekdaysShort: WEEKDAYS_SHORT,
            firstDayOfWeek: 0,
          }}
          // selectedDay={new Date()}
          component={(props) => <TextInput {...props} />}
          // overlayComponent={this.overlayComponent}
          // disabledDays={disabledDaysFrom}
          // onDayClick={this.handleFromDayClick}
          // navbarElement={(month) => <Navbar currentMonth={month} />}
          // selectedDays={selectedDays}
          // modifiers={modifiers}
          // month={from}
        />
      </StyledDayPicker>
    );
  },
);

DayPicker.defaultProps = {
  isTimePicker: false,
};
