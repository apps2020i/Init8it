export type ThemeColors = {
  primary: string;
  toastError: string;
  toastSuccess: string;
  lightGray: string;
  darkBlue: '#3498db';
  whiteSmoke: string;
  white: string;
  black: string;
  gray: string;
  lightOrange: string;
  lighBlue: string;
};

export type Theme = {
  mode: string;
  colors: ThemeColors;
};

export interface ThemeInterface {
  [index: string]: Theme;
}
