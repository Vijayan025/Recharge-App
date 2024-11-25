import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {ScrollView} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {UserScreens} from '../../common/routes/user/user.screens';
import {BorderStyle} from '../../styles/Border';
import SimIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import FeaIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';

const RechargesAndBills = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Recharges',
      originalTitle: 'Recharges',
    },
    {key: 'two', title: 'Bill Payments', originalTitle: 'Bill Payments'},
  ]);
  const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            BaseStyle.flexContainer,
            Background.white,
            Paddings.paddingHorizontalMedium,
          ]}>
          <View
            style={[
              BorderStyle.borderRadiusMedium,
              Margins.mbLg,
              Paddings.paddingSm,
            ]}>
            <View style={[Margins.mtMd, Margins.mbMd]}>
              <Pressable
                style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.mobileRecharge.routeName);
                }}>
                <View
                  style={[
                    BorderStyle.borderLightGreyFull,
                    Paddings.paddingSm,
                    {borderRadius: 50},
                  ]}>
                  <SimIcon
                    name="screen-smartphone"
                    size={23}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                </View>
                <Text style={styles.txt1}>Mobile Recharge</Text>
              </Pressable>
            </View>
            <View style={[Margins.mtMd, Margins.mbMd]}>
              <Pressable
                style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.dthRecharge.routeName);
                }}>
                <View
                  style={[
                    BorderStyle.borderLightGreyFull,
                    Paddings.paddingSm,
                    {borderRadius: 50},
                  ]}>
                  <FontIcon
                    name="satellite-dish"
                    size={23}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                </View>
                <Text style={styles.txt1}>DTH Recharge</Text>
              </Pressable>
            </View>
            <View style={[Margins.mtMd, Margins.mbMd]}>
              <Pressable
                style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
                onPress={() => {
                  navigation.navigate(UserScreens.fastagRecharge.routeName);
                }}>
                <View
                  style={[
                    BorderStyle.borderLightGreyFull,
                    Paddings.paddingSm,
                    {borderRadius: 50},
                  ]}>
                  <MatIcon
                    name="car-connected"
                    size={23}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                </View>
                <Text style={styles.txt1}>FASTag Recharge</Text>
              </Pressable>
            </View>
            <View style={[Margins.mtMd, Margins.mbMd]}>
              <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
                <View
                  style={[
                    BorderStyle.borderLightGreyFull,
                    Paddings.paddingSm,
                    {borderRadius: 50},
                  ]}>
                  <FeaIcon
                    name="tv"
                    size={23}
                    color={theme.colors[ColorLabels.PRIMARY]}
                  />
                </View>
                <Text style={styles.txt1}>Cable Tv</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
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
        <View
          style={[
            BorderStyle.borderRadiusMedium,
            Margins.mbLg,
            Paddings.paddingSm,
          ]}>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.mobilePostpaid.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <SimIcon
                  name="screen-smartphone"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Mobile Postpaid</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.electricityProviders.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <IonIcon
                  name="bulb-outline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Electricity</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.waterProviders.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <IonIcon
                  name="water-outline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Water</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.gasPipelineProviders.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="pipe-valve"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Gas Pipeline</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.landlineProviders.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <EntIcon
                  name="landline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Landline</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable
              style={[BaseStyle.flexRow, BaseStyle.alignCenter]}
              onPress={() => {
                navigation.navigate(UserScreens.broadBandProviders.routeName);
              }}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="router-wireless-settings"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Broadband</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <FontIcon
                  name="hand-holding-usd"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>EMI Payments</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="gas-cylinder"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Book a Cylinder</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="credit-card-multiple-outline"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Credit Card Bill</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="shield-check"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Insurance</Text>
            </Pressable>
          </View>
          <View style={[Margins.mtMd, Margins.mbMd]}>
            <Pressable style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
              <View
                style={[
                  BorderStyle.borderLightGreyFull,
                  Paddings.paddingSm,
                  {borderRadius: 50},
                ]}>
                <MatIcon
                  name="warehouse"
                  size={23}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={styles.txt1}>Municipal Tax</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
  });
  const renderTabBar = (props: any) => (
    <TabBar
      labelStyle={styles.appointmentlabel}
      {...props}
      activeColor={theme.colors[ColorLabels.PRIMARY]}
      indicatorStyle={[{backgroundColor: theme.colors[ColorLabels.BLACK]}]}
      style={styles.appointmenttabview}
      inactiveColor={theme.colors[ColorLabels.LIGHT_GREY_WHITE]}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[
            styles.appointmentlabel,
            {color},
            focused
              ? {fontWeight: 'bold'}
              : {fontFamily: FontFamily.INTER_REGULAR},
          ]}>
          {route?.originalTitle}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[{height: 55}, Background.white]}>
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
                fontFamily: FontFamily.INTER_SEMIBOLD,
              },
              BaseStyle.textCenter,
              Margins.mlMd,
            ]}>
            Recharges & Bill Payments
          </Text>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.WHITE]}
            size={20}
          />
        </View>
      </View>
      <View style={[BaseStyle.flexContainer]}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default RechargesAndBills;

const styles = StyleSheet.create({
  appointmentview: {
    flex: 1,
  },
  appointmentlabel: {
    fontSize: 15,
    fontFamily: FontFamily.INTER_MEDIUM,
  },
  appointmenttabview: {
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
  txt: {
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_MEDIUM,
    fontSize: 10,
    marginTop: 8,
    textAlign: 'center',
  },
  txt1: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: 14,
    fontFamily: FontFamily.INTER_MEDIUM,
    marginLeft: 20,
  },
});
