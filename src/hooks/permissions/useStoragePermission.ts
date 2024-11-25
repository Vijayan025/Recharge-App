import {useEffect, useState} from 'react';
import {isAndroid, isOS} from '../../common/utils';
import {PERMISSIONS, request} from 'react-native-permissions';

const useStoragePermission = () => {
  const [isGranted, setIsGranted] = useState<boolean>(false);

  const getPermission = async (permission: any) => {
    try {
      const status = await request(permission);
      setIsGranted(status === 'granted');
    } catch (e) {
      return setIsGranted(false);
    }
  };

  useEffect(() => {
    const permission = getPermissionFn();
    getPermission(permission);
  }, []);
  return {
    isGranted,
  };
};

const getPermissionFn = () => {
  if (isOS()) {
    return PERMISSIONS.IOS.MEDIA_LIBRARY;
  } else if (isAndroid()) {
    return PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
  } else {
    return null;
  }
};

export default useStoragePermission;
