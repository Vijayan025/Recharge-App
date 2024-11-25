import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {useNavigation} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MyContactImage from '../../../assets/images/airtelIcon.png';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import WalletIcon from '../../../assets/images/walletIcon.png';
import {BorderStyle} from '../../styles/Border';
import Checkbox from '../../common/ui/CheckBox';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ScrollView} from 'react-native';
import GPayLogo from '../../../assets/images/gPayLogo.png';
import PhonePeLogo from '../../../assets/images/phonepeLogo.png';
import AmazonLogo from '../../../assets/images/amazonLogo.jpg';
import FEIcon from 'react-native-vector-icons/Octicons';
import {Controller, useForm} from 'react-hook-form';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {numericNumOnly} from '../../common/utils';
import AirtelLogo from '../../../assets/images/airtelPayment.jpg';
import SbiLogo from '../../../assets/images/SbiLogo.png';
import {DotIndicator} from 'react-native-indicators';
import {UserScreens} from '../../common/routes/user/user.screens';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [isPay, setIsPay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedBankOption, setSelectedBankOption] = useState(null);

  const layout = useWindowDimensions();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({});

  const handleSelectOption = (option: any) => {
    setSelectedOption(option);
  };
  const handleBankSelectOption = (option: any) => {
    setSelectedBankOption(option);
  };
  const isSelected = (option: any) => {
    return selectedOption === option;
  };
  const isBankSelected = (option: any) => {
    return selectedBankOption === option;
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handlePay = () => {
    setIsPay(!isPay);
  };
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'one',
      title: 'Upi',
      originalTitle: 'UPI',
    },
    {key: 'two', title: 'Cards', originalTitle: 'CARDS'},
    {
      key: 'three',
      title: 'Internet Banking',
      originalTitle: 'INTERNET BANKING',
    },
  ]);

  const FirstRoute = () => (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          BaseStyle.flexContainer,
          Background.white,
          Paddings.paddingHorizontalMedium,
        ]}>
        <TouchableOpacity onPress={() => handleSelectOption('gpay')}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Paddings.paddingSm,
              Margins.mtLg,
              isSelected('gpay') && BorderStyle.borderPrimary,
            ]}>
            <View style={{width: '20%'}}>
              <Image source={GPayLogo} style={{width: 40, height: 40}} />
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexContainer,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlMd,
                ]}>
                GPay
              </Text>
              {isSelected('gpay') && (
                <FEIcon
                  name="check-circle-fill"
                  size={16}
                  style={[Margins.mrMd]}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectOption('phonePe')}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Paddings.paddingSm,
              Margins.mtLg,
              isSelected('phonePe') && BorderStyle.borderPrimary,
            ]}>
            <View style={{width: '20%'}}>
              <Image source={PhonePeLogo} style={{width: 40, height: 40}} />
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexContainer,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlMd,
                ]}>
                PhonePe
              </Text>
              {isSelected('phonePe') && (
                <FEIcon
                  name="check-circle-fill"
                  size={16}
                  style={[Margins.mrMd]}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectOption('amazon')}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Paddings.paddingSm,
              Margins.mtLg,
              isSelected('amazon') && BorderStyle.borderPrimary,
            ]}>
            <View style={{width: '20%'}}>
              <Image source={AmazonLogo} style={{width: 35, height: 35}} />
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexContainer,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlMd,
                ]}>
                Amazon
              </Text>
              {isSelected('amazon') && (
                <FEIcon
                  name="check-circle-fill"
                  size={16}
                  style={[Margins.mrMd]}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.smm,
              fontFamily: FontFamily.INTER_MEDIUM,
            },
            Margins.mtLg,
          ]}>
          DEBIT / CREDIT CARDS
        </Text>
        <View style={[Margins.mtLg]}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Invalid card number',
              },
              //   pattern: {
              //     value: /^[6-9][0-9]{9}$/,
              //     message: 'Invalid Number',
              //   },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white, {fontSize: 16}]}
                textColor={ColorLabels.BLACK}
                placeholderTextColor={ColorLabels.GREY}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderWidth: 1}}
                value={value}
                onChangeText={text => {
                  const numericOnlyNum = numericNumOnly(text);
                  onChange(numericOnlyNum);
                }}
                keyboardType="numeric"
                returnKeyType="done"
                contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                maxLength={12}
                label="Card Number"
              />
            )}
            name="cardNumber"
          />
          {errors.cardNumber && (
            <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
              {errors.cardNumber.message}
            </Text>
          )}
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.justifySpaceBetween,
            BaseStyle.alignCenter,
            Margins.mtXMd,
            Margins.mbSm,
          ]}>
          <View>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Invalid Date',
                },
                //   pattern: {
                //     value: /^[6-9][0-9]{9}$/,
                //     message: 'Invalid Number',
                //   },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput1, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  outlineStyle={{borderWidth: 1}}
                  value={value}
                  onChangeText={text => {
                    // Ensure only numbers are entered
                    const numericOnlyNum = text.replace(/[^0-9]/g, '');
                    // Insert slash after the second character if the length is 2 or more
                    if (numericOnlyNum.length <= 2) {
                      onChange(numericOnlyNum);
                    } else {
                      onChange(
                        numericOnlyNum.slice(0, 2) +
                          '/' +
                          numericOnlyNum.slice(2),
                      );
                    }
                  }}
                  keyboardType="numeric"
                  returnKeyType="done"
                  contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                  maxLength={5}
                  label="MM/YY"
                />
              )}
              name="validity"
            />
            {errors.validity && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.validity.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Invalid cvv number',
                },
                //   pattern: {
                //     value: /^[6-9][0-9]{9}$/,
                //     message: 'Invalid Number',
                //   },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput1, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  outlineStyle={{borderWidth: 1}}
                  value={value}
                  onChangeText={text => {
                    const numericOnlyNum = numericNumOnly(text);
                    onChange(numericOnlyNum);
                  }}
                  keyboardType="numeric"
                  returnKeyType="done"
                  contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                  maxLength={3}
                  label="CVV"
                />
              )}
              name="cvv"
            />
            {errors.cvv && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.cvv.message}
              </Text>
            )}
          </View>
        </View>
      </View>
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
        <TouchableOpacity onPress={() => handleBankSelectOption('airtel')}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Paddings.paddingSm,
              Margins.mtLg,
              isBankSelected('airtel') && BorderStyle.borderPrimary,
            ]}>
            <View style={{width: '20%'}}>
              <Image source={AirtelLogo} style={{width: 40, height: 40}} />
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexContainer,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlMd,
                ]}>
                Airtel Payment Bank
              </Text>
              {isBankSelected('airtel') && (
                <FEIcon
                  name="check-circle-fill"
                  size={16}
                  style={[Margins.mrMd]}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBankSelectOption('sbi')}>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              BorderStyle.borderLightGreyFull,
              BorderStyle.borderRadiusMedium,
              Paddings.paddingSm,
              Margins.mtLg,
              isBankSelected('sbi') && BorderStyle.borderPrimary,
            ]}>
            <View style={{width: '20%'}}>
              <Image source={SbiLogo} style={{width: 40, height: 40}} />
            </View>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                BaseStyle.justifySpaceBetween,
                BaseStyle.flexContainer,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlMd,
                ]}>
                SBI
              </Text>
              {isBankSelected('sbi') && (
                <FEIcon
                  name="check-circle-fill"
                  size={16}
                  style={[Margins.mrMd]}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    one: FirstRoute,
    two: SecondRoute,
    three: ThirdRoute,
  });
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
  const onSubmit = (data: any) => {
    console.log('data', data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(UserScreens.paymentSuccess.routeName, {
        status: isPay,
      });
    }, 1500);
  };

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
            Make Payment
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
              9874523154
            </Text>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.sm,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                Airtel Postpaid
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            Margins.mtMd,
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            Background.white,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingMd,
          ]}>
          <View style={[BaseStyle.flexRow]}>
            <Image source={WalletIcon} style={[{width: 30, height: 30}]} />
            <View style={[Margins.mlMd]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.md,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                ]}>
                YaaRecharge Wallet
              </Text>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtSm,
                ]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.smm,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mrSm,
                    Margins.mlXSm,
                  ]}>
                  Balance
                </Text>
                <FontAIcon
                  name="rupee"
                  style={[
                    {color: theme.colors[ColorLabels.PRIMARY]},
                    Margins.mtXsm,
                  ]}
                  size={12}
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: 13,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mlXSm,
                  ]}>
                  490.20
                </Text>
              </View>
            </View>
          </View>
          <Checkbox
            checked={isChecked}
            onToggle={handleToggle}
            color={theme.colors[ColorLabels.PRIMARY]}
            size={40}
            uncheckedColor="#A9A9A9"
          />
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifyCenter,
            Margins.mtMd,
          ]}>
          <Checkbox
            checked={isPay}
            onToggle={handlePay}
            color={theme.colors[ColorLabels.PRIMARY]}
            size={40}
            uncheckedColor="#A9A9A9"
          />
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.smm,
                fontFamily: FontFamily.INTER_BOLD,
              },
            ]}>
            Check for payment success
          </Text>
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
      <View style={[BaseStyle.justifyEnd]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderTopPrimaryFullWidth,
            {height: 70, elevation: 20},
            Paddings.paddingHorizontalMedium,
            Background.white,
          ]}>
          <View>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Total Amount
            </Text>
            <View
              style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtSm]}>
              <FontAIcon
                name="rupee"
                style={[
                  {color: theme.colors[ColorLabels.BLACK]},
                  Margins.mtXsm,
                ]}
                size={15}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 16,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlXSm,
                ]}>
                120.20
              </Text>
            </View>
          </View>
          <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
            <TouchableOpacity
              onPress={onSubmit}
              style={[
                {
                  elevation: 1,
                  backgroundColor: theme.colors[ColorLabels.PRIMARY],
                },
                BaseStyle.justifyCenter,
                Paddings.paddingMd,
                BorderStyle.borderRadiusMedium,
              ]}>
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
                  Pay Now
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  textInput1: {
    minWidth: '48%',
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
    width: '50%',
  },
});
