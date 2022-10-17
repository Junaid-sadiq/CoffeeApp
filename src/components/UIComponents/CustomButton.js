import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from './Icon';

export default function CustomButton({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  leftIconName,
  RightIconName,
  color,
  style,
}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {leftIconName ? (
        <Icon
          name={leftIconName}
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
        <Icon name={RightIconName} size={22} color='white' />
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 9,
    elevation: 20,
  },
  container_PRIMARY: {
    backgroundColor: 'blue',
    shadowColor: '#0057FF',
  },
  container_SECONDARY: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  container_TERTIARY: {},
  text: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    alignItems: 'center,',
  },
  text_SECONDARY: {
    color: 'blue',
  },
  text_TERTIARY: {
    color: 'grey',
  },
  leftIcon: {
    paddingRight: 10,
  },
});
