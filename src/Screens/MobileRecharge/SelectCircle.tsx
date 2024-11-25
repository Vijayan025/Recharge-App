import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
import {UserScreens} from '../../common/routes/user/user.screens';
import {BorderStyle} from '../../styles/Border';

const SelectCircle = () => {
  const [searchText, setSearchText]: any = useState();
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
            Select Circle
          </Text>
        </View>
      </View>
      <View>
        <Searchbar
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            borderRadius: 6,
            marginTop: 25,
            height: 50,
          }}
          inputStyle={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            fontSize: 15,
            fontFamily: FontFamily.INTER_LIGHT,
          }}
          placeholder={'Search your circle'}
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
      <View style={[Paddings.paddingHorizontalMedium, Margins.mtLg]}>
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.rechargePlan.routeName)
          }>
          <View style={[Margins.mtLg, Margins.mlSm]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Andhra Pradesh
            </Text>
          </View>
        </Pressable>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtLg]}
        />
        <Pressable
          onPress={() =>
            navigation.navigate(UserScreens.rechargePlan.routeName)
          }>
          <View style={[Margins.mtLg, Margins.mlSm]}>
            <Text
              style={[
                {
                  color: theme.colors[ColorLabels.BLACK],
                  fontSize: 14,
                  fontFamily: FontFamily.INTER_MEDIUM,
                },
              ]}>
              Tamil Nadu
            </Text>
          </View>
        </Pressable>
        <View
          style={[BorderStyle.borderBottomSecondaryFullWidth, Margins.mtLg]}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectCircle;

const styles = StyleSheet.create({});
