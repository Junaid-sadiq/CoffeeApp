import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import SPACING from '../config/SPACING';
import colors from '../config/colors';
import Header from '../components/UIComponents/Header';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' />
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Ionicons
          name='chevron-back'
          size={SPACING * 4}
          color={colors['white-smoke']}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Go To Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      >
        <Text
          style={{
            color: colors.white,
            textAlign: 'center',
            padding: SPACING,
            fontSize: SPACING * 2,
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
});
