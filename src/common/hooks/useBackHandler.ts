import {BackHandler} from 'react-native';
import {useEffect, useState} from 'react';

const useBackHandler = (callBack = () => {}): boolean => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', callBack as any);
    setActive(true);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callBack as any);
      setActive(false);
    };
  }, [callBack]);
  return active;
};

export default useBackHandler;
