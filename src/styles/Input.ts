import {StyleSheet} from 'react-native';
import {theme} from '../common/theme';

export const InputBoxStyle = StyleSheet.create({
  otpBase: {
    borderRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    color: theme.colors.black,
  },
  otpInputPrimary: {
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.white,
  },
  otpInputHighlighted: {
    borderWidth: 2,
  },
  otpInputAccent: {
    borderColor: theme.colors.accent,
    backgroundColor: theme.colors.white,
  },
});
