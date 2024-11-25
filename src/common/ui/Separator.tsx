import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseStyle} from '../../styles/Base';

export const Separator = ({
  size = 'md',
  style = [],
  fullWidth = false,
  color,
  width,
  text,
}: {
  size?: 'md' | 'lg' | 'sm';
  style?: any;
  fullWidth?: boolean;
  color?: string;
  width?: number | string;
  text?: string;
}) => (
  <View
    style={[
      BaseStyle.alignCenter,
      BaseStyle.justifyCenter,
      BaseStyle.alignCenter,
      BaseStyle.flexRow,
      ...(style ? style : []),
    ]}>
    <View
      style={[
        styles.base,
        BaseStyle.justifyCenter,
        styles[size],
        {borderColor: color},
        ...(!fullWidth ? [styles.hr] : [styles.margin]),
        {width},
      ]}
    />
    {text && <Text style={styles.text}>{text}</Text>}
  </View>
);

const styles = StyleSheet.create({
  base: {
    borderWidth: 0.5,
    flex: 1,
  },
  hr: {
    width: 200,
  },
  md: {
    paddingHorizontal: 40,
  },
  sm: {
    paddingHorizontal: 20,
  },
  lg: {
    paddingHorizontal: 60,
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    position: 'absolute',
    zIndex: 1,
    // left: '45%',
    backgroundColor: 'transparent',
  },
});
