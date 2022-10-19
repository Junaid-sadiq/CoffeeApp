import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from './Icon';
import colors from '../../config/colors';
export default function CustomInput({
  value,
  type = 'PRIMARY',
  state = 'DEFAULT',
  setValue,
  secureTextEntry,
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  placeholder,
  size,
  IconLiberary,
  backgroundColor,
  color,
  bgColor,
  style,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        styles[`container_${type}`],
        styles[`error_${state}`],
        bgColor ? { backgroundColor: bgColor } : {},
        style,
      ]}
    >
      {leftIconName ? (
        <Icon
          IconLiberary={IconLiberary}
          name={leftIconName}
          size={24}
          color={color}
        />
      ) : null}
      <TextInput
        {...otherProps}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.text}
      />
      {rightIcon ? (
        <Pressable
          style={{ justifyContent: 'center' }}
          onPress={handlePasswordVisibility}
        >
          <Icon
            name={rightIcon}
            IconLiberary={IconLiberary}
            size={24}
            color={color}
            style={{
              paddingRight: 10,
            }}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_PRIMARY: {
    backgroundColor: colors['dark-prime'],
  },
  error_DEFAULT: {},
  error_SECONDARY: {
    borderBottomColor: 'red',
  },
  container_SECONDARY: {
    backgroundColor: colors['slightly-dark'],
  },
  container_TERTIARY: {
    borderBottomWidth: 1,
    borderColor: colors['slightly-dark'],
    borderRadius: 0,
    paddingVertical: 5,
    marginLeft: 0,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: colors['dark-light'],
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    /*   outlineWidth: 0, */
  },
});
