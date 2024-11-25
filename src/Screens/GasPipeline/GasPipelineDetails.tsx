import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BorderStyle} from '../../styles/Border';
import {Controller, useForm} from 'react-hook-form';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {alphabetsOnly} from '../../common/utils';
import {TouchableOpacity} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import {UserScreens} from '../../common/routes/user/user.screens';

const GasPipelineDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const name = route?.params?.type;
  console.log('routes', route);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({});
  const onSubmit = (data: any) => {
    console.log('data', data);
    const datas = data?.customerNo;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate(UserScreens.gasPipelineBillReview.routeName, {
        type: name,
        number: datas,
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
            Enter Gas Pipeline Details
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalSmall]}>
        <Text
          style={[
            {
              color: theme.colors[ColorLabels.BLACK],
              fontSize: fontSizes.sm,
              fontFamily: FontFamily.INTER_MEDIUM,
            },
            BaseStyle.textCenter,
            Background.lightWhite,
            Margins.mtMLg,
            Paddings.paddingSm,
            BorderStyle.borderRadiusMedium,
          ]}>
          {name}
        </Text>
      </View>
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
        <View style={[Margins.mtMd]}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Please enter Customer Number',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white, {fontSize: 14}]}
                textColor={ColorLabels.BLACK}
                placeholder={'Customer Number'}
                placeholderTextColor={ColorLabels.GREY}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderWidth: 1}}
                value={value}
                onChangeText={text => {
                  onChange(text);
                }}
                keyboardType="numeric"
                returnKeyType="done"
                contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                label="Customer Number"
              />
            )}
            name="customerNo"
          />
          {errors.customerNo && (
            <Text
              style={{
                color: theme.colors[ColorLabels.ERROR_ORANGE],
                fontSize: fontSizes.sm,
                fontFamily: FontFamily.INTER_MEDIUM,
              }}>
              {errors.customerNo.message}
            </Text>
          )}
        </View>
        <View style={[Margins.mtXMd]}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInputPaper
                style={[styles.textInput, Background.white]}
                textColor={ColorLabels.BLACK}
                placeholder={'Nickname'}
                placeholderTextColor={ColorLabels.GREY}
                outlineColor={theme.colors[ColorLabels.GREY]}
                outlineStyle={{borderWidth: 1}}
                value={value}
                onChangeText={text => {
                  const alphabetsOnlyText = alphabetsOnly(text);
                  onChange(alphabetsOnlyText);
                }}
                keyboardType="default"
                returnKeyType="done"
                contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                mode="outlined"
                label="Nickname (Optional)"
              />
            )}
            name="nickName"
          />
          {errors.nickName && (
            <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
              {errors.nickName.message}
            </Text>
          )}
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
    </SafeAreaView>
  );
};

export default GasPipelineDetails;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  btnsub1: {
    width: '100%',
  },
});
