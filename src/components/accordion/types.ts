import { icons } from 'components';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  iconLeft?: boolean | keyof typeof icons.sm;
  iconRight?: boolean | keyof typeof icons.sm;
  icons?: Array<keyof typeof icons.sm>;
  isOpen?: boolean;
  onClick?: any;
  onIconClick?: any;
  shouldRotateIcon?: boolean;
  title?: string;
}
