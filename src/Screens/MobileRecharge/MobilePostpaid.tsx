import {
  Image,
  PermissionsAndroid,
  Pressable,
  SafeAreaView,
  ScrollView,
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
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Margins} from '../../styles/Margins';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import ContactImage from '../../../assets/images/contactProfile.png';
import MyContactImage from '../../../assets/images/userIcon.png';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import Contacts from 'react-native-contacts';
import {FlatList} from 'react-native';
import {ActivityIndicator, Searchbar, TextInput} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {UserScreens} from '../../common/routes/user/user.screens';
import NoDataIcon from '../../../assets/images/noDataFound.jpg';
import {UIActivityIndicator} from 'react-native-indicators';

const MobilePostpaid = () => {
  const navigation = useNavigation();
  const [contactPermission, setContactPermission]: any = useState(null);
  const [contacts, setContacts]: any = useState([]);
  const [searchText, setSearchText]: any = useState();
  const [loading, setLoading] = useState(false);
  const [onLoading, setOnLoading] = useState(false);

  useEffect(() => {
    checkContactPermission();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const checkContactPermission = async () => {
    try {
      const permission = await check(PERMISSIONS.ANDROID.READ_CONTACTS);
      if (permission === RESULTS.GRANTED) {
        console.log('Permission already granted');
        setContactPermission(permission);
      } else {
        requestContactPermission();
      }
    } catch (error) {
      console.error('Error checking permission:', error);
    }
  };

  const requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted');
        setContactPermission(RESULTS.GRANTED);
      } else {
        console.log('Permission denied');
        setContactPermission(RESULTS.DENIED);
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const openContactPicker = async () => {
    console.log('recharge clicked');

    try {
      if (contactPermission === RESULTS.GRANTED) {
        fetchContacts();
      } else {
        console.log('Permission not granted to access contacts.');
        requestContactPermission();
      }
    } catch (error) {
      console.error('Error opening contact picker:', error);
    }
  };
  const fetchContacts = async () => {
    try {
      const fetchedContacts = await Contacts.getAll();
      setContacts(fetchedContacts);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  useEffect(() => {
    openContactPicker();
  }, [contactPermission === RESULTS.GRANTED]);

  const data =
    searchText && searchText.trim() !== ''
      ? contacts &&
        contacts.filter(
          (item: {item: {displayName: any}; displayName: string}) =>
            (item?.displayName &&
              item.displayName
                .toLowerCase()
                .includes(searchText.toLowerCase())) ||
            (item?.phoneNumbers[0]?.number &&
              item?.phoneNumbers[0]?.number
                .replace(/[^0-9]/g, '')
                .toLowerCase()
                .includes(searchText.toLowerCase())),
        )
      : contacts;

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
            Mobile Postpaid
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
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
        <TextInputPaper
          style={[styles.textInput, Background.white, {fontSize: 16}]}
          textColor={ColorLabels.BLACK}
          mode="outlined"
          placeholder={'Enter Number or Name'}
          onChangeText={(text: any) => {
            console.log('search text', text);
            setSearchText(text);
          }}
          value={searchText}
          outlineColor={theme.colors[ColorLabels.GREY]}
          outlineStyle={{borderWidth: 1, borderRadius: 10}}
          maxLength={10}
          left={
            <TextInput.Icon
              icon={() => <IonIcon name="search" color="black" size={20} />}
            />
          }
        />
      </View>
      <View style={[Paddings.paddingHorizontalMedium]}>
        <View>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mtLg,
            ]}>
            My Number
          </Text>
          <Pressable
            onPress={() => {
              setOnLoading(true);
              setTimeout(() => {
                navigation.navigate(UserScreens.postpaidOperator.routeName, {
                  number: '9209234908',
                  name: 'Vijay',
                });
                setOnLoading(false);
              }, 1500);
            }}>
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
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  Vijay
                </Text>
                <Text
                  style={[
                    {
                      color: theme.colors[ColorLabels.GREY],
                      fontSize: fontSizes.md,
                      fontFamily: FontFamily.INTER_MEDIUM,
                    },
                  ]}>
                  9209234908
                </Text>
              </View>
            </View>
          </Pressable>
          <Text
            style={[
              {
                color: theme.colors[ColorLabels.BLACK],
                fontSize: fontSizes.md,
                fontFamily: FontFamily.INTER_BOLD,
              },
              Margins.mtMLg,
              Margins.mbMd,
            ]}>
            My Contacts
          </Text>
          {loading ? (
            <ActivityIndicator
              color={theme.colors[ColorLabels.PRIMARY]}
              size={25}
              style={[Margins.mtMd]}
            />
          ) : (
            <FlatList
              data={
                data
                  ? data.sort(
                      (a: {displayName: string}, b: {displayName: any}) =>
                        a?.displayName?.localeCompare(b?.displayName),
                    )
                  : contacts.sort(
                      (a: {displayName: string}, b: {displayName: any}) =>
                        a?.displayName?.localeCompare(b?.displayName),
                    )
              }
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View key={index}>
                  <Pressable
                    disabled={
                      item?.phoneNumbers[0]?.number
                        .replace(/^\+91/, '')
                        .replace(/[^\d+]/g, '')?.length === 10
                        ? false
                        : true
                    }
                    onPress={() => {
                      setOnLoading(true);
                      setTimeout(() => {
                        navigation.navigate(
                          UserScreens.postpaidOperator.routeName,
                          {
                            number: item?.phoneNumbers[0]?.number
                              .replace(/^\+91/, '')
                              .replace(/[^\d+]/g, ''),
                            name: item?.displayName,
                          },
                        );
                        setOnLoading(false);
                      }, 1500);
                    }}>
                    <View
                      style={[
                        BaseStyle.flexRow,
                        BaseStyle.alignCenter,
                        Background.white,
                        Margins.mtLg,
                      ]}>
                      <Image
                        source={ContactImage}
                        style={{width: 50, height: 50}}
                      />
                      <View style={[Margins.mlSm]}>
                        <Text
                          style={[
                            {
                              color: theme.colors[ColorLabels.BLACK],
                              fontSize: fontSizes.md,
                              fontFamily: FontFamily.INTER_MEDIUM,
                            },
                          ]}>
                          {item?.displayName}
                        </Text>
                        <Text
                          style={[
                            {
                              color: theme.colors[ColorLabels.GREY],
                              fontSize: fontSizes.md,
                              fontFamily: FontFamily.INTER_MEDIUM,
                            },
                          ]}>
                          {item?.phoneNumbers[0]?.number
                            .replace(/^\+91/, '')
                            .replace(/[^\d+]/g, '')}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </View>
              )}
            />
          )}

          {!loading &&
            searchText &&
            /^\d+$/.test(searchText) &&
            !/^[0-5]/.test(searchText) && (
              <Pressable
                disabled={searchText?.length === 10 ? false : true}
                onPress={() => {
                  setOnLoading(true);
                  setTimeout(() => {
                    navigation.navigate(
                      UserScreens.postpaidOperator.routeName,
                      {
                        number: searchText,
                        name: 'Unknown Number',
                      },
                    );
                    setOnLoading(false);
                  }, 1500);
                }}>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    Background.white,
                    Margins.mtLg,
                  ]}>
                  <Image
                    source={ContactImage}
                    style={{width: 50, height: 50}}
                  />
                  <View style={[Margins.mlSm]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontSize: fontSizes.md,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                      ]}>
                      Unknown
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.GREY],
                          fontSize: fontSizes.md,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                      ]}>
                      {searchText}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}

          {!loading &&
            searchText &&
            /^\d+$/.test(searchText) &&
            /^[0-5]/.test(searchText) &&
            searchText?.length !== 11 &&
            data?.length === 0 && (
              <View>
                <View
                  style={[
                    BaseStyle.flexRow,
                    BaseStyle.alignCenter,
                    Background.white,
                    Margins.mtLg,
                  ]}>
                  <Image
                    source={ContactImage}
                    style={{width: 50, height: 50}}
                  />
                  <View style={[Margins.mlSm]}>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.BLACK],
                          fontSize: fontSizes.md,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                      ]}>
                      Unknown
                    </Text>
                    <Text
                      style={[
                        {
                          color: theme.colors[ColorLabels.GREY],
                          fontSize: fontSizes.md,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                      ]}>
                      {searchText}
                    </Text>
                    <Text
                      style={[
                        {
                          color: 'red',
                          fontSize: fontSizes.sm,
                          fontFamily: FontFamily.INTER_MEDIUM,
                        },
                        Margins.mlXSm,
                      ]}>
                      Invalid contact
                    </Text>
                  </View>
                </View>
              </View>
            )}

          {!loading &&
            searchText &&
            !/^\d+$/.test(searchText) &&
            data &&
            data?.length === 0 && (
              // <Text
              //   style={[
              //     {
              //       color: theme.colors[ColorLabels.BLACK],
              //       fontSize: fontSizes.md,
              //       fontFamily: FontFamily.INTER_MEDIUM,
              //     },
              //     Margins.mtLg,
              //     BaseStyle.textCenter,
              //   ]}>
              //   No contacts found
              // </Text>
              <View>
                <Image
                  source={NoDataIcon}
                  resizeMode="contain"
                  style={{width: '100%', height: 300}}
                />
              </View>
            )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MobilePostpaid;

const styles = StyleSheet.create({
  textInput: {
    minWidth: '100%',
    fontSize: 15,
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
