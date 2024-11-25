import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BackArrow from '../../../assets/images/Back.png';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';

interface HeaderTitleProps {
  title: string;
  navigation: any;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({title, navigation}) => {
  return (
    <View
      style={[
        BaseStyle.flexRow,
        BaseStyle.alignCenter,
        Paddings.paddingHorizontalMedium,
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={BackArrow} />
      </TouchableOpacity>
      <Text
        style={[
          {
            color: theme.colors[ColorLabels.WHITE],
            fontFamily: FontFamily.INTER_SEMIBOLD,
            fontSize: fontSizes.xlg,
          },
          Margins.mlMd,
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({});
