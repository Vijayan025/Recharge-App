import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-share';
import ReferIcon from '../../../assets/images/referEarn.jpg';
import {Image} from 'react-native';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Layout} from '../../styles/Layout';

const ReferEarn = () => {
  const navigation = useNavigation();
  const openShare = async () => {
    try {
      const options = {
        url: `Hi, Invite your friend by sharing your referral link`,
        type: 'url',
      };
      await Share.open(options);
    } catch (error) {
      console.error('Error opening share:', error);
    }
  };
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[{elevation: 10, height: 55}, Background.white]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            {height: 55},
            Background.white,
            BaseStyle.justifySpaceBetween,
            Paddings.paddingHorizontalMedium,
          ]}>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.BLACK]}
            size={20}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_BOLD,
              },
              BaseStyle.textCenter,
            ]}>
            Refer & Earn
          </Text>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.WHITE]}
            size={20}
          />
        </View>
      </View>
      <View style={[Margins.mtLg]}>
        <Image
          source={ReferIcon}
          style={{width: '100%', height: 300}}
          resizeMode="cover"
        />
      </View>
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtXl]}>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.smd,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Margins.mbSm,
          ]}>
          How it works?
        </Text>
        <View
          style={[
            BorderStyle.borderLightGreyFull,
            Background.white,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            {elevation: 2},
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <MatIcon
              name="numeric-1-circle"
              color={theme.colors[ColorLabels.BLACK]}
              size={20}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  letterSpacing: 0.1,
                  lineHeight: 20,
                },
                Margins.mlSm,
                Layout.flex1,
              ]}>
              Invite your friends by sharing your referral link.
            </Text>
          </View>
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtMd]}>
            <MatIcon
              name="numeric-2-circle"
              color={theme.colors[ColorLabels.BLACK]}
              size={20}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  letterSpacing: 0.1,
                  lineHeight: 20,
                },
                Margins.mlSm,
                Layout.flex1,
              ]}>
              They will use your referral link to complete the first recharge or
              bill.
            </Text>
          </View>
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtMd]}>
            <MatIcon
              name="numeric-3-circle"
              color={theme.colors[ColorLabels.BLACK]}
              size={20}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  letterSpacing: 0.1,
                  lineHeight: 20,
                },
                Margins.mlSm,
                Layout.flex1,
              ]}>
              You both get ₹50 each in your wallet.
            </Text>
          </View>
        </View>
      </View>
      <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
        <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
          <TouchableOpacity
            style={[
              {
                elevation: 8,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingMd,
            ]}
            onPress={openShare}>
            <Text
              style={{
                color: ColorLabels.WHITE,
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_BOLD,
                textAlign: 'center',
              }}>
              REFER NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReferEarn;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
