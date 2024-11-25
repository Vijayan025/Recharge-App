import {StyleSheet, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {withTheme} from 'react-native-paper';
import {ColorsInterface, ThemeInterface} from '../theme';
import {BaseStyle} from '../../styles/Base';
import Typography from './Typography';
import {FontTypeLabel} from '../../types/FontTypes';

const IconLabel = ({
  IconComponent = AntIcon,
  name = 'mobile1',
  size = 25,
  fontSize = 16,
  label = 'label',
  color = undefined,
  textColor = undefined,
  theme,
  height = 33,
  type,
}: {
  IconComponent: any;
  name?: string | undefined;
  size?: number | undefined;
  fontSize?: number | undefined;
  label?: string | undefined;
  color?: string | undefined;
  textColor?: keyof ColorsInterface;
  theme: ThemeInterface;
  height?: number | string;
  fontFamily?: string | undefined;
  type?: keyof FontTypeLabel;
}) => {
  return (
    <View style={[BaseStyle.alignCenter]}>
      <View style={[[styles.iconContainer], {height}]}>
        <IconComponent
          name={name}
          size={size}
          color={color ? color : theme.colors.loginText}
        />
      </View>
      <Typography
        color={textColor}
        type={type}
        style={[
          [styles.labelStyle],
          {
            fontSize,
          },
        ]}>
        {label}
      </Typography>
    </View>
  );
};

export default withTheme(IconLabel);

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
  },
  labelStyle: {
    marginTop: 3,
  },
});
