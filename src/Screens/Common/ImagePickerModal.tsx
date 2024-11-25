import {
  StyleSheet,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React from 'react';
import {Modal, Portal, Text} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Background} from '../../styles/Background';
import {FontFamily} from '../../types/Fonts';
import {isAndroid, isOS} from '../../common/utils';
import {ColorLabels, theme} from '../../common/theme';
import {resizeImage} from './imageResizeHelper';
import {Paddings} from '../../styles/Padding';
import {Margins} from '../../styles/Margins';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BaseStyle} from '../../styles/Base';
import {BorderStyle} from '../../styles/Border';

const OsVer = Platform.Version;

let options: any = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: true,
};

const ImagePickModal = ({
  visible,
  onDismiss,
  handleSubmit = () => false,
}: {
  visible?: boolean;
  onDismiss?: () => void;
  handleSubmit?: any;
}) => {
  const requestCameraPermission = async (): Promise<boolean> => {
    try {
      if (isAndroid()) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else if (isOS()) {
        const granted = await request(PERMISSIONS.IOS.CAMERA);
        return granted === RESULTS.GRANTED;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const requestGalleryPermission = async (): Promise<boolean> => {
    try {
      if (isAndroid()) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else if (isOS()) {
        const granted = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        return granted === RESULTS.GRANTED;
      }
      return false;
    } catch (e) {
      return false;
    }
  };

  const onOpenCamera = async () => {
    try {
      let granted = await requestCameraPermission();
      if (granted) {
        const data = await launchCamera(options);
        setTimeout(() => handleSubmit(processImage(data)));
      }
    } catch (error) {}
  };
  const onOpenGallery = async () => {
    try {
      let granted = await requestGalleryPermission();

      if (granted || parseInt(OsVer) >= 33) {
        const data = await launchImageLibrary(options);
        setTimeout(() => handleSubmit(processImage(data)), 500);
      }
    } catch (error) {}
  };

  const processImage = async (image: any) => {
    const imageBase64 = image?.assets?.[0]?.base64;
    const uri = image?.assets?.[0]?.uri ?? '';
    const fileName = image?.assets?.[0]?.fileName;
    const maxWidth = image?.assets[0]?.width ?? 100;
    const maxHeight = image?.assets[0]?.height ?? 100;
    if (imageBase64 && fileName) {
      const croppedImage = await ImageCropPicker.openCropper({
        path: uri,
        cropping: true,
        mediaType: 'photo',
        freeStyleCropEnabled: true,
        hideBottomControls: true,
      });
      return await resizerImage({
        path: croppedImage.path,
        fileName,
        maxWidth,
        maxHeight,
      });
    } else {
      return await resizerImage({
        path: uri,
        fileName,
        maxWidth,
        maxHeight,
      });
    }
  };

  const resizerImage = async ({path, maxHeight, maxWidth, fileName}: any) => {
    const {base64: compressedImageBase64}: any = await resizeImage({
      uri: path,
      maxWidth,
      maxHeight,
    });
    return {compressedImageBase64, fileName, uri: path};
  };
  const containerStyle = {backgroundColor: theme.colors[ColorLabels.WHITE]};

  return (
    <Modal
      style={[
        Paddings.paddingHorizontalMedium,
        BaseStyle.flexRow,
        BaseStyle.flexColumn,
      ]}
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={[containerStyle, BorderStyle.borderRadiusMedium]}>
      <View
        style={[
          Paddings.paddingHorizontalMediumXl,
          Margins.mtMd,
          BaseStyle.justifySpaceBetween,
        ]}>
        <View style={[Margins.mbLg, Margins.mtMd]}>
          <Text style={styles.modeltxt}>Profile Photo</Text>
        </View>
        <View
          style={[
            Margins.mbLg,
            BaseStyle.flexRow,
            {width: '35%'},
            BaseStyle.justifySpaceBetween,
          ]}>
          <TouchableOpacity onPress={onOpenGallery}>
            <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
              <View
                style={[
                  styles.gallery,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyCenter,
                ]}>
                <IonIcon
                  name="image"
                  size={22}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={[styles.txt, Margins.mtMd]}>Gallery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenCamera}>
            <View style={[BaseStyle.alignCenter, BaseStyle.justifyCenter]}>
              <View
                style={[
                  styles.gallery,
                  BaseStyle.alignCenter,
                  BaseStyle.justifyCenter,
                ]}>
                <IonIcon
                  name="camera"
                  size={22}
                  color={theme.colors[ColorLabels.PRIMARY]}
                />
              </View>
              <Text style={[styles.txt, Margins.mtMd]}>Camera</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickModal;

const styles = StyleSheet.create({
  modeltxt: {
    fontSize: 17,
    color: theme.colors[ColorLabels.BLACK],
    textAlign: 'left',
    fontFamily: FontFamily.INTER_REGULAR,
  },
  txt: {
    fontSize: 13,
    color: theme.colors[ColorLabels.BLACK],
    fontFamily: FontFamily.INTER_LIGHT,
  },
  headermsg: {
    fontSize: 18,
    color: theme.colors[ColorLabels.PRIMARY],
    textAlign: 'center',
    fontFamily: FontFamily.INTER_MEDIUM,
    padding: 10,
  },
  line1: {
    borderColor: theme.colors[ColorLabels.BLACK],
    borderLeftWidth: 1,
  },
  gallery: {
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 100,
    padding: 8,
    width: 45,
    height: 45,
  },
});
