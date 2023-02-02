export type PUIModeColors = {
  [key: string]: any;
  alert?: string;
  base100?: string;
  base200?: string;
  base300?: string;
  base400?: string;
  base500?: string;
  base600?: string;
  base700?: string;
  base800?: string;
  base900?: string;
  error?: string;
  primary200?: string;
  primary500?: string;
  primary700?: string;
  primary900?: string;
  success?: string;
};

export type PUIColors = {
  alert: string;
  base100: string;
  base200: string;
  base300: string;
  base400: string;
  base500: string;
  base600: string;
  base700: string;
  base800: string;
  base900: string;
  error: string;
  primary200: string;
  primary500: string;
  primary700: string;
  primary900: string;
  success: string;
};

export type PUIWeights = {
  [key: string]: any;
  black?: number;
  bold?: number;
  extraLight?: number;
  extrabold?: number;
  light?: number;
  medium?: number;
  regular?: number;
  semiBold?: number;
  thin?: number;
};

export type ButtonVariantType = 'text' | 'contained' | 'outlined';

export type StampVariantType = 'fulfilled' | 'outlined';

export type TextSize = { lineHeight: string | number; textSize: string };

export type PUISizes = {
  [key: string]: any;
  h1: TextSize;
  h2: TextSize;
  h3: TextSize;
  l: TextSize;
  m: TextSize;
  s: TextSize;
  xl: TextSize;
  xs: TextSize;
};

export type PUITypography = {
  sizes: PUISizes;
  weights: PUIWeights;
};

export type PUITheme = {
  colors: PUIColors;
  typography: {
    sizes: PUISizes;
    weights: PUIWeights;
  };
};

export interface InputComponent {
  /**
   * The text that would be displayed in case an error occurred
   */
  error?: string;
  /**
   * Subtitle text content
   */
  subTitle?: string;
  /**
   * Title text content
   */
  title?: string;
}
export interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLInputElement>;
}

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLDivElement>;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  iconLeft?: boolean | string;
  iconRight?: boolean | string;
  icons?: Array<string>;
  isOpen?: boolean;
  onClick?: any;
  onIconClick?: any;
  shouldRotateIcon?: boolean;
  title?: string;
}

export type IconVariantSize = 'sm' | 'md' | 'lg';
