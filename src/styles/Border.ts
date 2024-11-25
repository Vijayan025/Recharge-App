import {StyleSheet} from 'react-native';
import {ColorLabels, theme} from '../common/theme';

export const BorderStyle = StyleSheet.create({
  borderRadiusSmall: {
    borderRadius: 4,
  },
  borderRadiusMedium: {
    borderRadius: 7,
  },
  borderRadiusSMedium: {
    borderRadius: 12,
  },
  borderRadiusLarge: {
    borderRadius: 15,
  },
  borderBottomPrimary: {
    borderBottomColor: theme.colors[ColorLabels.PRIMARY],
    borderBottomWidth: 0.6,
  },
  borderBottomSecondary: {
    borderBottomColor: theme.colors.lightBorderGrey,
    borderBottomWidth: 0.5,
  },
  borderBottomSecondaryFullWidth: {
    borderBottomColor: theme.colors.lightBorderGrey,
    borderBottomWidth: 1,
  },
  borderTopSecondaryGreyFullWidth: {
    borderTopColor: theme.colors.grey,
    borderTopWidth: 0.5,
  },
  borderBottomSecondaryGreyFullWidth: {
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
  },
  borderSecondaryFullWidth: {
    borderColor: theme.colors.lightBorderGrey,
    borderWidth: 1,
  },
  borderTopSecondary: {
    borderTopColor: theme.colors.lightBorderGrey,
    borderTopWidth: 0.5,
  },
  borderTopSecondaryFullWidth: {
    borderTopColor: theme.colors.lightBorderGrey,
    borderTopWidth: 1,
  },
  borderBottomPrimaryFullWidth: {
    borderBottomColor: theme.colors[ColorLabels.PRIMARY],
    borderBottomWidth: 1,
  },
  borderTopPrimaryFullWidth: {
    borderTopColor: theme.colors[ColorLabels.PRIMARY],
    borderTopWidth: 0.5,
  },
  borderRightPrimary: {
    borderRightColor: theme.colors.loginBackground,
    borderRightWidth: 1,
  },
  borderBlack: {
    borderColor: theme.colors.black,
    borderWidth: 0.4,
  },
  borderGreyCalendar: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
  },
  borderGreyCalendarBottom: {
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
  },
  borderPrimary: {
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
  },
  borderOrange: {
    borderColor: theme.colors.chartOrange,
    borderWidth: 1,
  },
  borderPrimaryMedium: {
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
  },
  borderLightGrey: {
    borderColor: theme.colors.lightGrey,
    borderWidth: 1,
  },
  borderLightGreyFull: {
    borderColor: theme.colors.lightBorderGrey,
    borderWidth: 1,
  },
  borderMediumGrey: {
    borderColor: theme.colors.mediumGrey,
    borderWidth: 1,
  },
  borderBottomMediumGrey: {
    borderBottomColor: theme.colors.mediumGrey,
    borderBottomWidth: 1,
  },
  borderLightGreySmall: {
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
  },
});
