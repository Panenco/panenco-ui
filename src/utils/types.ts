export type PUIModeColors = {
  alert?: string;
  error?: string;
  success?: string;
  primary200?: string;
  primary500?: string;
  primary700?: string;
  primary900?: string;
  base100?: string;
  base200?: string;
  base300?: string;
  base400?: string;
  base500?: string;
  base600?: string;
  base700?: string;
  base800?: string;
  base900?: string;
  [key: string]: any;
};

export type PUIColors = {
  alert: string;
  error: string;
  success: string;
  primary200: string;
  primary500: string;
  primary700: string;
  primary900: string;
  base100: string;
  base200: string;
  base300: string;
  base400: string;
  base500: string;
  base600: string;
  base700: string;
  base800: string;
  base900: string;
};

export type PUIWeights = {
  thin?: number;
  extraLight?: number;
  light?: number;
  regular?: number;
  medium?: number;
  semiBold?: number;
  bold?: number;
  extrabold?: number;
  black?: number;
  [key: string]: any;
};

export type TextSize = { textSize: string; lineHeight: string | number };

export type ButtonVariantType = 'text' | 'contained' | 'outlined';

export type PUISizes = {
  xs: TextSize;
  s: TextSize;
  m: TextSize;
  l: TextSize;
  xl: TextSize;
  h3: TextSize;
  h2: TextSize;
  h1: TextSize;
  [key: string]: any;
};

export type PUITypography = {
  weights: PUIWeights;
  sizes: PUISizes;
};

export type PUITheme = {
  colors: PUIColors & {
    darkMode?: PUIModeColors;
    lightMode?: PUIModeColors;
  };
  typography: {
    sizes: PUISizes;
    weights: PUIWeights;
  };
};

export enum ThemeMode {
  light = 'light',
  dark = 'dark',
}

export interface InputComponent {
  title?: string;
  subTitle?: string;
  error?: string;
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
  isOpen?: boolean;
  title?: string;
  onClick?: any;
  onIconClick?: any;
  iconLeft?: boolean | SVGElement;
  iconRight?: boolean | SVGElement;
  icons?: Array<SVGElement>;
  shouldRotateIcon?: boolean;
}
