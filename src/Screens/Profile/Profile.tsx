import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {Margins} from '../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Layout} from '../../styles/Layout';
import {Paddings} from '../../styles/Padding';
import UserIcon from '../../../assets/images/userIcon.png';
import {BorderStyle} from '../../styles/Border';
import EntIcon from 'react-native-vector-icons/Entypo';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import MateCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WalletIcon from '../../../assets/images/walletIcon.png';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import FontA5Icon from 'react-native-vector-icons/FontAwesome5';
import {UserScreens} from '../../common/routes/user/user.screens';
import {useNavigationSource} from '../Common/NavigationSource';

const Profile = () => {
  const navigation = useNavigation();
  const {setNavigationSource}: any = useNavigationSource();

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
            Profile
          </Text>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.WHITE]}
            size={20}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            Margins.mtMLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Image source={UserIcon} style={[{width: 65, height: 65}]} />
            <View style={[Margins.mlXMd]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                Raj Kumar
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.GREY],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                rajkumar87@gmail.com
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.GREY],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                +91 9209349812
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate(UserScreens.editProfile.routeName)
            }>
            <View
              style={[
                BorderStyle.borderPrimary,
                Background.primary,
                BaseStyle.alignCenter,
                {borderRadius: 30},
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.WHITE],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                    paddingHorizontal: 14,
                    paddingVertical: 2,
                  },
                ]}>
                Edit
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          style={[
            Margins.mtMLg,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
          ]}>
          <View>
            <Image source={WalletIcon} style={[{width: 55, height: 55}]} />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              Wallet Balance
            </Text>
          </View>
          <View
            style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtMd]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.RED]}, Margins.mtXsm]}
              size={16}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.RED],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                Margins.mlXSm,
              ]}>
              490.20
            </Text>
          </View>
        </View>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.md,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Margins.mtMLg,
          ]}>
          Referrals Details
        </Text>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View
            style={[
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Margins.mtMd,
              Paddings.paddingLg,
              {width: '45%'},
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.xlg,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              0
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Total Referrals
            </Text>
          </View>
          <View
            style={[
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Margins.mtMd,
              Paddings.paddingLg,
              {width: '45%'},
            ]}>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <FontAIcon
                name="rupee"
                style={[
                  {color: theme.colors[ColorLabels.BLACK]},
                  Margins.mtXsm,
                ]}
                size={16}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.xlg,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlXSm,
                ]}>
                0
              </Text>
            </View>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Total Earnings
            </Text>
          </View>
        </View>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.md,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Margins.mtMLg,
          ]}>
          Support & Settings
        </Text>
        <Pressable
          onPress={() => navigation.navigate(UserScreens.wallet.routeName)}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              BaseStyle.justifySpaceBetween,
            ]}>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View style={styles.iconWidth}>
                <EntIcon
                  name="wallet"
                  color={theme.colors[ColorLabels.PRIMARY]}
                  size={25}
                />
              </View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    width: '60%',
                  },
                ]}>
                Wallet
              </Text>
            </View>
            <MateIcon
              name="arrow-forward-ios"
              color={theme.colors[ColorLabels.BLACK]}
            />
          </View>
        </Pressable>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <Pressable
          onPress={() => navigation.navigate(UserScreens.referEarn.routeName)}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              BaseStyle.justifySpaceBetween,
            ]}>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View style={styles.iconWidth}>
                <MateCIcon
                  name="gift"
                  color={theme.colors[ColorLabels.PRIMARY]}
                  size={25}
                />
              </View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    width: '60%',
                  },
                ]}>
                Refer & Earn
              </Text>
            </View>
            <MateIcon
              name="arrow-forward-ios"
              color={theme.colors[ColorLabels.BLACK]}
            />
          </View>
        </Pressable>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <Pressable
          onPress={() => navigation.navigate(UserScreens.chatBot.routeName)}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mtLg,
              BaseStyle.justifySpaceBetween,
            ]}>
            <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View style={styles.iconWidth}>
                <MateIcon
                  name="support-agent"
                  color={theme.colors[ColorLabels.PRIMARY]}
                  size={25}
                />
              </View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    width: '60%',
                  },
                ]}>
                Help & Support
              </Text>
            </View>
            <MateIcon
              name="arrow-forward-ios"
              color={theme.colors[ColorLabels.BLACK]}
            />
          </View>
        </Pressable>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Margins.mtLg,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={styles.iconWidth}>
              <MateCIcon
                name="shield-lock"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={28}
              />
            </View>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  width: '60%',
                },
              ]}>
              Privacy Policy
            </Text>
          </View>
          <MateIcon
            name="arrow-forward-ios"
            color={theme.colors[ColorLabels.BLACK]}
          />
        </View>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Margins.mtLg,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={styles.iconWidth}>
              <EntIcon
                name="info-with-circle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={25}
              />
            </View>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  width: '60%',
                },
              ]}>
              About Us
            </Text>
          </View>
          <MateIcon
            name="arrow-forward-ios"
            color={theme.colors[ColorLabels.BLACK]}
          />
        </View>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Margins.mtLg,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={styles.iconWidth}>
              <FontA5Icon
                name="clipboard-list"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={25}
                style={[Margins.mlXSm]}
              />
            </View>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                  width: '60%',
                },
              ]}>
              Terms & Conditions
            </Text>
          </View>
          <MateIcon
            name="arrow-forward-ios"
            color={theme.colors[ColorLabels.BLACK]}
          />
        </View>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtMd]}
        />
        <View style={[BaseStyle.alignCenter, Margins.mtXl, Margins.mbXl]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <MateCIcon
              name="logout"
              color={theme.colors[ColorLabels.RED]}
              size={25}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.RED],
                  fontSize: fontSizes.md,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
                Margins.mlSm,
              ]}
              onPress={() => {
                setNavigationSource('');
              }}>
              Log Out
            </Text>
          </View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.PRIMARY],
                fontSize: fontSizes.sm,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
              Margins.mtLg,
            ]}>
            Powered By Yaa Creations
          </Text>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.sm,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
              Margins.mtSm,
            ]}>
            App Version 0.1
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  iconWidth: {
    width: '20%',
  },
});
