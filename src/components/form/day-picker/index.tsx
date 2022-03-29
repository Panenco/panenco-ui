import cx from 'classnames';
import { Icon, PrimaryButton, TextInput, Text } from 'components';
import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DayPickerInputProps, DayPickerProps } from 'react-day-picker/types/Props';
import { useOutsideClick } from 'utils/hooks/outside-click';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { useMode, useTheme } from 'utils/hooks';
import { DateUtils } from 'react-day-picker';
import { setHours, setMinutes, getHours, format as dateFnsFormat, parse as dateFnsParse, getMinutes } from 'date-fns';
import { TextInputProps } from '../text-input';
import { InputComponent, WrapperProps } from '../../../utils/types';
import { StyledDayPicker } from './style';
import 'react-day-picker/lib/style.css';

function parseDate(str, format, locale): Date | undefined {
  const parsed = dateFnsParse(str, format, new Date());
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format: string, locale): string {
  return dateFnsFormat(date, format);
}

const WEEKDAYS_SHORT_DEFAULT = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export interface PickerProps extends DayPickerInputProps, InputComponent {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  isTimePicker?: boolean;
  onChange: (value: any) => void;
  format?: string;
  wrapperProps?: WrapperProps;
  inputProps?: TextInputProps;
  saveLabel?: string;
  dayPickerProps?: DayPickerProps;
  defaultDay?: Date;
}

const transformTime = (date = new Date()): string => {
  const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
};

const defaultFormat = 'dd/MM/yyyy';
export const DayPicker = React.forwardRef<HTMLDivElement, PickerProps>(
  (
    {
      format = defaultFormat,
      onChange,
      isTimePicker,
      value,
      title,
      placeholder = format,
      iconAfter = Icon.icons.calendar,
      subTitle,
      wrapperProps,
      error,
      saveLabel = 'Save',
      inputProps,
      dayPickerProps,
      defaultDay,
      ...props
    }: PickerProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    let dayPickerInputRef;

    const hideDayPicker = (): void => {
      dayPickerInputRef.hideDayPicker();
    };

    const [day, setDay] = React.useState(value || defaultDay || new Date());

    const handleDayChange = (selectedDay): void => {
      const transformedDate = setHours(setMinutes(selectedDay, getMinutes(Number(day))), getHours(Number(day)));
      setDay(transformedDate);
    };

    React.useEffect(() => {
      onChange(day);
    }, [day]);

    const OverlayComponent = ({
      children,
      // got 2 default props from rest operator (avoid setting custom props to html element)
      classNames,
      selectedDay,
      ...overlayComponentProps
    }: {
      children: React.ReactNode;
      classNames: { [key: string]: any };
      selectedDay: Date;
      [key: string]: any;
    }): React.ReactElement => {
      const overlayCompRef = React.useRef<HTMLDivElement>(null);
      const [dateTime, setDateTime] = React.useState(transformTime(new Date(day)));

      const submitAndClose = (): void => {
        const newTempTo = setHours(setMinutes(new Date(day), Number(dateTime.slice(-2))), Number(dateTime.slice(0, 2)));

        handleDayChange(newTempTo);
        hideDayPicker();
      };
      //  resolve day-picker issue for custom Overlay (prev/next month onClick doesn't hide Overlay component)
      useOutsideClick(overlayCompRef, isTimePicker ? null : hideDayPicker);

      return (
        <div className="overlay" {...overlayComponentProps} ref={overlayCompRef}>
          {children}
          {isTimePicker ? (
            <div className="footer">
              <MaskedInput
                id="my-input-id"
                render={(customRef, restProps): JSX.Element => (
                  <TextInput
                    id="mask"
                    name="mask"
                    title="Time"
                    key="mask"
                    iconAfter={Icon.icons.clock}
                    inputRef={customRef}
                    {...restProps}
                  />
                )}
                mask={[/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/]}
                placeholder="--:--"
                pipe={createAutoCorrectedDatePipe('HH:MM')}
                onChange={(e): void => {
                  const hours = Number(e.target.value.slice(0, 2));
                  const minutes = Number(e.target.value.slice(-2));
                  if (hours && minutes) {
                    setDateTime(e.target.value);
                    setDay(setHours(setMinutes(Number(day), minutes), hours));
                  }
                }}
                value={dateTime}
              />
              <PrimaryButton className="submitTime" type="button" onClick={submitAndClose}>
                {saveLabel}
              </PrimaryButton>
            </div>
          ) : null}
        </div>
      );
    };

    return (
      <StyledDayPicker
        className={cx('dayPickerInput')}
        theme={theme}
        mode={mode}
        ref={ref}
        error={error}
        {...wrapperProps}
      >
        {title && (
          <Text weight={theme.typography.weights.bold} size={theme.typography.sizes.m} className="title">
            {title}
          </Text>
        )}
        {subTitle && (
          <Text size={theme.typography.sizes.xs} className="subtitle">
            {subTitle}
          </Text>
        )}

        <DayPickerInput
          ref={(curRef): void => {
            dayPickerInputRef = curRef;
          }}
          formatDate={formatDate}
          format={format}
          parseDate={parseDate}
          hideOnDayClick={!isTimePicker}
          overlayComponent={OverlayComponent}
          dayPickerProps={{
            weekdaysShort: dayPickerProps?.weekdaysShort || WEEKDAYS_SHORT_DEFAULT,
            firstDayOfWeek: dayPickerProps?.firstDayOfWeek || 1, // Monday as default value
            locale: dayPickerProps?.locale || 'en',
            ...dayPickerProps,
          }}
          onDayChange={handleDayChange}
          placeholder={placeholder}
          value={day}
          keepFocus={false}
          {...props}
          component={React.forwardRef<HTMLDivElement, TextInputProps>((inputComponentProps, wrapRef) => (
            <TextInput ref={wrapRef} iconAfter={iconAfter} error={error} {...inputComponentProps} {...inputProps} />
          ))}
        />
      </StyledDayPicker>
    );
  },
);

DayPicker.defaultProps = {
  isTimePicker: false,
};
