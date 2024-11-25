import {StyleSheet} from 'react-native';
import {theme} from '../common/theme';

export const TabBarStyle = StyleSheet.create({
  default: {
    backgroundColor: theme.colors.transparent,
    shadowColor: theme.colors.transparent,
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 1,
    position: 'relative',
    elevation: 0,
    shadowOpacity: 0,
  },
  borderView: {
    position: 'absolute',
    left: '45%',
    top: '40%',
    width: 2,
    height: 20,
    backgroundColor: theme.colors.accent,
    zIndex: 99999,
  },
});
