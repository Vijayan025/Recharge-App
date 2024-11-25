import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import TnebLogo from '../../../assets/images/chennaiWaterLogo.jpg';
import {UserScreens} from '../../common/routes/user/user.screens';
import {BorderStyle} from '../../styles/Border';
import MatcIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Position} from '../../styles/Position';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Layout} from '../../styles/Layout';
import {UIActivityIndicator} from 'react-native-indicators';

const WaterProviders = () => {
  const [searchText, setSearchText]: any = useState();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
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
            Water
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
      {loading ? (
        <View style={styles.loadingContainer}>
          <UIActivityIndicator
            size={35}
            color={theme.colors[ColorLabels.PRIMARY]}
          />
        </View>
      ) : (
        <View>
          <View style={[Margins.mbMLg]}>
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
            <View
              style={[
                Background.white,
                {elevation: 5},
                Paddings.paddingSm,
                BorderStyle.borderRadiusMedium,
              ]}>
              <Text
                style={[
                  {
                    color: theme.colors[ColorLabels.BLACK],
                    fontSize: 14,
                    fontFamily: FontFamily.INTER_BOLD,
                  },
                  Margins.mtMd,
                ]}>
                My Recent Bills
              </Text>
              <Pressable
                onPress={() => {
                  setOnLoading(true);
                  setTimeout(() => {
                    navigation.navigate(UserScreens.waterBillReview.routeName, {
                      type: 'Chennai Metropolitan Water Supply And Sewerage Board',
                      number: '021458745123',
                    });
                    setOnLoading(false);
                  }, 1500);
                }}>
                <View
                  style={[
                    BorderStyle.borderLightGreyFull,
                    BorderStyle.borderRadiusMedium,
                    Margins.mtXMd,
                  ]}>
                  <View
                    style={[
                      BaseStyle.flexRow,
                      BaseStyle.alignCenter,
                      BaseStyle.justifySpaceBetween,
                    ]}>
                    <View
                      style={[
                        BaseStyle.flexRow,
                        BaseStyle.alignCenter,
                        Paddings.paddingSm,
                      ]}>
                      <Image
                        source={TnebLogo}
                        style={[
                          {
                            width: 45,
                            height: 45,
                          },
                        ]}
                        resizeMode="contain"
                      />
                      <View style={[Margins.mlMd, {width: '75%'}]}>
                        <Text
                          style={[
                            {
                              color: theme.colors[ColorLabels.BLACK],
                              fontSize: 13,
                              fontFamily: FontFamily.INTER_REGULAR,
                            },
                          ]}>
                          Chennai Metropolitan Water Supply And Sewerage Board
                        </Text>
                        <Text
                          style={[
                            {
                              color: theme.colors[ColorLabels.BLACK],
                              fontSize: 12,
                              fontFamily: FontFamily.INTER_MEDIUM,
                            },
                            Margins.mtXsm,
                          ]}>
                          021458745123 - Nick Name
                        </Text>
                      </View>
                    </View>
                    <MatcIcon
                      name="dots-vertical"
                      color={theme.colors[ColorLabels.BLACK]}
                      size={16}
                      style={[Margins.mrMd]}
                      onPress={() => {
                        bottomSheetModalRef.current.present();
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
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
                navigation.navigate(UserScreens.waterDetails.routeName, {
                  type: 'Chennai Metropolitan Water Supply And Sewerage Board',
                })
              }>
              <View
                style={[
                  BaseStyle.flexRow,
                  BaseStyle.alignCenter,
                  Margins.mtLg,
                ]}>
                <Image
                  source={TnebLogo}
                  style={[
                    {
                      width: 50,
                      height: 50,
                    },
                  ]}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 14,
                      fontFamily: FontFamily.INTER_REGULAR,
                    },
                    Margins.mlMd,
                    Layout.flex1,
                  ]}>
                  Chennai Metropolitan Water Supply And Sewerage Board
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
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
            <View
              style={[
                BaseStyle.flexRow,
                BaseStyle.alignCenter,
                Margins.mtMd,
                Margins.mbMd,
              ]}>
              <Image
                source={TnebLogo}
                style={[
                  {
                    width: 45,
                    height: 45,
                  },
                ]}
                resizeMode="contain"
              />
              <View style={[Margins.mlMd, Layout.flex1]}>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 13,
                      fontFamily: FontFamily.INTER_REGULAR,
                    },
                  ]}>
                  Chennai Metropolitan Water Supply And Sewerage Board
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.BLACK],
                      fontSize: 12,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                    Margins.mtXsm,
                  ]}>
                  021458745123 - Nick Name
                </Text>
              </View>
            </View>
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
                always add it back by doing a bill pay.
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

export default WaterProviders;

const styles = StyleSheet.create({
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
