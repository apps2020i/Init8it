import {ThemeInterface} from '../interfaces/colors';

const LIGHT_COLORS = {
  primary: '#3683BC',
  toastError: 'rgba(246, 119, 91, 0.9)',
  toastSuccess: 'rgba(27, 227, 119, 0.9)',
  darkBlue: '#3498db',
  whiteSmoke: '#f5f5f5',
  lightGray: '#aaa',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#5c5b5b',
  lightOrange: '#F6775B',
  lightBlue: '#ADD8E6',
};

const DARK_COLORS = {
  primary: '#454545',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#5c5b5b',
  lightOrange: '#F6775B',
  toastError: 'rgba(246, 119, 91, 0.9)',
  toastSuccess: 'rgba(27, 227, 119, 0.9)',
  darkBlue: '#3498db',
  lightGray: '#aaa',
  whiteSmoke: '#f5f5f5',
  lightBlue: '#ADD8E6',
};

export const THEMES: ThemeInterface = {
  light: {
    mode: 'light',
    colors: LIGHT_COLORS,
  },
  dark: {
    mode: 'dark',
    colors: DARK_COLORS,
  },
};

export const DEFAULT_COLORS = {
  blue: '#3683BC',
  white: '#FFFFFF',
};
