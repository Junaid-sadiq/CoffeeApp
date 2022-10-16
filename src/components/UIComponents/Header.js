import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SPACING from '../../config/SPACING';
import colors from '../../config/colors';
import avatar from '../../../assets/avatar.png';

export default function Header({ title }) {
  const navigation = useNavigation();
  const menuPressMenu = () => {
    console.warn('Menu Pressed');
  };
  const goToProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerButton}>
        <TouchableOpacity onPress={menuPressMenu}>
          <BlurView style={styles.menu}>
            <Entypo
              name='menu'
              size={SPACING * 2.5}
              color={colors['white-smoke']}
            />
          </BlurView>
        </TouchableOpacity>
        {title && (
          <View style={styles.title}>
            <Text style={styles.text}>{title}</Text>
          </View>
        )}
        <TouchableOpacity onPress={goToProfile} style={styles.user}>
          <BlurView style={styles.userAvatar}>
            <Image source={avatar} style={styles.avatar} />
          </BlurView>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    paddingTop: SPACING * 6,
    paddingBottom: SPACING,
    paddingHorizontal: SPACING * 2,
  },
  headerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    borderRadius: SPACING,
    overflow: 'hidden',
    width: SPACING * 4,
    height: SPACING * 4,
  },
  menu: {
    /*  height: '100%', */
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING / 2,
    borderRadius: SPACING,
  },
  title: {},
  text: {
    color: colors['white-smoke'],
    fontSize: SPACING * 3,
  },
  user: {
    width: SPACING * 4,
    height: SPACING * 4,
    overflow: 'hidden',
    borderRadius: SPACING,
  },
  userAvatar: {
    height: '100%',
    padding: SPACING / 2,
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: SPACING,
  },
});
