import React, {useEffect, useState} from 'react';
import OtpDesign from './OtpDesign';
import {View} from 'react-native';
import {ThemeInterface} from '../../common/theme';
import config from '../../common/config';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {useNavigationSource} from '../Common/NavigationSource';

interface LoginPropsInterface {
  theme: ThemeInterface;
  navigation: any;
  route: any;
}
const OtpPageScreen = ({navigation, route}: LoginPropsInterface) => {
  const {setNavigationSource}: any = useNavigationSource();
  console.log('route OTP', route);
  const Type = route?.params?.type;

  // const isOtpRequestLoading = false;
  // const isOtpValidationLoading = false;
  const [otpDuration, setOtpDuration] = useState(config.otpDuration);
  const email = route?.params?.data
    ? route?.params?.data
    : route?.params?.email;
  console.log('email', email);
  const type = route?.params?.type ? route?.params?.type : 'RESEND';

  const onVerifyOtpClick = (code: any, setCode: any) => {
    setNavigationSource('VERIFIED');
    const Code = code?.code;
    console.log('setCode', setCode);
    // if (Type === 'FORGOT') {
    //   navigation.navigate(AuthScreens.resetPassword.routeName);
    // } else {
    //   navigation.navigate(AuthScreens.login.routeName);
    // }
    // dispatch(
    //   VerifyOtpInProgress({
    //     email: email,
    //     code: Code,
    //     navigation,
    //     setCode,
    //     type,
    //   }),
    // );
  };

  // useEffect(() => {
  //   dispatch(OtpResendInProgress({email: email, type}));
  // }, [type === 'SIGNUP']);
  const handleResendOtp = (setCode: any) => {
    const type = 'RESEND';
    setCode('');
    setOtpDuration(config.otpDuration);
    // Logic for OTP resend
  };

  const onOtpDurationEnd = () => {
    setOtpDuration(0);
  };

  return (
    <View style={[BaseStyle.flexContainer, Background.white]}>
      <OtpDesign
        handleResendOtp={handleResendOtp}
        handleOtpSubmit={onVerifyOtpClick}
        isOtpValidationLoading={false}
        isOtpRequestLoading={false}
        otpDuration={otpDuration}
        onOtpDurationEnd={onOtpDurationEnd}
      />
    </View>
  );
};

export default OtpPageScreen;
