import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import {Image} from 'react-native';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {UserScreens} from '../../common/routes/user/user.screens';
import {useNavigation} from '@react-navigation/native';
import OctIcon from 'react-native-vector-icons/Octicons';
import {Position} from '../../styles/Position';

interface Props {
  customerId: any;
  operator: string;
  image: any;
  onPress?: () => void;
  onClick?: () => void;
}

const MyRechargeCard: React.FC<Props> = ({
  customerId,
  operator,
  image,
  onPress,
  onClick,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[Paddings.paddingHorizontalMedium]}>
      <View
        style={[
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          Background.white,
          Margins.mtMd,
          BaseStyle.justifySpaceBetween,
          BorderStyle.borderLightGreyFull,
          BorderStyle.borderRadiusMedium,
          Paddings.paddingSm,
          Position.relative,
        ]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
          <Image
            source={image}
            style={{
              width: 50,
              height: 50,
              borderColor: theme.colors[ColorLabels.LIGHT_GREY],
              borderWidth: 1,
              borderRadius: 6,
            }}
          />
          <View style={[Margins.mlMd]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              {customerId}
            </Text>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.sm,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                {operator}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.WHITE],
              fontSize: fontSizes.sm,
              fontFamily: FontFamily.INTER_MEDIUM,
              paddingHorizontal: 10,
              borderRadius: 20,
              paddingVertical: 6,
            },
            Margins.mrMd,
            Background.primary,
          ]}
          onPress={onClick}>
          Recharge
        </Text>
        <OctIcon
          name="x-circle-fill"
          style={[Position.absolute, {right: -8, top: -8}]}
          size={18}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default MyRechargeCard;

const styles = StyleSheet.create({});
