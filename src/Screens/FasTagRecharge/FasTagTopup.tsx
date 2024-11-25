import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import SunDirectLogo from '../../../assets/images/airtelPayment.jpg';
import {BorderStyle} from '../../styles/Border';
import {Controller, useForm} from 'react-hook-form';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {convertAmount, numericNumOnly} from '../../common/utils';
import {TextInput} from 'react-native-paper';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import {UserScreens} from '../../common/routes/user/user.screens';

const FasTagTopup = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors, isValid},
  } = useForm({});
  const onSubmit = (data: any) => {
    console.log('data', data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(UserScreens.paymentScreen.routeName);
    }, 1500);
  };
  console.log('route', route);
  const Id = route?.params?.VehicleId;
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
            FASTag Topup
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtLg]}>
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
              {Id}
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
                Airtel Payments Bank FASTag
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: 14,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mtMLg,
            ]}>
            Bill Details
          </Text>
          <View
            style={[
              Margins.mtMd,
              BorderStyle.borderLightGreyFull,
              Paddings.paddingSm,
              BorderStyle.borderRadiusMedium,
              Background.white,
            ]}>
            <View style={[styles.substyle, Margins.mbMd]}>
              <Text style={styles.txt}>Customer Name</Text>
              <Text style={styles.txt1}>:</Text>
              <Text style={styles.txt4}>Ramesh</Text>
            </View>
            <View style={[styles.substyle, Margins.mbMd]}>
              <Text style={styles.txt}>FASTag Balance</Text>
              <Text style={styles.txt1}>:</Text>
              <Text style={styles.txt4}>2205.88</Text>
            </View>
            <View style={styles.substyle}>
              <Text style={styles.txt}>Vehicle Model</Text>
              <Text style={styles.txt1}>:</Text>
              <Text style={styles.txt4}>{Id}</Text>
            </View>
          </View>
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
                Enter Topup Amount
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
            {loading ? (
              <View style={[Paddings.paddingMd]}>
                <DotIndicator color="white" size={10} />
              </View>
            ) : (
              <Text
                style={{
                  color: ColorLabels.WHITE,
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                  textAlign: 'center',
                }}>
                PROCEED TO PAY
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FasTagTopup;

const styles = StyleSheet.create({
  substyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txt: {
    width: '40%',
    textAlign: 'left',
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.INTER_MEDIUM,
    color: theme.colors[ColorLabels.LIGHT_BLACK],
  },
  txt1: {
    width: '10%',
    textAlign: 'left',
    color: theme.colors[ColorLabels.LIGHT_BLACK],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.INTER_MEDIUM,
  },
  txt4: {
    width: '50%',
    textAlign: 'right',
    color: theme.colors[ColorLabels.MEDIUM_GREY],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.INTER_MEDIUM,
    marginTop: 2,
  },
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  btnsub1: {
    width: '100%',
  },
});
