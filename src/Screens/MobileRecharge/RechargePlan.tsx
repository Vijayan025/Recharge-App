import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MyContactImage from '../../../assets/images/airtelIcon.png';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {TextInput} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {UserScreens} from '../../common/routes/user/user.screens';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {BorderStyle} from '../../styles/Border';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Layout} from '../../styles/Layout';
import wynkLogo from '../../../assets/images/wynkLogo.png';
import MobileRechargePlanCard from './MobileRechargePlanCard';

const RechargePlan = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [searchText, setSearchText]: any = useState();
  const [value, setValue]: any = useState();

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Recommended Packs',
      originalTitle: 'Recommended Packs',
    },
    {key: 'two', title: 'Cricket Plans', originalTitle: 'Cricket Plans'},
    {key: 'three', title: 'Truly Unlimited', originalTitle: 'Truly Unlimited'},
    {key: 'four', title: 'Data Add On', originalTitle: 'Data Add On'},
    {key: 'five', title: 'Top Up', originalTitle: 'Top Up'},
    {
      key: 'six',
      title: 'International Roaming',
      originalTitle: 'International Roaming',
    },
    {key: 'seven', title: 'Others', originalTitle: 'Others'},
  ]);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="179"
          validity="28 Days"
          data="2 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="179"
          validity="28 Days"
          data="2 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="179"
          validity="28 Days"
          data="2 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="179"
          validity="28 Days"
          data="2 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="179"
          validity="28 Days"
          data="2 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="499"
          validity="28 Days"
          data="3 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="499"
          validity="28 Days"
          data="3 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="499"
          validity="28 Days"
          data="3 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="499"
          validity="28 Days"
          data="3 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="499"
          validity="28 Days"
          data="3 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );
  const ThirdRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="299"
          validity="28 Days"
          data="1.5 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="299"
          validity="28 Days"
          data="1.5 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="299"
          validity="28 Days"
          data="1.5 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="299"
          validity="28 Days"
          data="1.5 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <MobileRechargePlanCard
          price="299"
          validity="28 Days"
          data="1.5 GB/Day"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );
  const FourthRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="301"
          data="50 GB"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
          addOn={true}
        />
      </View>
    </ScrollView>
  );
  const FifthRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="10"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
          talktime={true}
        />
      </View>
    </ScrollView>
  );
  const SixthRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="649"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
          data="500 MB"
          validity="1 Day"
          roaming={true}
        />
      </View>
    </ScrollView>
  );
  const SeventhRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <MobileRechargePlanCard
          price="195"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
          data="250 MB"
          validity="1 Day"
          roaming={true}
        />
      </View>
    </ScrollView>
  );

  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
    three: ThirdRoute,
    four: FourthRoute,
    five: FifthRoute,
    six: SixthRoute,
    seven: SeventhRoute,
  });
  console.log('route', route);
  const number = route?.params?.number;

  useEffect(() => {
    setValue(number);
  }, []);

  const renderTabBar = (props: any) => (
    <TabBar
      labelStyle={styles.appointmentlabel}
      scrollEnabled
      {...props}
      activeColor={theme.colors[ColorLabels.BLACK]}
      indicatorStyle={[{backgroundColor: theme.colors[ColorLabels.PRIMARY]}]}
      style={styles.appointmenttabview}
      inactiveColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
      renderLabel={({route, focused, color}) => (
        <Text style={[styles.appointmentlabel, {color}]}>
          {route?.originalTitle}
        </Text>
      )}
    />
  );
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
            Select Plan
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Background.white,
            Margins.mtLg,
          ]}>
          <Image source={MyContactImage} style={{width: 50, height: 50}} />
          <View style={[Margins.mlSm]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smm,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              {value}
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
                Airtel Prepaid - Tamil Nadu
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontSize: fontSizes.sm,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                  Margins.mlMd,
                ]}
                onPress={() =>
                  navigation.navigate(UserScreens.selectOperator.routeName)
                }>
                Change
              </Text>
            </View>
          </View>
        </View>
        <View style={[Margins.mtMd]}>
          <TextInputPaper
            style={[styles.textInput, Background.white, {fontSize: 16}]}
            textColor={ColorLabels.BLACK}
            mode="outlined"
            placeholder={'Search a Plan'}
            onChangeText={(text: any) => {
              setSearchText(text);
            }}
            value={searchText}
            outlineColor={theme.colors[ColorLabels.GREY]}
            outlineStyle={{borderWidth: 1, borderRadius: 10}}
            maxLength={10}
            left={
              <TextInput.Icon
                icon={() => <IonIcon name="search" color="black" size={20} />}
              />
            }
          />
        </View>
      </View>
      <View style={[BaseStyle.flexContainer, Margins.mtLg]}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enableDynamicSizing
        backgroundStyle={{backgroundColor: theme.colors[ColorLabels.WHITE]}}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        handleHeight={50}
        onDismiss={() => bottomSheetModalRef.current?.close()}>
        <BottomSheetView>
          <View
            style={[
              Paddings.paddingVerticalSmall,
              Margins.mbXl,
              Paddings.paddingHorizontalMedium,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                Margins.mtLg,
              ]}>
              Plan Details
            </Text>
            <View
              style={[
                Margins.mtLg,
                BorderStyle.borderLightGreyFull,
                BorderStyle.borderRadiusLarge,
              ]}>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  BaseStyle.justifySpaceBetween,
                  Paddings.paddingMd,
                ]}>
                <View style={[Margins.mlMd]}>
                  <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                    <FontAIcon
                      name="rupee"
                      style={[
                        {color: theme.colors[ColorLabels.PRIMARY]},
                        Margins.mtXsm,
                      ]}
                      size={18}
                    />
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.PRIMARY],
                          fontSize: fontSizes.xlg,
                          fontFamily: FontFamily.INTER_BOLD,
                        },
                        Margins.mlSm,
                      ]}>
                      179
                    </Text>
                  </View>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.MEDIUM_GREY],
                        fontSize: fontSizes.sm,
                        fontFamily: FontFamily.INTER_MEDIUM,
                      },
                    ]}>
                    Unlimited Calls
                  </Text>
                </View>
              </View>
              <View style={[Paddings.paddingHorizontalMedium, Margins.mbMd]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.xsm,
                      fontFamily: FontFamily.INTER_REGULAR,
                    },
                  ]}>
                  Get Truly Unlimited calls + 2 GB Data + 300 SMS + Wynk music
                </Text>
              </View>
              <View
                style={[
                  {
                    borderBottomLeftRadius: 13.5,
                    borderBottomRightRadius: 13.5,
                  },
                  Background.lightWhite,
                  BaseStyle.justifyEvenly,
                  Paddings.paddingHorizontalMedium,
                  BaseStyle.flexRow,
                  Paddings.paddingLg,
                ]}>
                <View style={[BaseStyle.alignCenter]}>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.BLACK],
                        fontSize: 14,
                        fontFamily: FontFamily.INTER_MEDIUM,
                      },
                    ]}>
                    28 Days
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
                    2 GB
                  </Text>
                  <Text
                    style={[
                      {
                        color: theme.colors[ColorLabels.MEDIUM_GREY],
                        fontSize: fontSizes.sm,
                        fontFamily: FontFamily.INTER_MEDIUM,
                      },
                    ]}>
                    Data
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={[styles.btnsub1, Margins.mtLg]}>
                <TouchableOpacity
                  style={[
                    {
                      elevation: 8,
                      backgroundColor: theme.colors[ColorLabels.PRIMARY],
                    },
                    BaseStyle.justifyCenter,
                    Paddings.paddingLg,
                    BorderStyle.borderRadiusLarge,
                  ]}
                  onPress={() => {
                    bottomSheetModalRef.current?.close();
                    navigation.navigate(UserScreens.paymentScreen.routeName);
                  }}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.smd,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Select Plan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default RechargePlan;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  appointmentview: {
    flex: 1,
  },
  appointmentlabel: {
    fontSize: 13,
    fontFamily: FontFamily.INTER_MEDIUM,
  },
  appointmenttabview: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
  btnsub1: {
    width: '100%',
  },
});
