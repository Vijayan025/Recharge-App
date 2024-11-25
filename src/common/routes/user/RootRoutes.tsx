import React from 'react';
import RootNavigator from './user.stack';
import AuthStackNavigator from '../auth/auth.stack';
import {useNavigationSource} from '../../../Screens/Common/NavigationSource';

const RootRoutes = () => {
  const {navigationSource}: any = useNavigationSource();

  return (
    <>
      {navigationSource === 'VERIFIED' ? (
        <RootNavigator />
      ) : navigationSource === 'NOT_VERIFIED' ? (
        <RootNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </>
  );
};

export default RootRoutes;
