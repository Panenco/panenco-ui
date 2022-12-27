import * as React from 'react';
import cx from 'classnames';
import 'react-day-picker/dist/style.css';
import { PrimaryButton, TextInput } from 'components';
import MaskedInput from 'react-text-mask';
// eslint-disable-next-line import/no-duplicates
import {
  format as dateFnsFormat,
  parse as dateFnsParse,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
  isDate,
  isValid,
} from 'date-fns';
import { DayPicker as ReactDayPicker, DayPickerSingleProps } from 'react-day-picker';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { InputComponent } from 'utils/types';
import { Placement } from '@popperjs/core';
import { useOutsideClick } from 'utils/hooks/outside-click';
import { useTheme } from 'utils/hooks';
// eslint-disable-next-line import/no-duplicates
import en from 'date-fns/locale/en-GB';
import FocusLock from 'react-focus-lock';
import { useEffect, useMemo, useState } from 'react';
import { StyledDayPicker } from './style';

const defaultMask = [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

const transformTime = (date = new Date()): string => {
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

export function parseDate(str, format, locale?): Date | undefined {
  const parsed = dateFnsParse(str, format, new Date());
  if (isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

export function formatDate(date, format: string, locale?): string {
  return dateFnsFormat(date, format);
}

export interface DayPickerProps extends InputComponent, DayPickerSingleProps {
  dateInputProps?: any;
  dayPickerProps?: any;
  defaultDay?: Date;
  format?: string;
  iconAfter?: HTMLObjectElement | JSX.Element | string;
  inputMask?: (string | RegExp)[];
  isMobile?: boolean;
  isTimePicker?: boolean;
  manualInput?: boolean;
  onChange?: (value: any) => void;
  overlayComponentProps?: any;
  placeholder?: string;
  position?: Placement;
  preventClosingOnDaySelect?: boolean;
  saveLabel?: string;
  subTitle?: string;
  timeInputErrorText?: string;
  timeInputProps?: any;
  timeTitle?: string;
  title?: string;
  value?: Date;
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
  dayPickerProps,
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
}: DayPickerProps): React.ReactElement => {
  const theme = useTheme();

  const defaultDate = value || defaultDay || new Date();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState<Date>(defaultDate);
  const [dateTime, setDateTime] = useState(transformTime(new Date(date)));
  const [isTimeValid, setIsTimeValid] = useState<boolean>(true);

  const inputValue = useMemo(() => formatDate(date, format), [date, format]);

  const [month, setMonth] = useState<Date>(defaultDate);

  const [textInputValue, setTextInputValue] = useState<string>(inputValue);

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

  const handleDaySelect = (selectedDate: Date) => {
    if (!isTimePicker) closeCalendar();
    if (selectedDate) {
      const transformedDate = setHours(setMinutes(selectedDate, getMinutes(Number(date))), getHours(Number(date)));
      setDate(transformedDate);
      if (isTimeValid && !preventClosingOnDaySelect) {
        closeCalendar();
      }

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
        id='my-input-id'
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
      <PrimaryButton className='submitTime' type='button' onClick={closeCalendar}>
        {saveLabel}
      </PrimaryButton>
    </div>
  );

  return (
    <StyledDayPicker theme={theme} error={error} className='dayPickerWrapper' {...wrapperProps}>
      <FocusLock returnFocus autoFocus disabled={manualInput || !isCalendarOpen}>
        <MaskedInput
          id='date-input-id'
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
                selected={date}
                onSelect={handleDaySelect}
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
