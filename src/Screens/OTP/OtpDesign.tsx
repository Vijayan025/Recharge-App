import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator, Button, Text, useTheme} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';
import {useOtpVerify} from 'react-native-otp-verify';
import config from '../../common/config';
import {BaseStyle} from '../../styles/Base';
import {Layout} from '../../styles/Layout';
import {Margins} from '../../styles/Margins';
import {Paddings} from '../../styles/Padding';
import {CustomOtpInputView} from '../Common/CustomOtpInput';
import {Background} from '../../styles/Background';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {BorderStyle} from '../../styles/Border';

const OtpDesign = ({
  handleResendOtp,
  handleOtpSubmit,
  isOtpValidationLoading,
  isOtpRequestLoading,
  otpDuration,
  onOtpDurationEnd = () => {},
}: any) => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(45);
  const [attempts, setAttempts] = useState(0);
  const {otp} = useOtpVerify({numberOfDigits: 6});
  const [code, setCode] = useState<string | null>('');

  useEffect(() => {
    setSeconds(otpDuration);
  }, [otpDuration]);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
    reset,
  } = useForm();
  console.log('isvalid', isValid);
  const onVerifyOtpClick = () => {
    if (code) {
      handleOtpSubmit({code, setCode}, setCode);
      setAttempts(attempts + 1);
    } else {
      setCode('');
    }
  };

  const resendOtp = () => {
    handleResendOtp(setCode);
    setAttempts(0);
  };
  // const isProceedButtonDisabled = code?.length === 6 && attempts >= 1;
  const handleChange = (val: React.SetStateAction<string | null>) => {
    setCode(val);
    return val;
  };

  useEffect(() => {
    if (!otp) {
      return;
    }
    if (String(otp).length === config.otpCount) {
      setCode(otp);
    }
  }, [otp]);
  const OTP = watch('otp');
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
        onOtpDurationEnd();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const otpInputRef = useRef<OTPInputView>(null);
  useEffect(() => {
    if (Platform.OS === 'android') {
      const timeout = setTimeout(() => {
        if (otpInputRef.current) {
          otpInputRef.current.focusField(0);
        }
      }, 250);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [Platform.OS === 'android']);

  return (
    <View
      style={[
        BaseStyle.flexContainer,
        BaseStyle.flexColumn,
        BaseStyle.justifySpaceBetween,
        Background.white,
      ]}>
      <View style={[Layout.flex3, Background.white]}>
        <View style={[Background.white]}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Paddings.paddingHorizontalExtraMedium,
              Margins.mtMLg,
            ]}>
            <MatIcon
              name="arrow-back-ios"
              color={theme.colors[ColorLabels.BLACK]}
              size={19}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
        <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mtLg]}>
          <Text
            style={{
              color: theme.colors[ColorLabels.BLACK],
              fontSize: 25,
              fontFamily: FontFamily.INTER_BOLD,
            }}>
            Enter OTP to verify{'\n'}your number
          </Text>
        </View>
        <View
          style={[
            BaseStyle.flexContainer,
            Background.white,
            {borderTopLeftRadius: 30},
          ]}>
          <View
            style={[
              Margins.mtMLg,
              Margins.mbSm,
              // Paddings.paddingHorizontalExtraMedium,
              Background.white,
            ]}>
          </View>
          <View style={[Margins.mbMd]}>
            <Controller
              name="otp"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'OTP is Mandatory',
                },
                minLength: {
                  value: 4,
                  message: 'Enter Valid Otp',
                },
              }}
              render={({field: {onChange}}) => (
                <CustomOtpInputView
                  otpInputRef={otpInputRef}
                  primary
                  pinCount={config.otpCount}
                  setCode={(val: any) => onChange(handleChange(val))}
                  code={code ? code : ''}
                  autoFocusOnLoad={true}
                  codeInputFieldStyle={{
                    width: 46,
                    height: 48,
                    fontSize: 16,
                  }}
                  secureTextEntry={true}
                />
              )}
            />
            {errors.otp && (
              <Text
                style={[styles.error, Paddings.paddingHorizontalExtraMedium]}>
                {errors?.otp?.message}
              </Text>
            )}
          </View>
          <View
            style={[
              styles.inputBox,
              Margins.mbLg,
              Paddings.paddingHorizontalExtraMedium,
            ]}>
            {seconds > 0 ? (
              <Text style={styles.resendText1}>
                Resend OTP {seconds > 0 ? 'in' : ''}{' '}
                {seconds > 0 ? (
                  <Text style={{color: theme.colors[ColorLabels.PRIMARY]}}>
                    {String(seconds).padStart(2, '0')} Seconds
                  </Text>
                ) : (
                  ''
                )}
              </Text>
            ) : (
              <View style={[Margins.mtMd]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.smm,
                      fontFamily: FontFamily.INTER_MEDIUM,
                      textAlign: 'left',
                    },
                  ]}>
                  Didn't Receive any code
                </Text>
                <TouchableOpacity onPress={resendOtp} style={[Margins.mtSm]}>
                  {isOtpRequestLoading ? (
                    <ActivityIndicator
                      color={theme.colors[ColorLabels.PRIMARY]}
                      size={25}
                    />
                  ) : (
                    <Text style={styles.resendText}>Resend OTP</Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={[BaseStyle.alignCenter, Margins.mtXl]}>
            <TouchableOpacity
              style={[
                isValid ? Background.primary : Background.white,
                Margins.mbLg,
                isValid ? '' : BorderStyle.borderGreyCalendar,
                {
                  elevation: 3,
                  width: '80%',
                  paddingVertical: 10,
                  borderRadius: 50,
                },
              ]}
              onPress={handleSubmit(onVerifyOtpClick)}>
              {isOtpValidationLoading ? (
                <ActivityIndicator color="white" size={25} />
              ) : (
                <Text
                  style={{
                    color: isValid ? ColorLabels.WHITE : ColorLabels.GREY,
                    fontSize: fontSizes.smd,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    textAlign: 'center',
                  }}>
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OtpDesign;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 30,
  },
  content: {
    marginHorizontal: 30,
  },
  mg: {
    marginTop: 40,
  },
  text1: {
    fontSize: 28,
  },
  main: {
    marginHorizontal: 90,
  },
  box: {
    marginHorizontal: 60,
  },
  box1: {
    minHeight: 50,
  },
  inputBox: {
    marginTop: 10,
  },
  inputBox1: {
    borderRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: '#0051ba',
    borderWidth: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
  inputBoxHighlighted: {
    borderWidth: 2,
  },
  text: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smd,
    fontFamily: FontFamily.INTER_MEDIUM,
  },
  resendText: {
    color: theme.colors[ColorLabels.PRIMARY],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.INTER_SEMIBOLD,
  },
  resendText1: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.md,
    fontFamily: FontFamily.INTER_MEDIUM,
  },
  error: {
    color: theme.colors[ColorLabels.ERROR_ORANGE],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.INTER_MEDIUM,
    marginTop: 5,
  },
  shield: {
    width: 50,
    height: 50,
    borderColor: theme.colors[ColorLabels.PRIMARY],
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors[ColorLabels.PRIMARY],
  },
});
