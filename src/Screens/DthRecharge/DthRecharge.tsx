import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import ContactImage from '../../../assets/images/contactProfile.png';
import {BorderStyle} from '../../styles/Border';
import AirtelTv from '../../../assets/images/airtelTvLogo.png';
import D2hTv from '../../../assets/images/d2hTvlogo.png';
import DishTv from '../../../assets/images/dishTvlogo.png';
import SunDirectTv from '../../../assets/images/Sun-Direct.jpg';
import TataPlayTv from '../../../assets/images/Tata-Play-Logo.png';
import {UserScreens} from '../../common/routes/user/user.screens';
import {UIActivityIndicator} from 'react-native-indicators';

const DthRecharge = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[{elevation: 10, height: 55}, Background.white]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            {height: 55},
            Background.white,
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
              Margins.mlMd,
            ]}>
            DTH Recharge
          </Text>
        </View>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <UIActivityIndicator
            size={35}
            color={theme.colors[ColorLabels.PRIMARY]}
          />
        </View>
      ) : (
        <View style={[Paddings.paddingHorizontalMedium]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: 14,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mtMLg,
            ]}>
            DTH Operators
          </Text>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName, {
                type: 'Airtel Digital TV',
              })
            }>
            <View
              style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
              <Image
                source={AirtelTv}
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
                Airtel Digital TV
              </Text>
            </View>
          </Pressable>
          <View
            style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName, {
                type: 'D2H',
              })
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtLg,
                {minHeight: 60},
              ]}>
              <Image
                source={D2hTv}
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
                D2H
              </Text>
            </View>
          </Pressable>
          <View
            style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName, {
                type: 'Dish TV',
              })
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtLg,
                {minHeight: 50},
              ]}>
              <Image
                source={DishTv}
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
                Dish TV
              </Text>
            </View>
          </Pressable>
          <View
            style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName, {
                type: 'Sun Direct',
              })
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtLg,
                {minHeight: 60},
              ]}>
              <Image
                source={SunDirectTv}
                style={[{width: 50, height: 50}, styles.pic]}
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
                Sun Direct
              </Text>
            </View>
          </Pressable>
          <View
            style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
          />
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName, {
                type: 'Tata Play',
              })
            }>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtLg,
                {minHeight: 60},
              ]}>
              <Image
                source={TataPlayTv}
                style={[{width: 50, height: 50}, styles.pic]}
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
                Tata Play
              </Text>
            </View>
          </Pressable>
          <View
            style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default DthRecharge;

const styles = StyleSheet.create({
  pic: {
    width: '20%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
});
