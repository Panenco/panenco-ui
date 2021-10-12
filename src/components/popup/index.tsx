import { Popup } from './Popup';
import { PopupBody } from './PopupBody';
import { PopupHeader } from './PopupHeader';
import { PopupFooter } from './PopupFooter';
import { PopupTitle } from './PopupTitle';

const PopupNamespace = Object.assign(Popup, {
  Header: PopupHeader,
  Footer: PopupFooter,
  Body: PopupBody,
  Title: PopupTitle,
});

export { PopupNamespace as Popup };
