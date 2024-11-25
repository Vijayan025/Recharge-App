import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import SunDirectLogo from '../../../assets/images/Sun-Direct.jpg';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {TextInput} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {UserScreens} from '../../common/routes/user/user.screens';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {BorderStyle} from '../../styles/Border';
import {TouchableOpacity} from 'react-native';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native';
import DthPlanCard from './DthPlanCard';

const DthPlan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText]: any = useState();
  const [value, setValue]: any = useState();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Monthly Packs',
      originalTitle: 'Monthly Packs',
    },
    {key: 'two', title: '3 Month Packs', originalTitle: '3 Month Packs'},
    {
      key: 'three',
      title: '6 Month Packs',
      originalTitle: '6 Month Packs',
    },
    {key: 'four', title: 'Yearly Packs', originalTitle: 'Yearly Packs'},
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
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="5"
          validity="1 Month"
          plan="HD Pack"
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
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="559"
          validity="3 Months"
          plan="SD Pack"
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
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="594"
          validity="6 MonthS"
          plan="SD Pack"
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
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
        <DthPlanCard
          price="1188"
          validity="12 Months"
          plan="SD Pack"
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        />
      </View>
      <View style={[Margins.mbLg]} />
    </ScrollView>
  );
  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
    three: ThirdRoute,
    four: FourthRoute,
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
            BaseStyle.justifySpaceBetween,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Image
              source={SunDirectLogo}
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
                  Sun Direct
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.PRIMARY],
                fontSize: fontSizes.smm,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
              Margins.mrMd,
            ]}
            onPress={() =>
              navigation.navigate(UserScreens.dthDetails.routeName)
            }>
            EDIT
          </Text>
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
                      1188
                    </Text>
                  </View>
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
                  SD - ROI Basic Pack
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
                    12 Months
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
                    SD Pack
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

export default DthPlan;

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
