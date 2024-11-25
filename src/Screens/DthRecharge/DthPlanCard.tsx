import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontFamily} from '../../types/Fonts';
import {fontSizes} from '../../styles/fonts';
import {Background} from '../../styles/Background';
import {UserScreens} from '../../common/routes/user/user.screens';
import {useNavigation} from '@react-navigation/native';

interface Props {
  price: any;
  validity: string;
  plan: string;
  onPress: () => void;
}

const DthPlanCard: React.FC<Props> = ({price, validity, plan, onPress}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        Margins.mtLg,
        BorderStyle.borderPrimary,
        BorderStyle.borderRadiusLarge,
      ]}>
      <Pressable
        onPress={() =>
          navigation.navigate(UserScreens.paymentScreen.routeName)
        }>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            Paddings.paddingMd,
          ]}>
          <View>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <FontAIcon
                name="rupee"
                style={[{color: theme.colors[ColorLabels.BLACK]}]}
                size={12}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                  Margins.mlXSm,
                ]}>
                {price}
              </Text>
            </View>
          </View>
          <View style={[BaseStyle.alignCenter]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              {validity}
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.MEDIUM_GREY],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Validity
            </Text>
          </View>
          <View style={[BaseStyle.alignCenter]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              {plan}
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.MEDIUM_GREY],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Plan Type
            </Text>
          </View>
          <MateIcon
            name="arrow-forward-ios"
            color={theme.colors[ColorLabels.BLACK]}
          />
        </View>
      </Pressable>
      <View
        style={[
          {
            height: 45,
            borderBottomLeftRadius: 13.5,
            borderBottomRightRadius: 13.5,
          },
          Background.primary,
          BaseStyle.justifyCenter,
          Paddings.paddingHorizontalMedium,
        ]}>
        <Pressable onPress={onPress}>
          <View style={[BaseStyle.alignEnd]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.WHITE],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              View Details
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DthPlanCard;
