import * as React from 'react';
import cx from 'classnames';
import { sizeToString } from 'utils/helpers';
import { StyledSVG } from './style';

import add from './static-icons/add.svg';
import alignJustify from './static-icons/align-justify.svg';
import attachment from './static-icons/attachment.svg';
import bellUnactive from './static-icons/bell-unactive.svg';
import bell from './static-icons/bell.svg';
import burger from './static-icons/burger.svg';
import burger4Lines from './static-icons/burger-4lines.svg';
import calendar from './static-icons/calendar.svg';
import check from './static-icons/check.svg';
import checkSquare from './static-icons/check-square.svg';
import chevronDown from './static-icons/chevron-down.svg';
import chevronLeft from './static-icons/chevron-left.svg';
import chevronRight from './static-icons/chevron-right.svg';
import chevronUp from './static-icons/chevron-up.svg';
import circle from './static-icons/circle.svg';
import clock from './static-icons/clock.svg';
import close from './static-icons/close.svg';
import closeEye from './static-icons/closed-eye.svg';
import copy from './static-icons/copy.svg';
import database from './static-icons/database.svg';
import deleteIcon from './static-icons/delete.svg';
import doneReport from './static-icons/done-report.svg';
import dotsVertical from './static-icons/dots-vertical.svg';
import duplicate from './static-icons/duplicate.svg';
import edit from './static-icons/edit.svg';
import editPen from './static-icons/edit-pen.svg';
import exclude from './static-icons/exclude.svg';
import eye from './static-icons/eye.svg';
import filledStart from './static-icons/filled-star.svg';
import filledPlus from './static-icons/filled-plus.svg';
import fileMinus from './static-icons/file-minus.svg';
import filter from './static-icons/filter.svg';
import home from './static-icons/home.svg';
import info from './static-icons/info.svg';
import loader from './static-icons/loader.svg';
import lock from './static-icons/lock.svg';
import logOut from './static-icons/log-out.svg';
import mapPin from './static-icons/map-pin.svg';
import maximize from './static-icons/maximize.svg';
import minimize from './static-icons/minimize.svg';
import minus from './static-icons/minus.svg';
import moon from './static-icons/moon.svg';
import openEye from './static-icons/open-eye.svg';
import plus from './static-icons/plus.svg';
import product from './static-icons/product.svg';
import profile from './static-icons/profile.svg';
import remove from './static-icons/remove.svg';
import report from './static-icons/report.svg';
import reports from './static-icons/reports.svg';
import search from './static-icons/search.svg';
import settings from './static-icons/settings.svg';
import sorting from './static-icons/sorting.svg';
import star from './static-icons/star.svg';
import success from './static-icons/success.svg';
import sun from './static-icons/sun.svg';
import trash from './static-icons/trash.svg';
import unseen from './static-icons/unseen.svg';
import upload from './static-icons/upload.svg';
import uploadDown from './static-icons/upload-down.svg';
import x from './static-icons/x.svg';
import question from './static-icons/question.svg';
import unlink from './static-icons/unlink.svg';

// animated clock
import animatedClock from './icons/animated-clock/animated-clock.svg';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: any;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  size?: number | string;
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
  icons: { [key: string]: any };
}

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon, className, onClick, width, height, size, disabled, ...props }: IconProps, ref): JSX.Element => {
    const defaultSize = icon.viewBox?.split(' ')[3] || 16;
    return (
      <StyledSVG
        className={cx(disabled && 'disabled', 'svg', className)}
        width={sizeToString(width || size || defaultSize)}
        height={sizeToString(height || size || defaultSize)}
        viewBox={icon.viewBox}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        <use xlinkHref={`#${icon.id}`} />
      </StyledSVG>
    );
  },
) as CompoundedComponent;

Icon.icons = {
  animatedClock,
  chevronDown,
  chevronUp,
  chevronLeft,
  chevronRight,
  attachment,
  calendar,
  check,
  close,
  clock,
  unseen,
  duplicate,
  add,
  bell,
  bellUnactive,
  delete: deleteIcon,
  edit,
  eye,
  lock,
  maximize,
  minimize,
  minus,
  plus,
  filledPlus,
  remove,
  search,
  trash,
  upload,
  uploadDown,
  success,
  circle,
  filter,
  home,
  mapPin,
  openEye,
  product,
  profile,
  report,
  reports,
  star,
  closeEye,
  doneReport,
  filledStart,
  x,
  burger,
  copy,
  database,
  exclude,
  info,
  loader,
  moon,
  settings,
  sorting,
  sun,
  question,
  unlink,
  logOut,
  alignJustify,
  fileMinus,
  checkSquare,
  editPen,
  dotsVertical,
  burger4Lines,
};
