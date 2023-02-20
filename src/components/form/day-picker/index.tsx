import * as React from 'react';
import cx from 'classnames';

import 'react-day-picker/dist/style.css';
import { Button, TextInput } from 'components';
import MaskedInput from 'react-text-mask';
import {
  format as dateFnsFormat,
  parse as dateFnsParse,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
  isDate,
  isValid,
  addDays,
  // eslint-disable-next-line import/no-duplicates
} from 'date-fns';
import { DayPicker as ReactDayPicker, DateRange, DayPickerSingleProps } from 'react-day-picker';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { InputComponent } from 'utils/types';
import { Placement } from '@popperjs/core';
import { useOutsideClick } from 'utils/hooks/outside-click';
// eslint-disable-next-line import/no-duplicates
import en from 'date-fns/locale/en-GB';
import FocusLock from 'react-focus-lock';
import { useEffect, useMemo, useState } from 'react';
import { StyledDayPicker } from './style';

const defaultMask = [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

const transformTime = (date = new Date()): string => {
  if (!isValid(date)) {
    return '';
  }
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

export function parseDate(str, format): Date | undefined {
  if (!str) {
    return undefined;
  }
  const parsed = dateFnsParse(str, format, new Date());
  if (isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

export function formatDate(date, format: string): string {
  if (!isValid(date)) {
    return '';
  }
  return dateFnsFormat(date, format);
}

export interface DayPickerProps extends InputComponent, DayPickerSingleProps {
  /**
   * Props for date input
   */
  dateInputProps?: any;
  /**
   * Allow to pass props to DayPicker component from 'react-day-picker' library
   * */
  dayPickerProps?: any;
  /**
   * Will be default date if **value** not passed
   * */
  defaultDay?: Date | null;
  /**
   * Default end date for the range picker
   * */
  defaultRangeEndDate?: Date;
  /**
   * Default start date for the range picker
   * */
  defaultRangeStartDate?: Date;
  /**
   * Date format
   * */
  format?: string;
  /**
   * Icon after input
   * */
  iconAfter?: HTMLObjectElement | JSX.Element | string;
  /**
   * Text input mask that follows text input format, required for manualInput usage
   * */
  inputMask?: (string | RegExp)[];
  /**
   * Allow to show mobile view of the component
   * */
  isMobile?: boolean;
  /**
   * Allow to show input for changing time
   * */
  isTimePicker?: boolean;
  /**
   * Allows user to set day by changing text input value, optional property, requires **inputMask** property to be set, false by default
   * */
  manualInput?: boolean;
  /**
   * Callback for changing date
   * */
  onChange?: (value: any) => void;
  /**
   * Props for overlay component
   * */
  overlayComponentProps?: any;
  /**
   * Placeholder for input
   * */
  placeholder?: string;
  /**
   * Allow to position calendar, can be: bottom-end, bottom-start, by default is bottom-start
   * */
  position?: Placement;
  /**
   * Prevent closing on day select
   * */
  preventClosingOnDaySelect?: boolean;
  /**
   * Label for change time button
   * */
  saveLabel?: string;
  /**
   * Subtitle for DayPicker
   * */
  subTitle?: string;
  /**
   * Error label for time input error, default is 'Please, enter valid time'
   * */
  timeInputErrorText?: string;
  /**
   * Props for time input
   * */
  timeInputProps?: any;
  /**
   * Title for time input
   * */
  timeTitle?: string;
  /**
   * Title for DayPicker
   * */
  title?: string;
  /**
   * Date of DayPicker, has the highest priority
   * */
  value?: Date | null;
  /**
   * Props for wrapper
   * */
  wrapperProps?: any;
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
  dayPickerProps = {},
  overlayComponentProps,
  dateInputProps,
  isTimePicker,
  defaultDay,
  iconAfter = 'calendar',
  error,
  placeholder = 'type date here',
  timeTitle = 'time',
  dir = 'ltr',
  timeInputErrorText = 'Please, enter valid time',
  preventClosingOnDaySelect,
  manualInput = false,
  inputMask = defaultMask,
  defaultRangeStartDate = new Date(),
  defaultRangeEndDate = addDays(new Date(), 7),
}: DayPickerProps): React.ReactElement => {
  const { mode } = dayPickerProps;
  const isRangeMode = mode === 'range';

  const defaultRangeSelected: DateRange = {
    from: defaultRangeStartDate,
    to: defaultRangeEndDate,
  };

  const [range, setRange] = useState<DateRange | undefined>(defaultRangeSelected);

  const defaultDate = value || defaultDay || null;

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(defaultDate);
  const [dateTime, setDateTime] = useState(transformTime(date ? new Date(date) : undefined));
  const [isTimeValid, setIsTimeValid] = useState<boolean>(true);

  const inputValue = useMemo(() => formatDate(date, format), [date, format]);
  const rangeInputValue = useMemo(
    () => `${formatDate(range?.from, format)} - ${formatDate(range?.to, format)}`,
    [range, format],
  );

  const [month, setMonth] = useState<Date | undefined>(defaultDate || undefined);

  const defaultTextInputValue = isRangeMode ? rangeInputValue : inputValue;

  const [textInputValue, setTextInputValue] = useState<string>(defaultTextInputValue);

  React.useEffect(() => {
    if (onChange) onChange(date);
  }, [date]);

  useEffect(() => {
    // get parsed date from text input
    const parsedDate = parseDate(textInputValue, format);

    // check if text input has string which is valid date
    const isParsedDateValid = isValid(parsedDate);

    if (isParsedDateValid && parsedDate) {
      setDate(parsedDate);
      setMonth(parsedDate);
    }
  }, [textInputValue]);

  const calendarRef = React.useRef<HTMLDivElement>(null);

  const onTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextInputValue(event.target.value);
  };

  const closeCalendar = () => {
    if (isTimeValid) setIsCalendarOpen(false);
  };

  const showCalendar = () => {
    setIsCalendarOpen(true);
  };

  const handleRangeDaySelect = (newRange: { from: Date; to: Date }) => {
    setRange(newRange);
    setTextInputValue(`${formatDate(newRange.from, format)} - ${formatDate(newRange.to, format)}`);
  };

  const handleDaySelect = (selectedDate: Date) => {
    if (!isTimePicker && !preventClosingOnDaySelect) closeCalendar();
    if (selectedDate) {
      const transformedDate = setHours(setMinutes(selectedDate, getMinutes(Number(date))), getHours(Number(date)));
      setDate(transformedDate);

      setTextInputValue(formatDate(transformedDate, format));
    } else if (!selectedDate && isTimeValid) closeCalendar();
  };

  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeCalendar();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isTimeValid]);

  useOutsideClick(calendarRef, closeCalendar);

  const handleTimeChange = (e): void => {
    const hours = Number(e.target.value.slice(0, 2));
    const minutes = Number(e.target.value.slice(-2));
    if (Number.isInteger(hours) && Number.isInteger(minutes) && e.target.value.trim().length !== 0) {
      if (!isTimeValid) setIsTimeValid(true);
      setDateTime(e.target.value);
      setDate(setHours(setMinutes(Number(date), minutes), hours));
      setTextInputValue(formatDate(setHours(setMinutes(Number(date), minutes), hours), format));
    } else {
      setDateTime(e.target.value.replace(/[_:]/g, ''));
      setIsTimeValid(false);
    }
  };

  const CalendarComponent = () => (
    <div className='footer'>
      <MaskedInput
        key='my-input-id'
        render={(customRef, restProps): JSX.Element => (
          <TextInput
            id='mask'
            name='mask'
            title={timeTitle}
            key='mask'
            className='timeInput'
            iconAfter='clock'
            inputRef={customRef}
            dir={dayPickerProps?.dir || dir}
            autoFocus
            error={!isTimeValid && timeInputErrorText}
            disabled={!date}
            {...timeInputProps}
            {...restProps}
          />
        )}
        mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
        placeholder='--:--'
        pipe={createAutoCorrectedDatePipe('HH:MM')}
        onChange={handleTimeChange}
        value={dateTime}
      />
      <Button disabled={!date} variant='contained' className='submitTime' type='button' onClick={closeCalendar}>
        {saveLabel}
      </Button>
    </div>
  );

  return (
    <StyledDayPicker error={error} className='dayPickerWrapper' {...wrapperProps}>
      <FocusLock returnFocus autoFocus disabled={manualInput || !isCalendarOpen}>
        <MaskedInput
          key='date-input-id'
          render={(customRef, restProps): JSX.Element => (
            <TextInput
              title={title}
              subTitle={subTitle}
              onClick={showCalendar}
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  showCalendar();
                }
              }}
              disabled={(isCalendarOpen && !manualInput) || dateInputProps?.disable}
              type='text'
              iconAfter={iconAfter}
              error={error}
              dir={dayPickerProps?.dir || dir}
              inputRef={customRef}
              value={textInputValue}
              {...dateInputProps}
              {...restProps}
            />
          )}
          mask={manualInput ? inputMask : false}
          placeholder={placeholder}
          onChange={onTextInputChange}
          value={textInputValue}
        />

        <div className='calendar-wrapper'>
          {isCalendarOpen && (
            <div
              className={cx(
                'calendar',
                position === 'bottom-end' ? 'bottom-end' : 'bottom-start',
                isMobile && 'mobile',
              )}
              ref={calendarRef}
              {...overlayComponentProps}
            >
              <ReactDayPicker
                initialFocus={isCalendarOpen && !manualInput}
                mode='single'
                defaultMonth={date}
                onMonthChange={setMonth}
                month={month}
                selected={isRangeMode ? range : date}
                onSelect={isRangeMode ? handleRangeDaySelect : handleDaySelect}
                parseDate={parseDate}
                formatDate={formatDate}
                weekStartsOn={dayPickerProps?.weekStartsOn || 1} // Monday as default value
                locale={dayPickerProps?.locale || en}
                footer={isTimePicker && <CalendarComponent />}
                dir={dayPickerProps?.dir || dir}
                {...dayPickerProps}
              />
            </div>
          )}
        </div>
      </FocusLock>
    </StyledDayPicker>
  );
};
