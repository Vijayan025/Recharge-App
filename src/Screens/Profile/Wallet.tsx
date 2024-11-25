import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Margins} from '../../styles/Margins';
import {BorderStyle} from '../../styles/Border';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import WalletIcon from '../../../assets/images/walletIcon.png';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Controller, useForm} from 'react-hook-form';
import {convertAmount, numericNumOnly} from '../../common/utils';
import {TextInput} from 'react-native-paper';

const Wallet = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors, isValid},
  } = useForm({});
  const onSubmit = () => {
    navigation.navigate('Profile');
  };
  return (
    <SafeAreaView style={[BaseStyle.flexContainer]}>
      <View style={[{height: 50}, Margins.mtMd]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            {height: 50},
            BaseStyle.justifySpaceBetween,
            Paddings.paddingHorizontalMedium,
          ]}>
          <IonIcon
            name="arrow-back-circle"
            color={theme.colors[ColorLabels.BLACK]}
            size={25}
            onPress={() => navigation.goBack()}
          />
          <View style={{marginLeft: -15}}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                BaseStyle.textCenter,
              ]}>
              Add Money
            </Text>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.sm,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
                BaseStyle.textCenter,
              ]}>
              Wallet
            </Text>
          </View>
          <View />
        </View>
      </View>

      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            Margins.mtMLg,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingMd,
            Background.white,
            {minHeight: 250},
          ]}>
          <View
            style={[
              Margins.mtMd,
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BaseStyle.justifySpaceBetween,
              Background.white,
            ]}>
            <View>
              <Image source={WalletIcon} style={[{width: 50, height: 50}]} />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                Wallet Total Balance
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
                color: theme.colors[ColorLabels.WHITE],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.INTER_BOLD,
                width: '35%',
                borderRadius: 30,
              },
              Margins.mtMLg,
              Background.primary,
              BaseStyle.textCenter,
            ]}>
            Topup Wallet
          </Text>
          <View style={[BaseStyle.flexRow, BaseStyle.justifySpaceBetween]}>
            <View style={[Margins.mtLg]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                Enter Amount
              </Text>
              <Controller
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter an amount',
                  },
                  validate: value => {
                    const numericValue = parseFloat(value);
                    if (isNaN(numericValue) || numericValue <= 0) {
                      return 'Amount must be greater than 0';
                    }
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInputPaper
                    style={[styles.textInput, Background.white, {fontSize: 21}]}
                    textColor={ColorLabels.BLACK}
                    placeholder={'Amount'}
                    placeholderTextColor={ColorLabels.GREY}
                    outlineColor={theme.colors[ColorLabels.GREY]}
                    value={convertAmount(value)}
                    onChangeText={text => {
                      const numericOnlyNum = numericNumOnly(text);
                      onChange(numericOnlyNum);
                    }}
                    keyboardType="numeric"
                    returnKeyType="done"
                    contentStyle={[FontsFamily.bold, {paddingHorizontal: 10}]}
                    left={
                      <TextInput.Icon
                        icon={() => (
                          <FontAIcon
                            name="rupee"
                            size={20}
                            color={theme.colors[ColorLabels.BLACK]}
                            style={[Margins.mtXsm]}
                          />
                        )}
                      />
                    }
                  />
                )}
                name="amount"
              />
              {errors.amount && (
                <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                  {errors.amount.message}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
        <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
          <TouchableOpacity
            style={[
              {
                elevation: 8,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
                opacity: isValid ? 1 : 0.5,
              },
              BaseStyle.justifyCenter,
              Paddings.paddingMd,
            ]}
            onPress={handleSubmit(onSubmit)}
            disabled={isValid ? false : true}>
            <Text
              style={{
                color: ColorLabels.WHITE,
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_BOLD,
                textAlign: 'center',
              }}>
              ADD AMOUNT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  btnsub1: {
    width: '100%',
  },
});
