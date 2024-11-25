import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {BaseStyle} from '../../styles/Base';
import {Background} from '../../styles/Background';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {Paddings} from '../../styles/Padding';
import {Controller, useForm} from 'react-hook-form';
import {validateEmail} from '../../common/utils';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {TextInput} from 'react-native-paper';
import Flag from '../../../assets/images/indiaFlag.png';
import {useNavigation} from '@react-navigation/native';
import {AuthScreens} from '../../common/routes/auth/auth.screens';
import {useNavigationSource} from '../Common/NavigationSource';
import NumericPad from 'react-native-numeric-pad';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  const navigation = useNavigation();
  const {setNavigationSource}: any = useNavigationSource();
  const [amount, setAmount] = useState('');
  const numpadRef = useRef(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({});
  const isValidPhoneNumber = (value: string) => {
    const phoneRegex = /^[6-9][0-9]{9}$/;
    return phoneRegex.test(value);
  };
  const onSubmit = () => {
    navigation.navigate(AuthScreens.otpVerify.routeName);
  };
  return (
    <SafeAreaView style={[BaseStyle.flexContainer, Background.white]}>
      <View
        style={[
          BaseStyle.flexContainer,
          Margins.mtXl,
          Paddings.paddingHorizontalMedium,
        ]}>
        <Text style={styles.text}>Get Started with{'\n'}YaaRecharge</Text>
        <View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.GREY],
                fontSize: fontSizes.smm,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
              Margins.mtLg,
              Margins.mbMd,
            ]}>
            Enter your mobile number to login or signup
          </Text>
        </View>
        <View style={[BaseStyle.flexRow]}>
          <View>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput1, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholder={''}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  activeOutlineColor={theme.colors[ColorLabels.PRIMARY]}
                  value={'+91'}
                  onChangeText={onChange}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  contentStyle={{paddingHorizontal: 5, marginLeft: 40}}
                  editable={false}
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Image
                          source={Flag}
                          resizeMode="contain"
                          style={{width: 20, height: 20}}
                        />
                      )}
                      disabled
                      style={{marginLeft: -8}}
                    />
                  }
                />
              )}
              name="code"
            />
          </View>
          <View style={[Margins.mlMd]}>
            <Controller
              control={control}
              rules={{
                validate: value => {
                  if (!amount) {
                    return 'Mobile Number is required';
                  }
                  if (!isValidPhoneNumber(amount)) {
                    return 'Please enter a valid phone number';
                  }
                  return true;
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  activeOutlineColor={theme.colors[ColorLabels.PRIMARY]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'00000 00000'}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  returnKeyType="done"
                  autoCapitalize="none"
                  maxLength={isValidPhoneNumber(value) ? 10 : null}
                  contentStyle={{paddingHorizontal: 10}}
                  value={amount}
                  autoFocus={true}
                  editable={false}
                />
              )}
              name="number"
            />
            {errors.number && (
              <Text
                style={[
                  {color: theme.colors[ColorLabels.ERROR_ORANGE]},
                  Margins.mtSm,
                ]}>
                {errors.number.message}
              </Text>
            )}
          </View>
        </View>
        <View style={[Margins.mtXXl, BaseStyle.alignCenter]}>
          <Text
            style={{
              color: ColorLabels.BLACK,
              fontSize: fontSizes.sm,
              fontFamily: FontFamily.INTER_MEDIUM,
              fontWeight: '300',
              textAlign: 'center',
              borderBottomColor: 'black',
              borderBottomWidth: 0.8,
            }}
            onPress={() => {
              setNavigationSource('NOT_VERIFIED');
            }}>
            Skip this step
          </Text>
        </View>
        <View style={[Margins.mtMLg, BaseStyle.justifyEnd]}></View>
        <View
          style={[
            BaseStyle.flexContainer,
            BaseStyle.justifyEnd,
            Margins.mbXXl,
            Paddings.paddingHorizontalSmd,
          ]}>
          <NumericPad
            ref={numpadRef}
            numLength={10}
            buttonSize={60}
            activeOpacity={0.1}
            onValueChange={value => setAmount(value)}
            allowDecimal={false}
            buttonItemStyle={{
              backgroundColor: theme.colors[ColorLabels.LIGHT_GREY],
            }}
            rightBottomButton={
              <IonIcon
                name={'ios-backspace-outline'}
                size={28}
                color={'#000'}
              />
            }
            onRightBottomButtonPress={() => {
              numpadRef.current.clear();
            }}
          />
          <TouchableOpacity
            style={[
              Margins.mtLg,
              {
                elevation: 4,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
                minHeight: 40,
                borderRadius: 50,
              },
              BaseStyle.justifyCenter,
            ]}
            onPress={handleSubmit(onSubmit)}>
            <Text
              style={{
                color: ColorLabels.WHITE,
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_MEDIUM,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.lg,
    lineHeight: 30,
    letterSpacing: 0.6,
    fontFamily: FontFamily.INTER_BOLD,
  },
  textInput: {
    minWidth: 250,
    borderColor: 'black',
    height: 52,
    borderRadius: 40,
  },
  textInput1: {
    width: 80,
    borderColor: 'black',
    height: 52,
    borderRadius: 50,
  },
});
