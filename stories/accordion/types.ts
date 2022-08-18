export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  title?: string;
  onClick?: any;
  onIconClick?: any;
  iconLeft?: boolean | string;
  iconRight?: boolean | string;
  icons?: Array<string>;
  shouldRotateIcon?: boolean;
}
