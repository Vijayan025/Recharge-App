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
import {useNavigation, useRoute} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import ContactImage from '../../../assets/images/contactProfile.png';
import {BorderStyle} from '../../styles/Border';
import AirtelIcon from '../../../assets/images/airtelIcon.png';
import BSNLicon from '../../../assets/images/bsnlLogo.png';
import MtnlLogo from '../../../assets/images/mtnlLogo.png';
import JioIcon from '../../../assets/images/tataTeleLogo.jpg';
import ViLogo from '../../../assets/images/viLogo.png';
import {UserScreens} from '../../common/routes/user/user.screens';
import MyContactImage from '../../../assets/images/contactProfile.png';
import {ScrollView} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';

const LandlineProvider = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

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
      {loading ? (
        <View style={styles.loadingContainer}>
          <UIActivityIndicator
            size={35}
            color={theme.colors[ColorLabels.PRIMARY]}
          />
        </View>
      ) : (
        <View
          style={[Paddings.paddingHorizontalMedium, BaseStyle.flexContainer]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'Airtel Landline',
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
                  Airtel Landline
                </Text>
              </View>
            </Pressable>

            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'BSNL Landline - Corporate',
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
                  BSNL Landline - Corporate
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'BSNL Landline - Individual',
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
                  BSNL Landline - Individual
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'MTNL Delhi',
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
                  MTNL Delhi
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'MTNL Mumbai',
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
                  MTNL Mumbai
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'MTNL Mumbai Lease Circuit',
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
                  MTNL Mumbai Lease Circuit
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.landlineDetails.routeName, {
                  name: 'Tata TeleServices',
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
                  Tata TeleServices
                </Text>
              </View>
            </Pressable>
            <View style={[Margins.mbLg]} />
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LandlineProvider;

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
