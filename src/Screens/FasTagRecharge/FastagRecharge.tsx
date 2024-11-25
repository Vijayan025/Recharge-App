import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import {ColorLabels, theme} from '../../common/theme';
import {fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AirtelTv from '../../../assets/images/airtelPayment.jpg';
import {UserScreens} from '../../common/routes/user/user.screens';
import {UIActivityIndicator} from 'react-native-indicators';

const FastagRecharge = () => {
  const [searchText, setSearchText]: any = useState();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
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
            FASTag Recharge
          </Text>
        </View>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <UIActivityIndicator
            size={35}
            color={theme.colors[ColorLabels.PRIMARY]}
          />
        </View>
      ) : (
        <View>
          <View>
            <Searchbar
              style={{
                backgroundColor: 'white',
                marginHorizontal: 20,
                borderRadius: 6,
                marginTop: 25,
                zIndex: 1,
                elevation: 30,
                height: 40,
              }}
              inputStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                fontSize: 15,
                fontFamily: FontFamily.INTER_LIGHT,
              }}
              placeholder={'Search'}
              onChangeText={(text: any) => {
                console.log('search text', text);
                setSearchText(text);
              }}
              value={searchText}
              icon={() => (
                <IonIcon
                  name="search"
                  color={theme.colors[ColorLabels.BLACK]}
                  size={20}
                />
              )}
            />
          </View>
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
              All Providers
            </Text>
            <Pressable
              onPress={() =>
                navigation.navigate(UserScreens.fastagDetails.routeName, {
                  type: 'Airtel Payments Bank FASTag',
                })
              }>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtLg,
                ]}>
                <Image
                  source={AirtelTv}
                  style={[
                    {
                      width: 55,
                      height: 55,
                      borderRadius: 50,
                    },
                  ]}
                  resizeMode="cover"
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_REGULAR,
                    },
                    Margins.mlLg,
                  ]}>
                  Airtel Payments Bank FASTag
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FastagRecharge;

const styles = StyleSheet.create({
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
});
