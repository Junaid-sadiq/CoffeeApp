import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/UIComponents/CustomButton';
import colors from '../../config/colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useAuthContext } from '../../providers/AuthContext';

export default function SignInScreen() {
  const { user, setUser } = useAuthContext();
  const signIn = () => {
    console.warn(user);
    return setUser('Junaid');
  };
  return (
    <View style={styles.container}>
      <Text>SignInScree</Text>
      <CustomButton
        text='Sign in'
        IconLiberary={AntDesign}
        leftIconName={'login'}
        style={styles.signIn}
        color={colors.white}
        onPress={signIn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
