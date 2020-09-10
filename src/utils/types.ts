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
};

export type PUIColors = {
  // project colors
  background50: string;
  accent500: string;
  hover700: string;
  header900: string;

  // root colors
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
  thin: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
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
