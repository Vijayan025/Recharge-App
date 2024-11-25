import Login from '../../../Screens/Auth/Login';
import OtpPageScreen from '../../../Screens/OTP/OtpPageScreen';
import {AuthScreens} from './auth.screens';

const AUTH_ROUTES = {
  module: 'auth',
  initialRoute: 'login',
  routes: [
    {
      name: AuthScreens.login.displayName,
      path: AuthScreens.login.routeName,
      component: Login,
      drawerMenu: false,
      options: {headerShown: false},
    },
    {
      name: AuthScreens.otpVerify.displayName,
      path: AuthScreens.otpVerify.routeName,
      component: OtpPageScreen,
      drawerMenu: false,
      options: {headerShown: false},
    },
  ],
};

export {AUTH_ROUTES};
