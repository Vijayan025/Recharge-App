import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Controller, useForm} from 'react-hook-form';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {ScrollView} from 'react-native';
import FastagMyRechargeCard from './FastagMyRechargeCard';
import SunDirectLogo from '../../../assets/images/airtelPayment.jpg';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BorderStyle} from '../../styles/Border';
import {UserScreens} from '../../common/routes/user/user.screens';
import {DotIndicator, UIActivityIndicator} from 'react-native-indicators';

const FastagDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({});
  const type = route?.params?.type;
  console.log('type', type);
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
    const datas = data?.vehicleNumber;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(UserScreens.fastagTopup.routeName, {
        VehicleId: datas,
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
            Enter Vehicle Details
          </Text>
        </View>
      </View>
      {onLoading && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBackground} />
          <UIActivityIndicator
            size={35}
            color={theme.colors[ColorLabels.PRIMARY]}
          />
        </View>
      )}
      <View style={[Paddings.paddingHorizontalMedium]}>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: 14,
              fontFamily: FontFamily.INTER_BOLD,
            },
            Margins.mtMLg,
          ]}>
          {type}
        </Text>
        <View style={[Margins.mtMd]}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Please enter Vehicle Registration Number',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white, {fontSize: 14}]}
                textColor={ColorLabels.BLACK}
                placeholder={'Vehicle Registration Number'}
                placeholderTextColor={ColorLabels.GREY}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderWidth: 1}}
                value={value}
                onChangeText={text => {
                  onChange(text);
                }}
                keyboardType="default"
                autoCapitalize="characters"
                returnKeyType="done"
                contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                maxLength={10}
                label="Vehicle Registration Number"
              />
            )}
            name="vehicleNumber"
          />
          {errors.vehicleNumber && (
            <Text
              style={{
                color: theme.colors[ColorLabels.ERROR_ORANGE],
                fontSize: fontSizes.sm,
                fontFamily: FontFamily.INTER_MEDIUM,
              }}>
              {errors.vehicleNumber.message}
            </Text>
          )}
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
            Paddings.paddingHorizontalMedium,
          ]}>
          My Vehicles
        </Text>
        <View style={{maxHeight: 300}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FastagMyRechargeCard
              vehicleNo={'TN34AU9219'}
              bankName="Airtel Payments Bank FASTag"
              image={SunDirectLogo}
              onPress={() => {
                bottomSheetModalRef.current.present();
              }}
              onClick={() => {
                setOnLoading(true);
                setTimeout(() => {
                  navigation.navigate(UserScreens.fastagTopup.routeName, {
                    VehicleId: 'TN34AU9219',
                  });
                  setOnLoading(false);
                }, 1500);
              }}
            />
          </ScrollView>
        </View>
      </View>
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
                Next
              </Text>
            )}
          </TouchableOpacity>
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
              Remove Account
            </Text>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: fontSizes.smm,
                    fontFamily: FontFamily.INTER_REGULAR,
                    lineHeight: 20,
                  },
                  Margins.mtSm,
                ]}>
                Are you sure you want to remove this from your account? You can
                always add it back by doing a recharge.
              </Text>
              <View style={[styles.btnsub1, Margins.mtLg]}>
                <TouchableOpacity
                  style={[
                    {
                      elevation: 5,
                      backgroundColor: theme.colors[ColorLabels.PRIMARY],
                    },
                    BaseStyle.justifyCenter,
                    Paddings.paddingSm,
                    BorderStyle.borderRadiusMedium,
                  ]}
                  onPress={() => {
                    bottomSheetModalRef.current?.close();
                  }}>
                  <Text
                    style={{
                      color: ColorLabels.WHITE,
                      fontSize: fontSizes.smd,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.btnsub1, Margins.mtLg]}>
                <TouchableOpacity
                  style={[
                    {
                      elevation: 5,
                      backgroundColor: theme.colors[ColorLabels.WHITE],
                    },
                    BaseStyle.justifyCenter,
                    Paddings.paddingSm,
                    BorderStyle.borderRadiusMedium,
                    BorderStyle.borderPrimary,
                  ]}
                  onPress={() => {
                    bottomSheetModalRef.current?.close();
                  }}>
                  <Text
                    style={{
                      color: theme.colors[ColorLabels.PRIMARY],
                      fontSize: fontSizes.smd,
                      fontFamily: FontFamily.INTER_BOLD,
                      textAlign: 'center',
                    }}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default FastagDetails;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  btnsub1: {
    width: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  loadingBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
