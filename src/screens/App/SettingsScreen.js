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
import CustomInput from '../../components/UIComponents/CustomInput';

export default function SettingsScreen() {
  const [username, setUsername] = useState('Junaid Sadiq');
  const [email, setEmail] = useState('junaid.sadiq009@gmail.com');
  const navigation = useNavigation();
  /*  const goBack = () => {
    navigation.goBack();
  }; */
  return (
    <View style={styles.container}>
      <Header title='Settings' />
      <View style={styles.input}>
        <CustomInput
          username={username}
          setUsername={setUsername}
          rightIcon='user'
          placeholder={username}
          size={24}
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
  backButton: {
    margin: SPACING * 1,
    /*   backgroundColor: colors['dark'], */
    height: SPACING * 4,
    width: SPACING * 4,
    borderRadius: SPACING,
  },
  input: {
    marginTop: SPACING * 9,
  },
});
