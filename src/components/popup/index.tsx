import { Popup, PopupProps } from './Popup';
import { PopupBody } from './PopupBody';
import { PopupHeader, PopupHeaderProps } from './PopupHeader';
import { PopupFooter, PopupFooterProps } from './PopupFooter';
import { PopupTitle, PopupTitleProps } from './PopupTitle';

const PopupNamespace = Object.assign(Popup, {
  Header: PopupHeader,
  Footer: PopupFooter,
  Body: PopupBody,
  Title: PopupTitle,
});

export { PopupNamespace as Popup, PopupProps, PopupFooterProps, PopupHeaderProps, PopupTitleProps };
