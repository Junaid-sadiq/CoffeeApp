import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/navigation/Routes';
import { AuthContextProvider } from './src/providers/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <SafeAreaProvider>
        <Routes />
        <StatusBar style='light' />
      </SafeAreaProvider>
    </AuthContextProvider>
  );
}
