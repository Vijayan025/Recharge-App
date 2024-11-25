import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import ContactImage from '../../../assets/images/contactProfile.png';
import {BorderStyle} from '../../styles/Border';
import AirtelIcon from '../../../assets/images/airtelIcon.png';
import BSNLicon from '../../../assets/images/bsnlLogo.png';
import MtnlLogo from '../../../assets/images/mtnlLogo.png';
import JioIcon from '../../../assets/images/jioIcon.png';
import ViLogo from '../../../assets/images/viLogo.png';
import {UserScreens} from '../../common/routes/user/user.screens';
import MyContactImage from '../../../assets/images/contactProfile.png';

const PostPaidOperator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route?.params?.name;
  const number = route?.params?.number;
  console.log('route', route);
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
            Select your operator
          </Text>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.WHITE]}
            size={20}
          />
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Background.white,
              Margins.mtLg,
              Background.lightWhite,
              Paddings.paddingSm,
              BorderStyle.borderRadiusLarge,
            ]}>
            <Image source={MyContactImage} style={{width: 50, height: 50}} />
            <View style={[Margins.mlMd]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                ]}>
                {name}
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.GREY],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                ]}>
                {number}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.postpaidBill.routeName, {
              name: name,
              number: number,
            })
          }>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
            ]}>
            <Image
              source={AirtelIcon}
              style={[
                {
                  width: 60,
                  height: 60,
                },
                styles.pic,
              ]}
              resizeMode="cover"
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_REGULAR,
                },
                Margins.mlLg,
              ]}>
              Airtel PostPaid
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.postpaidBill.routeName, {
              name: name,
              number: number,
            })
          }>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              {minHeight: 60},
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
            ]}>
            <Image
              source={BSNLicon}
              style={[
                {
                  width: 65,
                  height: 65,
                },
                styles.pic,
              ]}
              resizeMode="cover"
            />

            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_REGULAR,
                },
                Margins.mlLg,
              ]}>
              BSNL PostPaid
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.postpaidBill.routeName, {
              name: name,
              number: number,
            })
          }>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              {minHeight: 50},
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
            ]}>
            <Image
              source={MtnlLogo}
              style={[{width: 50, height: 60}, Margins.mtSm, styles.pic]}
              resizeMode="cover"
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_REGULAR,
                },
                Margins.mlLg,
              ]}>
              MTNL Mumbai Dolphin
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.postpaidBill.routeName, {
              name: name,
              number: number,
            })
          }>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              {minHeight: 65},
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
            ]}>
            <Image
              source={JioIcon}
              style={[{width: 45, height: 45}, styles.pic]}
              resizeMode="contain"
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_REGULAR,
                },
                Margins.mlLg,
              ]}>
              Jio PostPaid
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.postpaidBill.routeName, {
              name: name,
              number: number,
            })
          }>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              {minHeight: 60},
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
            ]}>
            <Image
              source={ViLogo}
              style={[{width: 60, height: 60}, styles.pic]}
              resizeMode="contain"
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_REGULAR,
                },
                Margins.mlLg,
              ]}>
              Vi PostPaid
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PostPaidOperator;

const styles = StyleSheet.create({
  pic: {
    width: '20%',
  },
});
