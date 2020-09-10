import * as React from 'react';
import cx from 'classnames';
import { StyledSVG } from './style';

import add from './icons/static-icons/add.svg';
import attachment from './icons/static-icons/attachment.svg';
import bellUnactive from './icons/static-icons/bell-unactive.svg';
import bell from './icons/static-icons/bell.svg';
import burger from './icons/static-icons/burger.svg';
import calendar from './icons/static-icons/calendar.svg';
import check from './icons/static-icons/check.svg';
import chevronDown from './icons/static-icons/chevron-down.svg';
import chevronLeft from './icons/static-icons/chevron-left.svg';
import chevronRight from './icons/static-icons/chevron-right.svg';
import chevronUp from './icons/static-icons/chevron-up.svg';
import circle from './icons/static-icons/circle.svg';
import clock from './icons/static-icons/clock.svg';
import close from './icons/static-icons/close.svg';
import closeEye from './icons/static-icons/closed-eye.svg';
import copy from './icons/static-icons/copy.svg';
import database from './icons/static-icons/database.svg';
import deleteIcon from './icons/static-icons/delete.svg';
import doneReport from './icons/static-icons/done-report.svg';
import duplicate from './icons/static-icons/duplicate.svg';
import edit from './icons/static-icons/edit.svg';
import exclude from './icons/static-icons/exclude.svg';
import eye from './icons/static-icons/eye.svg';
import filledStart from './icons/static-icons/filled-star.svg';
import filter from './icons/static-icons/filter.svg';
import home from './icons/static-icons/home.svg';
import info from './icons/static-icons/info.svg';
import loader from './icons/static-icons/loader.svg';
import lock from './icons/static-icons/lock.svg';
import mapPin from './icons/static-icons/map-pin.svg';
import maximize from './icons/static-icons/maximize.svg';
import minimize from './icons/static-icons/minimize.svg';
import minus from './icons/static-icons/minus.svg';
import moon from './icons/static-icons/moon.svg';
import openEye from './icons/static-icons/open-eye.svg';
import plus from './icons/static-icons/plus.svg';
import product from './icons/static-icons/product.svg';
import profile from './icons/static-icons/profile.svg';
import remove from './icons/static-icons/remove.svg';
import report from './icons/static-icons/report.svg';
import reports from './icons/static-icons/reports.svg';
import search from './icons/static-icons/search.svg';
import settings from './icons/static-icons/settings.svg';
import sorting from './icons/static-icons/sorting.svg';
import star from './icons/static-icons/star.svg';
import success from './icons/static-icons/success.svg';
import sun from './icons/static-icons/sun.svg';
import trash from './icons/static-icons/trash.svg';
import unseen from './icons/static-icons/unseen.svg';
import upload from './icons/static-icons/upload.svg';
import x from './icons/static-icons/x.svg';
import question from './icons/static-icons/question.svg';

// animated clock
import animatedClock from './icons/animated-clock/animated-clock.svg';

// const iconClass = css`
//   [fill]:not([fill='none']):not([fill^='url(']) {
//     fill: currentColor !important;
//   }

//   [stroke]:not([stroke='none']):not([stroke^='url(']) {
//     stroke: currentColor !important;
//   }
// `;

// const disabledClass = css`
//   pointer-events: none;
// `;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: any;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
  icons: any;
}

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon, className, onClick, width, height, disabled, ...props }: IconProps, ref): JSX.Element => {
    return (
      <StyledSVG
        className={cx(disabled && 'disabled', className)}
        width={width}
        height={height}
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
  remove,
  search,
  trash,
  upload,
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
};
