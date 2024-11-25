import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {Margins} from '../../styles/Margins';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {Image} from 'react-native';
import MyContactImage from '../../../assets/images/airtelIcon.png';
import {BorderStyle} from '../../styles/Border';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import {UserScreens} from '../../common/routes/user/user.screens';
import {DotIndicator} from 'react-native-indicators';

const PostPaidBill = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const number = route?.params?.number;
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
            PostPaid Bill
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
              {number}
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
            <Text style={styles.txt}>Bill Number</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>BM2228399789898</Text>
          </View>
          <View style={[styles.substyle]}>
            <Text style={styles.txt}>Bill Date</Text>
            <Text style={styles.txt1}>:</Text>
            <Text style={styles.txt4}>27-Apr-2024</Text>
          </View>
        </View>
        <View
          style={[
            Background.white,
            Paddings.paddingSm,
            Margins.mtLg,
            BorderStyle.borderRadiusMedium,
            BorderStyle.borderPrimary,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={16}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_BOLD,
                },
                Margins.mlXSm,
              ]}>
              400.20
            </Text>
          </View>
          <View
            style={[
              {
                borderBottomColor: theme.colors[ColorLabels.MEDIUM_GREY],
                borderBottomWidth: 0.5,
              },
              Margins.mtMd,
              Margins.mbMd,
            ]}
          />
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.RED],
                fontSize: 12,
                fontFamily: FontFamily.INTER_MEDIUM,
              },
            ]}>
            Due Date: 27-04-2024
          </Text>
        </View>
      </View>
      <View style={[BaseStyle.flexContainer, BaseStyle.justifyEnd]}>
        <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
          <TouchableOpacity
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                navigation.navigate(UserScreens.paymentScreen.routeName);
              }, 1500);
            }}
            style={[
              {
                elevation: 8,
                backgroundColor: theme.colors[ColorLabels.PRIMARY],
              },
              BaseStyle.justifyCenter,
              Paddings.paddingMd,
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
                PROCEED TO PAY
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPaidBill;

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
  btnsub1: {
    width: '100%',
  },
});
