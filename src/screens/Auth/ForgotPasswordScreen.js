import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useAuthContext } from '../../providers/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Auth } from 'aws-amplify';

import CustomButton from '../../components/UIComponents/CustomButton';
import colors from '../../config/colors';
import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import { FormErrorMessage } from '../../components/UIComponents/FormErrorMessage';
import { LoadingIndicator } from '../../components/UIComponents/LoadingIndicator';
import logo from '../../../assets/splash.png';
import { passwordResentSchema } from '../../utils';
import CustomInput from '../../components/UIComponents/CustomInput';
import Icon from '../../components/UIComponents/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const image = require('../../../assets/SignIn.png');

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation();
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleSendPasswordResetEmail = async (data) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate('NewPassword');
    } catch (error) {
      setErrorState(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  const onPress = () => {
    navigation.goBack();
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onVerifyPress = () => {
    navigation.navigate('NewPassword');
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <LoadingIndicator visible={loading} />
        <TouchableOpacity style={styles.backIcon} onPress={onPress}>
          <Icon
            IconLiberary={Feather}
            name='arrow-left-circle'
            size={38}
            color='#fff'
          />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Account Recovery</Text>
        <View style={styles.container}>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={passwordResentSchema}
            onSubmit={(values) => handleSendPasswordResetEmail(values)}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <>
                <Text style={styles.fieldsTitle}>Email Address</Text>
                <CustomInput
                  placeholder='enter your email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  placeholderTextColor={colors['slightly-dark']}
                  leftIconName='user'
                  type='TERTIARY'
                  value={values.email}
                  color={colors['dark-prime']}
                  setValue={handleChange('email')}
                  onBlur={handleBlur('email')}
                  state={errors.email ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.email}
                  visible={touched.email}
                />
                <CustomButton
                  text={
                    loading ? (
                      <ActivityIndicator
                        color='#c0c0c8'
                        size='small'
                        style={{
                          justifyContent: 'center',
                        }}
                      />
                    ) : (
                      'Recover your account'
                    )
                  }
                  onPress={handleSubmit}
                  IconLiberary={AntDesign}
                  color={colors.white}
                  style={styles.button}
                  RightIconName={loading ? '' : 'login'}
                />
              </>
            )}
          </Formik>
          <CustomButton
            text='Verify your account'
            onPress={onVerifyPress}
            type='TERTIARY'
            fgColor={colors.white}
          />
        </View>
        <View style={{ marginTop: 120 }}></View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    margin: 'auto',
  },
  pageTitle: {
    color: colors['dark-prime'],
    fontWeight: '500',
    fontSize: 32,
    marginTop: 300,
    marginLeft: 30,
  },
  fieldsTitle: {
    color: colors['dark-prime'],
    marginLeft: 10,
    paddingTop: 10,
    textAlign: 'left',
  },
  image: {
    flex: 1,
  },
  logo: {
    height: 280,
    width: '100%',
    maxWidth: 320,
    marginBottom: 10,
  },
  button: {
    marginTop: 40,
  },
  backIcon: {
    position: 'absolute',
    top: 120,
    left: 20,
  },
});
