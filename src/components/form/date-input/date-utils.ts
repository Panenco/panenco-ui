/* eslint-disable class-methods-use-this */
import {
  format,
  isValid,
  isAfter as isAfterDateFns,
  isBefore as isBeforeDateFns,
  parse as dateFnsParse,
} from 'date-fns';

interface DateUtilsInterface {
  date(value?: any): Date | null;

  formatByString(date: Date, formatString: string): string;

  getDate(value: any, dateFormat: string): string;

  isAfter(value: Date, comparing: Date): boolean;

  isBefore(value: Date, comparing: Date): boolean;

  isValid(value: any): boolean;

  parse(value: string, formatString: string): null | Date;
}

class DateUtils implements DateUtilsInterface {
  public date = (value?: any): Date | null => {
    if (value === null) {
      return null;
    }

    return new Date(value);
  };

  public formatByString = (date: Date, formatString: string): string => {
    return format(date, formatString);
  };

  public parse = (value: string, formatString: string): null | Date => {
    if (value === '') {
      return null;
    }

    return dateFnsParse(value, formatString, new Date());
  };

  public isValid = (value: any): boolean => {
    return isValid(this.date(value));
  };

  public isAfter = (value: Date, comparing: Date): boolean => {
    return isAfterDateFns(value, comparing);
  };

  public isBefore = (value: Date, comparing: Date): boolean => {
    return isBeforeDateFns(value, comparing);
  };

  public getDate = (value: any, inputFormat: string): string => {
    const date = this.date(value);
    const isEmpty = value === null;

    if (isEmpty) {
      return '';
    }

    return this.isValid(date)
      ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.formatByString(date!, inputFormat)
      : '';
  };
}

export default DateUtils;
