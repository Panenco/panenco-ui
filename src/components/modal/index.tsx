import { Modal, ModalProps } from './Modal';
import { ModalBody } from './ModalBody';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
import { ModalTitle, ModalTitleProps } from './ModalTitle';

const ModalNamespace = Object.assign(Modal, {
  Header: ModalHeader,
  Footer: ModalFooter,
  Body: ModalBody,
  Title: ModalTitle,
});

export { ModalNamespace as Modal, ModalProps, ModalFooterProps, ModalHeaderProps, ModalTitleProps };
