import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../common/theme';

export const Background = StyleSheet.create({
  primary: {backgroundColor: theme.colors.primary},
  white: {backgroundColor: theme.colors.white},
  lightWhite: {backgroundColor: theme.colors.lightWhite},
  darkPrimary: {backgroundColor: theme.colors.darkPrimary},
  loginBackground: {
    backgroundColor: theme.colors[ColorLabels.LOGIN_BACKGROUND],
  },
  darkGrey: {
    backgroundColor: theme.colors[ColorLabels.HOME_GREY],
  },
  lightBlue: {
    backgroundColor: theme.colors[ColorLabels.HOME_LIGHT_BLUE],
  },
  darkBlue: {
    backgroundColor: theme.colors[ColorLabels.HOME_DARK_BLUE],
  },
  yellow: {
    backgroundColor: theme.colors[ColorLabels.YELLOW],
  },
});
