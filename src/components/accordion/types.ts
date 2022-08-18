import { icons } from 'components';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  title?: string;
  onClick?: any;
  onIconClick?: any;
  iconLeft?: boolean | keyof typeof icons.sm;
  iconRight?: boolean | keyof typeof icons.sm;
  icons?: Array<keyof typeof icons.sm>;
  shouldRotateIcon?: boolean;
}
