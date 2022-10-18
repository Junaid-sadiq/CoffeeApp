import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';
import Icon from './Icon';

export default function CustomButton({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  leftIconName,
  RightIconName,
  IconLiberary,
  color,
  style,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        style,
      ]}
    >
      {leftIconName ? (
        <Icon
          name={leftIconName}
          IconLiberary={IconLiberary}
          size={22}
          color={color}
          style={styles.leftIcon}
        />
      ) : null}
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
      {RightIconName ? (
        <Icon
          IconLiberary={IconLiberary}
          name={RightIconName}
          size={22}
          color={color}
        />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: colors.primary,
  },
  container_SECONDARY: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    color: colors['white'],
    fontWeight: 'bold',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text_SECONDARY: {
    color: colors.primary,
  },
  text_TERTIARY: {
    color: colors['white'],
  },
  leftIcon: {
    paddingRight: 10,
  },
});
