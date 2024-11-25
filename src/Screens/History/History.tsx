import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {Paddings} from '../../styles/Padding';
import TnebLogo from '../../../assets/images/tangedcoLogo.png';
import JioLogo from '../../../assets/images/jioIcon.png';
import AirtelLogo from '../../../assets/images/airtelIcon.png';
import SimIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FontAIcon from 'react-native-vector-icons/FontAwesome';
import FeaIcon from 'react-native-vector-icons/Feather';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MateIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntIcon from 'react-native-vector-icons/Entypo';
import {BorderStyle} from '../../styles/Border';
import {Layout} from '../../styles/Layout';
import {useNavigation} from '@react-navigation/native';

const History = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[Background.white, BaseStyle.flexContainer]}>
      <View style={[{elevation: 10, height: 55}, Background.white]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            {height: 55},
            Background.white,
            BaseStyle.justifySpaceBetween,
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
            ]}>
            History
          </Text>
          <AntIcon
            name="arrowleft"
            color={theme.colors[ColorLabels.WHITE]}
            size={20}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[Paddings.paddingHorizontalMedium]}>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '23%'}, BaseStyle.alignCenter]}>
              <Image
                source={TnebLogo}
                resizeMode="contain"
                style={{width: 55, height: 55}}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Tamil Nadu Electricity
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Consumer Number : 2901
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                April 25, 2024 at 6:10 PM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.CHART_GREEN],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_GREEN],
                    width: '40%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Success
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              800
            </Text>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '25%'}, BaseStyle.alignCenter]}>
              <Image
                source={JioLogo}
                resizeMode="contain"
                style={{width: 45, height: 45}}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Jio Postpaid
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                9874587256
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                April 28, 2024 at 6:00 PM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.CHART_GREEN],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_GREEN],
                    width: '45%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Success
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              399
            </Text>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '25%'}, BaseStyle.alignCenter]}>
              <Image source={AirtelLogo} style={{width: 60, height: 60}} />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Airtel Prepaid
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                9856872563
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                May 01, 2024 at 8:00 AM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.CHART_GREEN],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_GREEN],
                    width: '45%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Success
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              299
            </Text>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '23%'}, BaseStyle.alignCenter]}>
              <Image
                source={TnebLogo}
                resizeMode="contain"
                style={{width: 55, height: 55}}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Tamil Nadu Electricity
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Consumer Number : 2901
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                April 25, 2024 at 6:10 PM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.RED],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_RED],
                    width: '40%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Failed
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              800
            </Text>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '25%'}, BaseStyle.alignCenter]}>
              <Image
                source={JioLogo}
                resizeMode="contain"
                style={{width: 45, height: 45}}
              />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Jio Postpaid
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                9874587256
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                April 28, 2024 at 6:00 PM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.CHART_GREEN],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_GREEN],
                    width: '45%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Success
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              399
            </Text>
          </View>
        </View>
        <View
          style={[
            BaseStyle.flexRow,
            BaseStyle.alignCenter,
            BaseStyle.justifySpaceBetween,
            BorderStyle.borderLightGreyFull,
            BorderStyle.borderRadiusMedium,
            Paddings.paddingSm,
            Margins.mtLg,
          ]}>
          <View style={[BaseStyle.flexRow, BaseStyle.alignCenter]}>
            <View style={[{width: '25%'}, BaseStyle.alignCenter]}>
              <Image source={AirtelLogo} style={{width: 60, height: 60}} />
            </View>
            <View>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                Airtel Prepaid
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mlSm,
                ]}>
                9856872563
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_LIGHT,
                  },
                  Margins.mlSm,
                  Margins.mtXsm,
                  Margins.mbSm,
                ]}>
                May 01, 2024 at 8:00 AM
              </Text>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.RED],
                    fontSize: 12,
                    fontFamily: FontFamily.INTER_MEDIUM,
                    backgroundColor: theme.colors[ColorLabels.LIGHT_RED],
                    width: '45%',
                  },
                  Margins.mlSm,
                  BaseStyle.textCenter,
                  BorderStyle.borderRadiusSmall,
                ]}>
                Failed
              </Text>
            </View>
          </View>
          <View
            style={[
              BaseStyle.flexRow,
              BaseStyle.alignCenter,
              Margins.mlSLg,
              Layout.flex1,
              BaseStyle.justifyEnd,
            ]}>
            <FontAIcon
              name="rupee"
              style={[{color: theme.colors[ColorLabels.BLACK]}, Margins.mtXsm]}
              size={18}
            />
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 20,
                  fontFamily: FontFamily.INTER_SEMIBOLD,
                },
                Margins.mlXSm,
              ]}>
              299
            </Text>
          </View>
        </View>
        <View style={[Margins.mbLg]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({});
