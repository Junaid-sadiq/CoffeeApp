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

import SPACING from '../../config/SPACING';
import colors from '../../config/colors';
import Header from '../../components/UIComponents/Header';
import CustomButton from '../../components/UIComponents/CustomButton';

export default function ProfileScreen() {
  const navigation = useNavigation();
  /*  const goBack = () => {
    navigation.goBack();
  }; */
  return (
    <View style={styles.container}>
      <Header title='Profile' />
      <View style={styles.prof}>
        {/*  <CustomButton title='signOut' leftIconName='arrow-left' /> */}
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
    marginTop: SPACING * 9,
  },
});
