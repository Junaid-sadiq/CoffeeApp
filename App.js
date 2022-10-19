import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Auth } from 'aws-amplify';
/* import { withAuthenticator } from '@aws-amplify/ui-react'; */

import config from './src/aws-exports';
import Routes from './src/navigation/Routes';
import { AuthContextProvider } from './src/providers/AuthContext';

Auth.configure(config);
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
/* export default withAuthenticator(App); */
