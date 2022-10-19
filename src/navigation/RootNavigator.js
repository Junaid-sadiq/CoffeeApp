import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack/AppStack';
import { useAuthContext } from '../providers/AuthContext';
import AuthStack from './AuthStack/AuthStack';

export default function RootNavigator() {
  const { user } = useAuthContext();
  return (
    <NavigationContainer>
      {/*  {user ? <AppStack /> :} */}
      <AuthStack />
    </NavigationContainer>
  );
}
