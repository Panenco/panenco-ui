export type PUIModeColors = {
  highlight?: string;
  accent?: string;
  hover?: string;

  alert?: string;
  error?: string;
  success?: string;
  outline?: string;
  light?: string;
  border?: string;
  secondary?: string;
  primary?: string;
  dark?: string;
  [key: string]: any;
};

export type PUIColors = {
  highlight: string;
  accent: string;
  hover: string;
  alert: string;
  error: string;
  success: string;
  outline: string;
  light: string;
  border: string;
  secondary: string;
  primary: string;
  dark: string;
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

export interface AccordinProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  title?: string;
  onClick?: any;
  onIconClick?: any;
  iconLeft?: boolean | SVGElement;
  iconRight?: boolean | SVGElement;
  icons?: Array<SVGElement>;
}
