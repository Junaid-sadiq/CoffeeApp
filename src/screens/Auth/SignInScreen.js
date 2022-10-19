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
import { loginValidationSchema } from '../../utils/';
import { LoadingIndicator } from '../../components/UIComponents/LoadingIndicator';
import logo from '../../../assets/splash.png';
import CustomInput from '../../components/UIComponents/CustomInput';

const image = require('../../../assets/SignIn.png');

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation();
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleLogin = async (values) => {
    if (loading) {
      return;
    }
    setLoading(true);
    setErrorState('');
    try {
      const { email, password } = values;
      await Auth.signIn(email, password);
      setLoading(false);
    } catch (error) {
      setErrorState(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <LoadingIndicator visible={loading} />
        <Text style={styles.pageTitle}>Sign In</Text>
        <View style={styles.container}>
          {/*           <Image source={logo} style={styles.logo} resizeMode='contain' /> */}

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginValidationSchema}
            onSubmit={(values) => handleLogin(values)}
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
                <Text style={styles.fieldsTitle}>Password</Text>
                <CustomInput
                  leftIconName='lock'
                  placeholder='enter password'
                  rightIcon={rightIcon}
                  autoCapitalize='none'
                  type='TERTIARY'
                  autoCorrect={false}
                  textContentType='password'
                  secureTextEntry={passwordVisibility}
                  handlePasswordVisibility={handlePasswordVisibility}
                  placeholderTextColor={colors['slightly-dark']}
                  color={colors['dark-prime']}
                  IconLiberary={AntDesign}
                  value={values.password}
                  setValue={handleChange('password')}
                  onBlur={handleBlur('password')}
                  state={errors.email ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                {errorState !== '' ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
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
                      'Sign In'
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
            text='Forgot Password?'
            onPress={onForgotPasswordPressed}
            type='TERTIARY'
            fgColor={colors['dark-prime']}
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
});
