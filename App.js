import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaProvider, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/navigation/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style='light' />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
