import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack/AppStack';
import { useAuthContext } from '../providers/AuthContext';
import AuthStack from './AuthStack/AuthStack';
import { Auth, Hub } from 'aws-amplify';
import { Alert } from 'react-native';
import { LoadingIndicator } from '../components/UIComponents/LoadingIndicator';

export default function RootNavigator() {
  const { user, setUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async () => {
    try {
      setIsLoading(false);
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
      setIsLoading(false);
    } catch (e) {
      /* Alert.alert('Error: ' + e.message); */
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        setUser(user);
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
