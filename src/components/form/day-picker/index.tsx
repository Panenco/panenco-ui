import * as React from 'react';
import cx from 'classnames';
import 'react-day-picker/dist/style.css';
import { Icon, PrimaryButton, TextInput } from 'components';
import MaskedInput from 'react-text-mask';
import en, { format as dateFnsFormat, parse as dateFnsParse, getHours, getMinutes, setHours, setMinutes, isDate } from 'date-fns';
import { DayPicker as ReactDayPicker, DayPickerSingleProps } from 'react-day-picker';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { InputComponent } from 'utils/types';
import { Placement } from '@popperjs/core';
import { useOutsideClick } from 'utils/hooks/outside-click';
import { useTheme, useMode } from 'utils/hooks';
import { StyledDayPicker } from './style';

const transformTime = (date = new Date()): string => {
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

function parseDate(str, format, locale?): Date | undefined {
  const parsed = dateFnsParse(str, format, new Date());
  if (isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format: string, locale?): string {
  return dateFnsFormat(date, format);
}


export interface DayPickerProps extends InputComponent, DayPickerSingleProps {
  title?: string;
  subTitle?: string;
  value?: Date;
  onChange?: (value: any) => void;
  position?: Placement;
  format?: string;
  isMobile?: boolean;
  saveLabel?: string;
  wrapperProps?: any;
  dayPickerProps?: any;
  timeInputProps?: any;
  overlayComponentProps?: any;
  isTimePicker?: boolean;
  defaultDay?: Date;
  iconAfter?: HTMLObjectElement | JSX.Element;
  placeholder?: string;
  timeTitle?: string;
}


export const DayPicker = ({ 
  title, 
  subTitle, 
  value,
  onChange,
  position = 'bottom-start', 
  format = 'MM/dd/yyyy',
  isMobile,
  saveLabel = 'Save',
  wrapperProps,
  timeInputProps,
  dayPickerProps,
  overlayComponentProps,
  isTimePicker,
  defaultDay,
  iconAfter = Icon.icons.calendar,
  error,
  placeholder = 'type date here',
  timeTitle = 'time',
}: DayPickerProps): React.ReactElement => {
  const theme = useTheme();
  const { mode} = useMode();

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date>(value || defaultDay || new Date());
  const [dateTime, setDateTime] = React.useState(transformTime(new Date(date)));

  React.useEffect(() => {
    if (onChange) onChange(date);
  }, [date]);

  const calendarRef = React.useRef<HTMLDivElement>(null);

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  const showCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleDaySelect = (selectedDate: Date) => {
    if (!isTimePicker) closeCalendar();
    if (selectedDate) {
      const transformedDate = setHours(setMinutes(selectedDate, getMinutes(Number(date))), getHours(Number(date)));
      setDate(transformedDate);
    }
  };

  useOutsideClick(calendarRef, closeCalendar);

  return (
    <StyledDayPicker          
      mode={mode}
      theme={theme}
      error={error} 
      className='dayPickerWrapper' 
      {...wrapperProps}
    >
      <TextInput
        title={title}
        subTitle={subTitle}
        onFocus={showCalendar}
        disabled={isCalendarOpen}
        type="text"
        placeholder={placeholder}
        iconAfter={iconAfter}
        value={formatDate(date, format)}
        error={error}
      />
      <div className='calendar-wrapper'>
        {isCalendarOpen && (
          <div
            className={cx('calendar', position === 'bottom-end' ? 'bottom-end' : 'bottom-start', isMobile && 'mobile')} 
            ref={calendarRef}
            {...overlayComponentProps}
          >
            <ReactDayPicker
              initialFocus={isCalendarOpen}
              mode="single"
              defaultMonth={date}
              selected={date}
              onSelect={handleDaySelect}
              parseDate={parseDate}
              formatDate={formatDate}
              weekStartsOn={dayPickerProps?.weekStartsOn || 1} // Monday as default value
              locale={dayPickerProps?.locale || en}
              footer={isTimePicker && (
                <div className='footer'>
                  <MaskedInput
                    id="my-input-id"
                    render={(customRef, restProps): JSX.Element => (
                      <TextInput
                        id="mask"
                        name="mask"
                        title={timeTitle}
                        key="mask"
                        className='timeInput'
                        iconAfter={Icon.icons.clock}
                        inputRef={customRef}
                        {...timeInputProps}
                        {...restProps}
                      />
                    )}
                    mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                    placeholder="--:--"
                    pipe={createAutoCorrectedDatePipe('HH:MM')}
                    onChange={(e): void => {
                      const hours = Number(e.target.value.slice(0, 2));
                      const minutes = Number(e.target.value.slice(-2));
                      if (Number.isInteger(hours) && Number.isInteger(minutes)) {
                        setDateTime(e.target.value);
                        setDate(setHours(setMinutes(Number(date), minutes), hours));
                      }
                    }}
                    value={dateTime}
                  />
                  <PrimaryButton className="submitTime" type="button" onClick={closeCalendar}>
                    {saveLabel}
                  </PrimaryButton>
                </div>
                )
              }
              {...dayPickerProps}
            />
          </div>
        )}
      </div>
    </StyledDayPicker>
  );
};
