import {configureFonts, DefaultTheme} from 'react-native-paper';
import {FontFamily} from '../types/Fonts';

const _fontConfig = {
  default: {
    regular: {
      fontFamily: FontFamily.INTER_REGULAR,
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: FontFamily.INTER_MEDIUM,
      fontWeight: 'normal',
    },
    light: {
      fontFamily: FontFamily.INTER_LIGHT,
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: FontFamily.INTER_THIN,
      fontWeight: 'normal',
    },
  },
};

const fontConfig = {
  ios: _fontConfig,
  android: _fontConfig,
};

export enum ColorLabels {
  PRIMARY = 'primary',
  ACCENT = 'accent',
  LOGIN_BACKGROUND = 'loginBackground',
  LOGIN_TEXT = 'loginText',
  SECONDARY = 'secondary',
  WHITE = 'white',
  FOOTER_WHITE = 'footerWhite',
  SEPARATOR = 'separator',
  BLACK = 'black',
  LIGHT_BLACK = 'lightBlack',
  LIGHT_GREY = 'lightGrey',
  MEDIUM_GREY = 'mediumGrey',
  GREY = 'grey',
  RED = 'red',
  SLATE_GRAY = 'slateGray',
  TRANSPARENT = 'transparent',
  LIGHT_GREEN = 'lightGreen',
  LIGHT_BORDER_GREY = 'lightBorderGrey',
  LIGHT_WHITE = 'lightWhite',
  CHART_GREEN = 'chartGreen',
  LIGHT_RED = 'lightRed',
  CHART_ORANGE = 'chartOrange',
  CHART_RED = 'chartRed',
  GREY_LIGHT = 'greyLight',
  YELLOW = 'yellow',
  DARK_PRIMARY = 'darkPrimary',
  ERROR_ORANGE = 'errorOrange',
  CAL_BG = 'calbg',
  CAL_ORANGE = 'calOrange',
  DISABLE_COLOR = 'disableColor',
  LIGHT_GREY_WHITE = 'lightGreyWhite',
  HOME_GREY = 'homeGrey',
  HOME_LIGHT_BLUE = 'homeLightBlue',
  HOME_DARK_BLUE = 'homeDarkBlue',
  DONOR_BLUE = 'donorBlue',
}

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
  roundness: 2,
  dark: true,
  mode: 'adaptive',
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    [ColorLabels.PRIMARY]: '#0051ba',
    [ColorLabels.ACCENT]: '#f99117',
    [ColorLabels.YELLOW]: '#F19802',
    [ColorLabels.LOGIN_BACKGROUND]: '#50330B',
    [ColorLabels.LOGIN_TEXT]: '#f99117',
    [ColorLabels.SECONDARY]: 'rgba(255, 255, 255, 0.58)',
    [ColorLabels.WHITE]: '#fff',
    [ColorLabels.HOME_GREY]: '#6D5534',
    [ColorLabels.SEPARATOR]: '#2a76e8',
    [ColorLabels.BLACK]: '#000',
    [ColorLabels.LIGHT_BLACK]: '#333333',
    [ColorLabels.GREY_LIGHT]: '#555555',
    [ColorLabels.LIGHT_GREY]: '#eeeeee',
    [ColorLabels.GREY]: '#aaaaaa',
    [ColorLabels.RED]: '#D8000C',
    [ColorLabels.LIGHT_RED]: '#FFBABA',
    [ColorLabels.SLATE_GRAY]: '#999999',
    [ColorLabels.TRANSPARENT]: 'transparent',
    [ColorLabels.LIGHT_GREEN]: '#DFF2BF',
    [ColorLabels.LIGHT_BORDER_GREY]: '#d7d7d7',
    [ColorLabels.LIGHT_WHITE]: '#f2f2f2',
    [ColorLabels.CHART_GREEN]: '#270',
    [ColorLabels.CHART_ORANGE]: '#f59a23',
    [ColorLabels.CHART_RED]: '#eaa466',
    [ColorLabels.MEDIUM_GREY]: '#797979',
    [ColorLabels.DARK_PRIMARY]: '#EC5604',
    [ColorLabels.ERROR_ORANGE]: '#F99117',
    [ColorLabels.CAL_BG]: '#f2f2f2',
    [ColorLabels.CAL_ORANGE]: '#f99117',
    [ColorLabels.DISABLE_COLOR]: '#f0f0f0',
    [ColorLabels.LIGHT_GREY_WHITE]: '#aaaaaa',
    [ColorLabels.HOME_LIGHT_BLUE]: '#58AAA8',
    [ColorLabels.HOME_DARK_BLUE]: '#388CC7',
    [ColorLabels.DONOR_BLUE]: '#135B93',
  },
};

export {theme};

export interface ColorsInterface {
  [ColorLabels.PRIMARY]: string;
  [ColorLabels.ACCENT]: string;
  [ColorLabels.LOGIN_BACKGROUND]: string;
  [ColorLabels.LOGIN_TEXT]: string;
  [ColorLabels.SECONDARY]: string;
  [ColorLabels.WHITE]: string;
  [ColorLabels.FOOTER_WHITE]: string;
  [ColorLabels.SEPARATOR]: string;
  [ColorLabels.BLACK]: string;
  [ColorLabels.LIGHT_BLACK]: string;
  [ColorLabels.LIGHT_GREY]: string;
  [ColorLabels.GREY]: string;
  [ColorLabels.RED]: string;
  [ColorLabels.LIGHT_RED]: string;
  [ColorLabels.SLATE_GRAY]: string;
  [ColorLabels.TRANSPARENT]: string;
  [ColorLabels.LIGHT_GREEN]: string;
  [ColorLabels.LIGHT_BORDER_GREY]: string;
  [ColorLabels.LIGHT_WHITE]: string;
  [ColorLabels.CHART_GREEN]: string;
  [ColorLabels.CHART_ORANGE]: string;
  [ColorLabels.CHART_RED]: string;
  [ColorLabels.MEDIUM_GREY]: string;
  [ColorLabels.GREY_LIGHT]: string;
  [ColorLabels.YELLOW]: string;
  [ColorLabels.DARK_PRIMARY]: string;
  [ColorLabels.ERROR_ORANGE]: string;
  [ColorLabels.CAL_BG]: string;
  [ColorLabels.CAL_ORANGE]: string;
  [ColorLabels.DISABLE_COLOR]: string;
  [ColorLabels.LIGHT_GREY_WHITE]: string;
  [ColorLabels.HOME_GREY]: string;
  [ColorLabels.HOME_LIGHT_BLUE]: string;
  [ColorLabels.HOME_DARK_BLUE]: string;
  [ColorLabels.DONOR_BLUE]: string;
}

export interface ThemeInterface {
  colors: ColorsInterface;
}
