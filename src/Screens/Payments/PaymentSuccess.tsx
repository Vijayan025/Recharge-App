import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {Margins} from '../../styles/Margins';
import {FontFamily} from '../../types/Fonts';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {BorderStyle} from '../../styles/Border';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {UserScreens} from '../../common/routes/user/user.screens';

const PaymentSuccess = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const status = route?.params?.status;
  console.log('route', route);
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
            Payment Status
          </Text>
        </View>
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            Margins.mtXl,
            {
              borderColor: theme.colors[ColorLabels.PRIMARY],
              borderWidth: 0.8,
              elevation: 4,
            },
            BorderStyle.borderRadiusMedium,
            Background.white,
          ]}>
          {status === true ? (
            <View
              style={[
                BaseStyle.alignCenter,
                Paddings.paddingLg,
                Margins.mtXMd,
              ]}>
              <AntIcon
                name="checkcircle"
                color={theme.colors[ColorLabels.PRIMARY]}
                size={60}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.PRIMARY],
                    fontSize: fontSizes.smd,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mtXMd,
                ]}>
                Payment Success
              </Text>
            </View>
          ) : (
            <View
              style={[
                BaseStyle.alignCenter,
                Paddings.paddingLg,
                Margins.mtXMd,
              ]}>
              <AntIcon
                name="closecircle"
                color={theme.colors[ColorLabels.RED]}
                size={60}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.RED],
                    fontSize: fontSizes.smd,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mtXMd,
                ]}>
                Payment Failed
              </Text>
            </View>
          )}
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.PRIMARY],
                borderBottomWidth: 0.5,
              },
              Margins.mtLg,
            ]}
          />
          <View style={[BaseStyle.alignCenter, Margins.mtLg]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_BOLD,
                },
              ]}>
              Paid Amount
            </Text>
            <View
              style={[BaseStyle.flexRow, BaseStyle.alignCenter, Margins.mtSm]}>
              <FontAIcon
                name="rupee"
                style={[
                  {color: theme.colors[ColorLabels.BLACK]},
                  Margins.mtXsm,
                ]}
                size={16}
              />
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 18,
                    fontFamily: FontFamily.INTER_MEDIUM,
                  },
                  Margins.mlXSm,
                ]}>
                490.20
              </Text>
            </View>
          </View>
          <View style={[Paddings.paddingHorizontalExtraMedium, Margins.mbXl]}>
            <View style={[Margins.mtXl]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                Date & Time
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                29 Apr 2024, 06:00 PM
              </Text>
            </View>
            <View style={[Margins.mtLg]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                Payment Method
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                UPI
              </Text>
            </View>
            <View style={[Margins.mtLg]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.LIGHT_BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_REGULAR,
                  },
                ]}>
                Transaction Id
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                ]}>
                7984651545465465456
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
        <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('history')}
            style={[
              {
                elevation: 1,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingMd,
            ]}>
            <Text
              style={{
                color: ColorLabels.WHITE,
                fontSize: fontSizes.smd,
                fontFamily: FontFamily.INTER_BOLD,
                textAlign: 'center',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  btnsub1: {
    width: '100%',
  },
});
