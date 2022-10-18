import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';
import SignInScreen from '../../screens/Auth/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';
import ConfirmEmailScreen from '../../screens/Auth/ConfirmEmailScreen';
import NewPasswordScreen from '../../screens/Auth/NewPasswordScreen';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName='SignIn'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='SignIn' component={SignInScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
      <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
