export type PUIModeColors = {
  background50?: string;
  accent500?: string;
  hover700?: string;
  header900?: string;

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

export interface PUIColors {
  // project colors
  background50: '#fbe9e7';
  accent500: '#FF5722';
  hover700: '#e64a24';
  header900: '#bf371b';

  // root colors
  alert: '#faa030';
  error: '#f44336';
  success: '#60c954';
  outline: '#2296f3';
  light: '#fff';
  border: '#eceff1';
  secondary: '#90A4AE';
  primary: '#37474f';
  dark: '#14141e';

  [key: string]: any;
}

export type PUIWeights = {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extrabold: number;
  black: number;
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
