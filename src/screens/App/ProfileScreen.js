import React, { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import SPACING from '../../config/SPACING';
import colors from '../../config/colors';
import Header from '../../components/UIComponents/Header';
import CustomButton from '../../components/UIComponents/CustomButton';
import { useAuthContext } from '../../providers/AuthContext';
import { color } from 'react-native-reanimated';
import CustomInput from '../../components/UIComponents/CustomInput';

export default function ProfileScreen() {
  const { user, setUser } = useAuthContext();
  const [userInput, setUserInput] = useState('');
  const navigation = useNavigation();

  const signIn = () => {
    console.warn(user);
    return setUser(userInput);
  };
  const signOut = () => {
    setUser(null);
  };
  return (
    <View style={styles.container}>
      <Header title='Profile' />
      <View style={styles.prof}>
        <CustomInput
          placeholder='Email'
          autoCapitalize='none'
          placeholderTextColor={colors['white-smoke']}
          leftIconName='user'
          iconLiberary={AntDesign}
          value={userInput}
          color={colors['white-smoke']}
          setValue={setUserInput}
        />
        <CustomButton
          text='Sign in'
          IconLiberary={AntDesign}
          leftIconName={'login'}
          style={styles.signIn}
          color={colors.white}
          onPress={signIn}
        />

        <CustomButton
          text='Sign out'
          type={'TERTIARY'}
          IconLiberary={AntDesign}
          leftIconName={'logout'}
          style={styles.signIn}
          color={colors.white}
          onPress={signOut}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING,
    backgroundColor: colors['dark'],
  },
  button: {
    backgroundColor: colors['dark'],
    margin: SPACING * 4,
    padding: SPACING,
    borderRadius: SPACING * 2,
  },
  text: {
    color: colors.white,
    fontSize: SPACING * 3,
    textAlign: 'center',
    marginTop: SPACING * 8,
  },
  prof: {
    marginTop: SPACING * 10,
  },
  signIn: {
    /*    width: '90%', */
  },
});
