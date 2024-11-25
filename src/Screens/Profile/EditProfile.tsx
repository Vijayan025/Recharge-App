import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Background} from '../../styles/Background';
import {BaseStyle} from '../../styles/Base';
import {Paddings} from '../../styles/Padding';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {ColorLabels, theme} from '../../common/theme';
import {useNavigation} from '@react-navigation/native';
import {FontsFamily, fontSizes} from '../../styles/fonts';
import {FontFamily} from '../../types/Fonts';
import {Margins} from '../../styles/Margins';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IonIcon from 'react-native-vector-icons/Ionicons';
import ProfileAvatar from '../../../assets/images/userIcon.png';
import ImagePickModal from '../Common/ImagePickerModal';
import {alphabetsOnly, numericNumOnly} from '../../common/utils';
import TextInputPaper from '../../common/ui/TextInputPaper';
import {Controller, useForm} from 'react-hook-form';
import config from '../../common/config';
import {BorderStyle} from '../../styles/Border';

const EditProfile = () => {
  const navigation = useNavigation();
  const [uploadUri, setUploadUri] = useState();
  const [show, setShow] = useState(false);
  const [imageBase64, setImageBase64]: any = React.useState<string | null>(
    null,
  );
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: 'Raj',
      lastName: 'Kumar',
      email: 'rajkumar87@gmail.com',
      contact: '9209349812',
    },
  });
  const processImage = async (data: any) => {
    const {compressedImageBase64: imageBase64, uri} = await data;
    setImageBase64(imageBase64 as string);
    setUploadUri(uri as string);
    setShow(false);
  };
  const onSubmit = () => {
    navigation.navigate('Profile');
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
            Update Personal Details
          </Text>
        </View>
      </View>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
        style={[BaseStyle.flexContainer, Paddings.paddingHorizontalMedium]}>
        <View style={[{alignItems: 'center'}, Margins.mtXl]}>
          <View style={{position: 'relative'}}>
            <Pressable
              style={[styles.imageBoxTouchable]}
              onPress={() => setShow(true)}>
              {uploadUri ? (
                <Image source={{uri: uploadUri}} style={styles.imageBox} />
              ) : (
                <Image source={ProfileAvatar} style={[styles.imageBox]} />
              )}
              <View style={styles.camera}>
                <IonIcon
                  name="camera"
                  size={22}
                  color={theme.colors[ColorLabels.WHITE]}
                />
              </View>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={[Margins.mtXl]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'First name is required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'First Name'}
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
                  label="First Name"
                />
              )}
              name="firstName"
            />
            {errors.firstName && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.firstName.message}
              </Text>
            )}
          </View>
        </View>
        <View>
          <View style={[Margins.mtLg]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Last name is required',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'Last Name'}
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
                  label="Last Name"
                />
              )}
              name="lastName"
            />
            {errors.lastName && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.lastName.message}
              </Text>
            )}
          </View>
        </View>
        <View>
          <View style={[Margins.mtLg]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
                pattern: {
                  value: config.emailRegex,
                  message: 'Invalid Email',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'Email'}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  value={value}
                  onChangeText={onChange}
                  outlineStyle={{borderWidth: 1}}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                  label="Email"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.email.message}
              </Text>
            )}
          </View>
        </View>
        <View>
          <View style={[Margins.mtLg]}>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Contact number is required',
                },
                pattern: {
                  value: /^[6-9][0-9]{9}$/,
                  message: 'Invalid Number',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputPaper
                  style={[styles.textInput, Background.white, {fontSize: 16}]}
                  textColor={ColorLabels.BLACK}
                  placeholder={'Mobile Number'}
                  placeholderTextColor={ColorLabels.GREY}
                  outlineColor={theme.colors[ColorLabels.GREY]}
                  outlineStyle={{borderWidth: 1}}
                  value={value}
                  onChangeText={text => {
                    const numericOnlyNum = numericNumOnly(text);
                    onChange(numericOnlyNum);
                  }}
                  keyboardType="numeric"
                  returnKeyType="done"
                  contentStyle={[FontsFamily.regular, {paddingHorizontal: 10}]}
                  maxLength={10}
                  label="Mobile Number"
                />
              )}
              name="contact"
            />
            {errors.contact && (
              <Text style={{color: theme.colors[ColorLabels.ERROR_ORANGE]}}>
                {errors.contact.message}
              </Text>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={[styles.btnsub1, BaseStyle.justifyEnd]}>
        <TouchableOpacity
          style={[
            {
              elevation: 8,
              backgroundColor: theme.colors[ColorLabels.PRIMARY],
            },
            BaseStyle.justifyCenter,
            Paddings.paddingMd,
          ]}
          onPress={handleSubmit(onSubmit)}>
          <Text
            style={{
              color: ColorLabels.WHITE,
              fontSize: fontSizes.smd,
              fontFamily: FontFamily.INTER_BOLD,
              textAlign: 'center',
            }}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
      <ImagePickModal
        visible={show}
        onDismiss={() => {
          setShow(false);
        }}
        handleSubmit={processImage}
      />
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imageBoxTouchable: {
    width: 120,
    height: 120,
    marginHorizontal: '32%',
    borderRadius: 100,
  },
  imageBox: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#E5E7E9',
    marginTop: -1,
    marginLeft: -1,
    backgroundColor: theme.colors[ColorLabels.WHITE],
  },
  camera: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: theme.colors[ColorLabels.PRIMARY],
    padding: 5,
    right: 5,
    bottom: 4,
    elevation: 15,
  },
  textInput: {
    minWidth: '100%',
    fontSize: 15,
  },
  btnsub1: {
    width: '100%',
  },
});
