import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { BlurView } from 'expo-blur';
import SPACING from '../../config/SPACING';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../config/colors';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <BlurView intensity={30} style={styles.SearchBar}>
        <TextInput
          placeholder='Find your coffee...'
          placeholderTextColor={colors['white-smoke']}
          style={styles.search}
        />
        <AntDesign
          name='search1'
          style={styles.icon}
          size={SPACING * 2.4}
          color={colors.white}
        />
      </BlurView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: SPACING * 1.5,
    overflow: 'hidden',
  },
  SearchBar: {
    /* flexDirection: 'row', */
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    width: '100%',
    color: colors.white,
    fontSize: SPACING * 1.7,
    padding: SPACING,
    paddingLeft: SPACING * 4.5,
  },
  icon: {
    position: 'absolute',
    left: SPACING,
  },
});
