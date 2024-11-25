import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import TnebLogo from '../../../assets/images/airtelIcon.png';
import {BorderStyle} from '../../styles/Border';
import {UserScreens} from '../../common/routes/user/user.screens';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {TouchableOpacity} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import {useForm} from 'react-hook-form';
import {Layout} from '../../styles/Layout';

const BroadbandBillReview = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({});
  const name = route?.params?.type;
  const number = route?.params?.number;
  console.log('route', route);
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
  const onSubmit = (data: any) => {
    console.log('data', data);
    const datas = data?.consumerNo;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(UserScreens.paymentScreen.routeName);
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
            Broadband Bill Review
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            Paddings.paddingSm,
            BorderStyle.borderLightGreyFull,
            Margins.mtLg,
            BorderStyle.borderRadiusMedium,
            BaseStyle.justifySpaceBetween,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <Image
              source={TnebLogo}
              style={[
                {
                  width: 50,
                  height: 50,
                },
              ]}
            />
            <View style={[Margins.mlMd, {width: '70%'}]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                {name}
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                ]}>
                {number} - Nick Name
              </Text>
            </View>
          </View>
          <Text
            onPress={() =>
              navigation.navigate(UserScreens.broadBandProviders.routeName)
            }
            style={[
              {
                color: theme.colors[ColorLabels.WHITE],
                fontSize: 12,
                fontFamily: FontFamily.INTER_MEDIUM,
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 30,
              },
              Background.primary,
            ]}>
            Edit
          </Text>
        </View>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: 14,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Margins.mtLg,
          ]}>
          Bill Details
        </Text>
        <View
          style={[
            Margins.mtMd,
            BorderStyle.borderLightGreyFull,
            Paddings.paddingSm,
            BorderStyle.borderRadiusMedium,
            Background.lightWhite,
          ]}>
          <View style={[styles.substyle, Margins.mbMd]}>
            <Text style={styles.txt}>Customer Name</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>Ramesh</Text>
          </View>
          <View style={[styles.substyle, Margins.mbMd]}>
            <Text style={styles.txt}>Landline Number</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>{number}</Text>
          </View>
          <View style={[styles.substyle, Margins.mbMd]}>
            <Text style={styles.txt}>Bill Amount</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>₹ 205.00</Text>
          </View>
          <View style={[styles.substyle, Margins.mbMd]}>
            <Text style={styles.txt}>Bill Due Date</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>15 May 24</Text>
          </View>
          <View style={[BorderStyle.borderBottomSecondaryGreyFullWidth]} />
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.PRIMARY],
                fontSize: 12,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mtMd,
              BaseStyle.textRight,
            ]}
            onPress={() => {
              bottomSheetModalRef.current.present();
            }}>
            View Details
          </Text>
        </View>
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
              Margins.mbLg,
              Paddings.paddingHorizontalMedium,
            ]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: fontSizes.smd,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                Margins.mtSm,
                Margins.mbMd,
              ]}>
              Details
            </Text>
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtMd,
                Margins.mbMd,
                BorderStyle.borderLightGreyFull,
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Image
                source={TnebLogo}
                style={[
                  {
                    width: 45,
                    height: 45,
                  },
                ]}
              />
              <View style={[Margins.mlMd]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_REGULAR,
                    },
                  ]}>
                  {name}
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  {number} - Nick Name
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.sm,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                  Margins.mlSm,
                ]}>
                Bill Date :
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.sm,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  {' '}
                  25 April 24
                </Text>
              </Text>
            </View>
            <View style={[Margins.mtSm]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.sm,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                  Margins.mlSm,
                ]}>
                Bill Amount :
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: fontSizes.sm,
                      fontFamily: FontFamily.INTER_BOLD,
                    },
                  ]}>
                  {' '}
                  ₹ 205.00
                </Text>
              </Text>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
        <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
          <TouchableOpacity
            style={[
              {
                elevation: 8,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingLg,
            ]}
            onPress={handleSubmit(onSubmit)}>
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

export default BroadbandBillReview;

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
    color: theme.colors[ColorLabels.BLACK],
    fontSize: fontSizes.smm,
    fontFamily: FontFamily.INTER_BOLD,
    marginTop: 2,
  },
  btnsub1: {
    width: '100%',
  },
});
