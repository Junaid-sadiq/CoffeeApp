import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from './Icon';
export default function CustomInput({
  value,
  setValue,
  secureTextEntry,
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  placeholder,
  size,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {leftIconName ? (
        <Icon name={leftIconName} size={24} color='grey' />
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
            size={24}
            color='grey'
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
    backgroundColor: '#E5E5E5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 20,
    shadowColor: '#242424',
  },
  text: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    /*   outlineWidth: 0, */
  },
});
