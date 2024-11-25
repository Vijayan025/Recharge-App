import {
  Alert,
  Image,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import UserIcon from '../../../assets/images/userIcon.png';
import {ColorLabels, theme} from '../../common/theme';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import {Paddings} from '../../styles/Padding';
import MainIcon from '../../../assets/images/yaa.png';
import SimIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import FeaIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigationSource} from '../Common/NavigationSource';
import {FontFamily} from '../../types/Fonts';
import TnebLogo from '../../../assets/images/tangedcoLogo.png';
import JioLogo from '../../../assets/images/jioIcon.png';
import AirtelLogo from '../../../assets/images/airtelIcon.png';
import {useNavigation} from '@react-navigation/native';
import {UserScreens} from '../../common/routes/user/user.screens';

const Dashboard = () => {
  const {setNavigationSource}: any = useNavigationSource();
  const {navigationSource}: any = useNavigationSource();
  const navigation = useNavigation();
  console.log('navigationSource', navigationSource);
  useEffect(() => {
    if (navigationSource === 'NOT_VERIFIED') {
      setTimeout(() => {
        Alert.alert(
          'Hello 👋',
          'You need to login to continue exploring the app.',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Login', onPress: () => setNavigationSource('')},
          ],
          {cancelable: false},
        );
      }, 500);
    }
  }, []);

  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View
        style={[
          Paddings.paddingHorizontalMedium,
          {elevation: 10},
          Background.white,
          BaseStyle.flexRow,
          BaseStyle.alignCenter,
          BaseStyle.justifySpaceBetween,
        ]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Margins.mtMd,
            Margins.mbMd,
          ]}>
          <Image source={UserIcon} style={[{width: 55, height: 55}]} />
          <Text
            disabled={navigationSource === 'VERIFIED' ? true : false}
            style={[
              {
                color: theme.colors[ColorLabels.PRIMARY],
                fontSize: 15,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
              Margins.mlMd,
            ]}
            onPress={() => {
              setNavigationSource('');
            }}>
            {navigationSource === 'VERIFIED' ? 'Hello, Vijay' : 'Login/Signup'}
          </Text>
        </View>
        <Image source={MainIcon} style={{width: 50, height: 50}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: 14,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mbMd,
            ]}>
            Recharges
          </Text>
          <View
            style={[
              Background.primary,
              BaseStyle.flexRow,
              BaseStyle.justifySpaceBetween,
              BorderStyle.borderRadiusMedium,
              Margins.mbLg,
              Paddings.paddingSm,
            ]}>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.mobileRecharge.routeName);
                }}>
                <SimIcon
                  name="screen-smartphone"
                  size={23}
                  color={theme.colors[ColorLabels.WHITE]}
                />
                <Text style={styles.txt1}>Mobile Recharge</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.dthRecharge.routeName);
                }}>
                <FontIcon
                  name="satellite-dish"
                  size={23}
                  color={theme.colors[ColorLabels.WHITE]}
                />
                <Text style={styles.txt1}>DTH Recharge</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.fastagRecharge.routeName);
                }}>
                <MatIcon
                  name="car-connected"
                  size={23}
                  color={theme.colors[ColorLabels.WHITE]}
                />
                <Text style={styles.txt1}>FASTag Recharge</Text>
              </Pressable>
            </View>
          </View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: 14,
                fontFamily: FontFamily.INTER_BOLD,
              },

              Margins.mbMd,
            ]}>
            Bill Payments
          </Text>
          <View
            style={[
              BaseStyle.flexRow,
              {height: 205, flexWrap: 'wrap'},
              BorderStyle.borderRadiusMedium,
              BaseStyle.justifySpaceBetween,
              Paddings.paddingHorizontalSmall,
              BorderStyle.borderLightGreyFull,
            ]}>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.mobilePostpaid.routeName);
                }}>
                <SimIcon
                  name="screen-smartphone"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Mobile Postpaid</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(
                    UserScreens.electricityProviders.routeName,
                  );
                }}>
                <IonIcon
                  name="bulb-outline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Electricity</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.waterProviders.routeName);
                }}>
                <IonIcon
                  name="water-outline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Water</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(
                    UserScreens.gasPipelineProviders.routeName,
                  );
                }}>
                <MatIcon
                  name="pipe-valve"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Gas Pipeline</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.landlineProviders.routeName);
                }}>
                <EntIcon
                  name="landline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Landline</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.broadBandProviders.routeName);
                }}>
                <MatIcon
                  name="router-wireless-settings"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>Broadband</Text>
              </Pressable>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <FontIcon
                name="hand-holding-usd"
                size={23}
                color={theme.colors[ColorLabels.PRIMARY]}
              />
              <Text style={styles.txt}>EMI Payments</Text>
            </View>
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <MatIcon
                name="gas-cylinder"
                size={23}
                color={theme.colors[ColorLabels.PRIMARY]}
              />
              <Text style={styles.txt}>Book a Cylinder</Text>
            </View>
            {/* <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <AntIcon
                name="playcircleo"
                size={23}
                color={theme.colors[ColorLabels.PRIMARY]}
              />
              <Text style={styles.txt}>OTT/Subscriptions</Text>
            </View> */}
            <View
              style={[
                BaseStyle.alignCenter,
                {width: '30%'},
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Pressable
                style={[BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.rechargesAndBills.routeName);
                }}>
                <IonIcon
                  name="arrow-forward-circle-sharp"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
                <Text style={styles.txt}>View More</Text>
              </Pressable>
            </View>
          </View>
          <View style={[Margins.mtMLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_BOLD,
                },

                Margins.mbMd,
              ]}>
              Recharge Expiry
            </Text>
            <View
              style={[
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingSm,
              ]}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.justifySpaceBetween,
                  BaseStyle.alignCenter,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  9289289176 (PREPAID)
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                      backgroundColor: theme.colors[ColorLabels.RED],
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 5,
                    },
                  ]}>
                  Expiring in 3 days
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Pack
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  299 Rs
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Network
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  Airtel
                </Text>
              </View>
              <View style={[Margins.mtLg]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 16,
                      fontFamily: FontFamily.INTER_MEDIUM,
                      borderRadius: 50,
                      paddingVertical: 3,
                      paddingHorizontal: 10,
                    },
                    BorderStyle.borderPrimaryMedium,
                    BaseStyle.textCenter,
                    Background.primary,
                  ]}>
                  Recharge now
                </Text>
              </View>
            </View>
            <View
              style={[
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingSm,
                Margins.mtLg,
              ]}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.justifySpaceBetween,
                  BaseStyle.alignCenter,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  10298393891 (DTH)
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                      backgroundColor: theme.colors[ColorLabels.RED],
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 5,
                    },
                  ]}>
                  Expiring in 3 days
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Pack
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  220 Rs
                </Text>
              </View>
              <View style={[Margins.mtLg]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 16,
                      fontFamily: FontFamily.INTER_MEDIUM,
                      borderRadius: 50,
                      paddingVertical: 3,
                      paddingHorizontal: 10,
                    },
                    BorderStyle.borderPrimaryMedium,
                    BaseStyle.textCenter,
                    Background.primary,
                  ]}>
                  Recharge now
                </Text>
              </View>
            </View>
          </View>
          <View style={[Margins.mtMLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_BOLD,
                },

                Margins.mbMd,
              ]}>
              Due Bills
            </Text>
            <View
              style={[
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingSm,
                Margins.mbLg,
              ]}>
              <View style={[BaseStyle.flexRow]}>
                <Image
                  source={TnebLogo}
                  resizeMode="contain"
                  style={{width: 55, height: 55}}
                />
                <View>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontSize: 14,
                        fontFamily: FontFamily.INTER_BOLD,
                      },
                      Margins.mlSm,
                    ]}>
                    Tamil Nadu Electricity (TNEB)
                  </Text>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontSize: 14,
                        fontFamily: FontFamily.INTER_BOLD,
                      },
                      Margins.mlSm,
                      Margins.mbSm,
                    ]}>
                    Consumer Number : 2901
                  </Text>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontSize: 14,
                        fontFamily: FontFamily.INTER_MEDIUM,
                      },
                      Margins.mlSm,
                    ]}>
                    Name
                  </Text>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontSize: 14,
                        fontFamily: FontFamily.INTER_MEDIUM,
                      },
                      Margins.mlSm,
                    ]}>
                    Bill due in 8 days
                  </Text>
                  <View
                    style={[
                      BaseStyle.flexRow,
                      BaseStyle.alignCenter,
                      Margins.mlSm,
                    ]}>
                    <FontAIcon
                      name="rupee"
                      style={[
                        {color: theme.colors[ColorLabels.BLACK]},
                        Margins.mtXsm,
                      ]}
                      size={15}
                    />
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontSize: 20,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                        Margins.mlXSm,
                      ]}>
                      800
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.justifyEnd,
                  Paddings.paddingHorizontalSmall,
                ]}>
                <View>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.WHITE],
                        fontSize: 15,
                        fontFamily: FontFamily.INTER_BOLD,
                        borderRadius: 50,
                        paddingVertical: 2,
                        paddingHorizontal: 10,
                      },
                      BorderStyle.borderPrimaryMedium,
                      BaseStyle.textCenter,
                      Background.primary,
                    ]}>
                    Pay bill
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingSm,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <Image
                  source={JioLogo}
                  resizeMode="contain"
                  style={{width: 40, height: 40}}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                      backgroundColor: theme.colors[ColorLabels.RED],
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 5,
                    },
                  ]}>
                  DUE IN 1 DAY
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtMd,
                ]}>
                <FontAIcon
                  name="rupee"
                  style={[
                    {color: theme.colors[ColorLabels.RED]},
                    Margins.mtXsm,
                  ]}
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
                  450.20
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                    Margins.mlMd,
                  ]}>
                  9201878923 (POSTPAID)
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Due date
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  10 May 2024
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Bill cycle
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  1 Apr - 30 Apr
                </Text>
              </View>
              <View style={[Margins.mtLg]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 16,
                      fontFamily: FontFamily.INTER_BOLD,
                      borderRadius: 50,
                      paddingVertical: 3,
                      paddingHorizontal: 10,
                    },
                    BorderStyle.borderPrimaryMedium,
                    BaseStyle.textCenter,
                    Background.primary,
                  ]}>
                  Pay now
                </Text>
              </View>
            </View>
            <View
              style={[
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingSm,
                Margins.mbLg,
              ]}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                ]}>
                <Image source={AirtelLogo} style={{width: 55, height: 55}} />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                      backgroundColor: theme.colors[ColorLabels.RED],
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      borderRadius: 5,
                    },
                  ]}>
                  DUE IN 4 DAY
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtMd,
                ]}>
                <FontAIcon
                  name="rupee"
                  style={[
                    {color: theme.colors[ColorLabels.RED]},
                    Margins.mtXsm,
                  ]}
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
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                    Margins.mlMd,
                  ]}>
                  9206765433 (POSTPAID)
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Due date
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  28 APR 2024
                </Text>
              </View>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Margins.mtMd,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Bill cycle
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  28 Mar - 28 Apr
                </Text>
              </View>
              <View style={[Margins.mtLg]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.WHITE],
                      fontSize: 16,
                      fontFamily: FontFamily.INTER_BOLD,
                      borderRadius: 50,
                      paddingVertical: 3,
                      paddingHorizontal: 10,
                    },
                    BorderStyle.borderPrimaryMedium,
                    BaseStyle.textCenter,
                    Background.primary,
                  ]}>
                  Pay now
                </Text>
              </View>
            </View>
          </View>
          <View style={[Margins.mtMd]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_BOLD,
                },

                Margins.mbMd,
              ]}>
              Support
            </Text>
            <View
              style={[
                Margins.mbLg,
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusMedium,
                Paddings.paddingMd,
              ]}>
              <Pressable onPress={() => navigation.navigate('history')}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                    Margins.mtSm,
                  ]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <MatIcon
                      name="history"
                      size={20}
                      color={theme.colors[ColorLabels.PRIMARY]}
                    />
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontSize: 13,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                        Margins.mlMd,
                      ]}>
                      My Transactions
                    </Text>
                  </View>
                  <MateIcon
                    name="arrow-forward-ios"
                    color={theme.colors[ColorLabels.BLACK]}
                  />
                </View>
              </Pressable>
              <View style={[BorderStyle.borderLightGreySmall, Margins.mtMd]} />
              <Pressable
                onPress={() =>
                  navigation.navigate(UserScreens.chatBot.routeName)
                }>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    BaseStyle.justifySpaceBetween,
                    Margins.mtXMd,
                  ]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <MateIcon
                      name="help-outline"
                      size={20}
                      color={theme.colors[ColorLabels.PRIMARY]}
                    />
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontSize: 13,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                        Margins.mlMd,
                      ]}>
                      Need Help
                    </Text>
                  </View>
                  <MateIcon
                    name="arrow-forward-ios"
                    color={theme.colors[ColorLabels.BLACK]}
                  />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: 10,
    marginTop: 8,
    textAlign: 'center',
  },
  txt1: {
    color: theme.colors[ColorLabels.WHITE],
    fontSize: 11,
    marginTop: 10,
    fontFamily: FontFamily.INTER_MEDIUM,
    textAlign: 'center',
  },
});
