import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createStackNavigator} from '@react-navigation/stack';
import {UserScreens} from './user.screens';
import {ColorLabels, theme} from '../../theme';
import Dashboard from '../../../Screens/Dashboard/Dashboard';
import Profile from '../../../Screens/Profile/Profile';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FouIcon from 'react-native-vector-icons/Foundation';
import History from '../../../Screens/History/History';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import EditProfile from '../../../Screens/Profile/EditProfile';
import Wallet from '../../../Screens/Profile/Wallet';
import ReferEarn from '../../../Screens/Profile/ReferEarn';
import MobileRecharge from '../../../Screens/MobileRecharge/MobileRecharge';
import DthRecharge from '../../../Screens/DthRecharge/DthRecharge';
import DthDetails from '../../../Screens/DthRecharge/DthDetails';
import FastagRecharge from '../../../Screens/FasTagRecharge/FastagRecharge';
import FastagDetails from '../../../Screens/FasTagRecharge/FastagDetails';
import RechargePlan from '../../../Screens/MobileRecharge/RechargePlan';
import SelectOperator from '../../../Screens/MobileRecharge/SelectOperator';
import SelectCircle from '../../../Screens/MobileRecharge/SelectCircle';
import DthPlan from '../../../Screens/DthRecharge/DthPlan';
import FasTagTopup from '../../../Screens/FasTagRecharge/FasTagTopup';
import MobilePostpaid from '../../../Screens/MobileRecharge/MobilePostpaid';
import PostPaidBill from '../../../Screens/MobileRecharge/PostPaidBill';
import PostPaidOperator from '../../../Screens/MobileRecharge/PostPaidOperator';
import PaymentScreen from '../../../Screens/Payments/PaymentScreen';
import ElectricityProviders from '../../../Screens/Electricity/ElectricityProviders';
import EnterElectricityDetails from '../../../Screens/Electricity/EnterElectricityDetails';
import EbBillReview from '../../../Screens/Electricity/EbBillReview';
import PaymentSuccess from '../../../Screens/Payments/PaymentSuccess';
import WaterProviders from '../../../Screens/Water/WaterProviders';
import WaterDetails from '../../../Screens/Water/WaterDetails';
import WaterBillReview from '../../../Screens/Water/WaterBillReview';
import LandlineProviders from '../../../Screens/Landline/LandlineProviders';
import ChatBot from '../../../Screens/Dashboard/ChatBot';
import LandlineDetails from '../../../Screens/Landline/LandlineDetails';
import LandlineBillReview from '../../../Screens/Landline/LandlineBillReview';
import BroadbandProvider from '../../../Screens/Broadband/BroadbandProvider';
import BroadbandDetails from '../../../Screens/Broadband/BroadbandDetails';
import BroadbandBillReview from '../../../Screens/Broadband/BroadbandBillReview';
import GasPipeLine from '../../../Screens/GasPipeline/GasPipeLine';
import GasPipelineDetails from '../../../Screens/GasPipeline/GasPipelineDetails';
import GasPipelineBillReview from '../../../Screens/GasPipeline/GasPipelineBillReview';
import RechargesAndBills from '../../../Screens/Dashboard/RechargesAndBills';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontSize: 22,
          color: '#000',
        },
        tabBarActiveTintColor: '#0049a8',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarStyle: {
          backgroundColor: '#FFF',
          height: 52,
          borderColor: 'white',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '400',
          top: -3,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <FouIcon
                name={'home'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={28}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarLabel: 'History',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <MatIcon
                name={'notes'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '500',
            marginBottom: 2,
          },
          tabBarActiveTintColor: theme.colors[ColorLabels.PRIMARY],
          tabBarInactiveTintColor: '#6D5534',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 4,
                borderColor: 'black',
              }}>
              <FAIcon
                name={'user'}
                color={focused ? theme.colors[ColorLabels.PRIMARY] : '#6D5534'}
                size={25}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={'Main'}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={BottomTabNavigator} />
      <RootStack.Screen
        name={UserScreens.dashboard.routeName}
        component={Dashboard}
      />
      <RootStack.Screen
        name={UserScreens.profile.routeName}
        component={Profile}
      />
      <RootStack.Screen
        name={UserScreens.editProfile.routeName}
        component={EditProfile}
      />
      <RootStack.Screen
        name={UserScreens.wallet.routeName}
        component={Wallet}
      />
      <RootStack.Screen
        name={UserScreens.referEarn.routeName}
        component={ReferEarn}
      />
      <RootStack.Screen
        name={UserScreens.mobileRecharge.routeName}
        component={MobileRecharge}
      />
      <RootStack.Screen
        name={UserScreens.dthRecharge.routeName}
        component={DthRecharge}
      />
      <RootStack.Screen
        name={UserScreens.dthDetails.routeName}
        component={DthDetails}
      />
      <RootStack.Screen
        name={UserScreens.fastagRecharge.routeName}
        component={FastagRecharge}
      />
      <RootStack.Screen
        name={UserScreens.fastagDetails.routeName}
        component={FastagDetails}
      />
      <RootStack.Screen
        name={UserScreens.rechargePlan.routeName}
        component={RechargePlan}
      />
      <RootStack.Screen
        name={UserScreens.selectOperator.routeName}
        component={SelectOperator}
      />
      <RootStack.Screen
        name={UserScreens.selectCircle.routeName}
        component={SelectCircle}
      />
      <RootStack.Screen
        name={UserScreens.dthPlan.routeName}
        component={DthPlan}
      />
      <RootStack.Screen
        name={UserScreens.fastagTopup.routeName}
        component={FasTagTopup}
      />
      <RootStack.Screen
        name={UserScreens.mobilePostpaid.routeName}
        component={MobilePostpaid}
      />
      <RootStack.Screen
        name={UserScreens.postpaidBill.routeName}
        component={PostPaidBill}
      />
      <RootStack.Screen
        name={UserScreens.postpaidOperator.routeName}
        component={PostPaidOperator}
      />
      <RootStack.Screen
        name={UserScreens.paymentScreen.routeName}
        component={PaymentScreen}
      />
      <RootStack.Screen
        name={UserScreens.electricityProviders.routeName}
        component={ElectricityProviders}
      />
      <RootStack.Screen
        name={UserScreens.enterElectricityDetails.routeName}
        component={EnterElectricityDetails}
      />
      <RootStack.Screen
        name={UserScreens.ebBillReview.routeName}
        component={EbBillReview}
      />
      <RootStack.Screen
        name={UserScreens.paymentSuccess.routeName}
        component={PaymentSuccess}
      />
      <RootStack.Screen
        name={UserScreens.waterProviders.routeName}
        component={WaterProviders}
      />
      <RootStack.Screen
        name={UserScreens.waterDetails.routeName}
        component={WaterDetails}
      />
      <RootStack.Screen
        name={UserScreens.waterBillReview.routeName}
        component={WaterBillReview}
      />
      <RootStack.Screen
        name={UserScreens.landlineProviders.routeName}
        component={LandlineProviders}
      />
      <RootStack.Screen
        name={UserScreens.chatBot.routeName}
        component={ChatBot}
      />
      <RootStack.Screen
        name={UserScreens.landlineDetails.routeName}
        component={LandlineDetails}
      />
      <RootStack.Screen
        name={UserScreens.landlineBillReview.routeName}
        component={LandlineBillReview}
      />
      <RootStack.Screen
        name={UserScreens.broadBandProviders.routeName}
        component={BroadbandProvider}
      />
      <RootStack.Screen
        name={UserScreens.broadbandDetails.routeName}
        component={BroadbandDetails}
      />
      <RootStack.Screen
        name={UserScreens.broadbandBillReview.routeName}
        component={BroadbandBillReview}
      />
      <RootStack.Screen
        name={UserScreens.gasPipelineProviders.routeName}
        component={GasPipeLine}
      />
      <RootStack.Screen
        name={UserScreens.gasPipelineDetails.routeName}
        component={GasPipelineDetails}
      />
      <RootStack.Screen
        name={UserScreens.gasPipelineBillReview.routeName}
        component={GasPipelineBillReview}
      />
      <RootStack.Screen
        name={UserScreens.rechargesAndBills.routeName}
        component={RechargesAndBills}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
