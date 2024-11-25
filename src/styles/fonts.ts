import {StyleSheet} from 'react-native';
import {theme} from '../common/theme';
import {FontFamily} from '../types/Fonts';

export const fontSizes = {
  md: 14,
  lg: 20,
  mlg: 18,
  xlg: 23,
  xxmlg: 24,
  xxlg: 28,
  sm: 12,
  smm: 13,
  xxsm: 11,
  xs: 8,
  smd: 16,
  smmd: 17,
  xsm: 10,
  xxl: 42,
};

export const TextStyle = StyleSheet.create({
  upperCase: {textTransform: 'uppercase'},
  capitalize: {textTransform: 'capitalize'},
  textCenter: {textAlign: 'center', textAlignVertical: 'center'},
  copyRightText: {color: theme.colors.white, opacity: 0.45},
  heading: {
    borderBottomColor: theme.colors.accent,
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
});
export const FontsFamily = StyleSheet.create({
  regular: {
    fontFamily: FontFamily.INTER_REGULAR,
    fontWeight: '400',
  },
  medium: {
    fontFamily: FontFamily.INTER_MEDIUM,
    fontWeight: '500',
  },
  light: {
    fontFamily: FontFamily.INTER_LIGHT,
    fontWeight: '300',
  },
  thin: {
    fontFamily: FontFamily.INTER_THIN,
    fontWeight: '500',
  },
  bold: {
    fontFamily: FontFamily.INTER_BOLD,
    fontWeight: '500',
  },
  Notoregular: {
    fontFamily: FontFamily.NOTO_REGULAR,
    fontWeight: '400',
  },
  Notomedium: {
    fontFamily: FontFamily.NOTO_MEDIUM,
    fontWeight: '500',
  },
  Notolight: {
    fontFamily: FontFamily.NOTO_LIGHT,
    fontWeight: '300',
  },
  Notothin: {
    fontFamily: FontFamily.NOTO_THIN,
    fontWeight: '500',
  },
});
