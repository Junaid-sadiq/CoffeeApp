import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
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
import { loginValidationSchema, signupValidationSchema } from '../../utils/';
import { LoadingIndicator } from '../../components/UIComponents/LoadingIndicator';
import logo from '../../../assets/splash.png';
import CustomInput from '../../components/UIComponents/CustomInput';
import Icon from '../../components/UIComponents/Icon';
import { color } from 'react-native-reanimated';

const image = require('../../../assets/SignIn.png');

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation();
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const goBack = () => {
    navigation.goBack();
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  const onSignInPress = () => {
    navigation.goBack();
  };

  const handleSignUp = async (values) => {
    const { name, username, email, password, confirmPassword } = values;
    if (loading) {
      return;
    }
    setLoading(true);
    setErrorState('');
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      navigation.navigate('ConfirmEmail', { username });
    } catch (error) {
      setErrorState(error.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <LoadingIndicator visible={loading} />
        <TouchableOpacity style={styles.backIcon} onPress={goBack}>
          <Icon
            IconLiberary={Feather}
            name='arrow-left-circle'
            size={38}
            color='#fff'
          />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Sign Up</Text>
        <View style={styles.container}>
          {/*           <Image source={logo} style={styles.logo} resizeMode='contain' /> */}

          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={signupValidationSchema}
            onSubmit={(values) => handleSignUp(values)}
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
                <Text style={styles.fieldsTitle}>Enter Username</Text>
                <CustomInput
                  placeholder='Enter Username'
                  autoCapitalize='none'
                  placeholderTextColor={colors['slightly-dark']}
                  type='TERTIARY'
                  color={colors['dark-prime']}
                  leftIconName='user'
                  value={values.username}
                  setValue={handleChange('username')}
                  onBlur={handleBlur('username')}
                  state={errors.username ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.username}
                  visible={touched.username}
                />
                <Text style={styles.fieldsTitle}>Email</Text>
                <CustomInput
                  placeholder='email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  type='TERTIARY'
                  autoCorrect={false}
                  placeholderTextColor={colors['slightly-dark']}
                  color={colors['dark-prime']}
                  IconLiberary={AntDesign}
                  leftIconName='mail'
                  value={values.email}
                  setValue={handleChange('email')}
                  onBlur={handleBlur('email')}
                  state={errors.email ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.email}
                  visible={touched.email}
                />
                {errorState !== '' ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
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
                  state={errors.password ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.password}
                  visible={touched.password}
                />
                {errorState !== '' ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                <Text style={styles.fieldsTitle}>Confirm Password</Text>
                <CustomInput
                  leftIconName='lock'
                  placeholder='confirm password'
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
                  value={values.confirmPassword}
                  setValue={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  state={errors.confirmPassword ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.confirmPassword}
                  visible={touched.confirmPassword}
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
                      'Sign Up'
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
          <Text style={styles.text}>
            By registering, you confirm that you accept our{' '}
            <Text onPress={onTermsOfUsePressed} style={styles.link}>
              Terms Of Use
            </Text>{' '}
            and{' '}
            <Text onPress={onPrivacyPressed} style={styles.link}>
              Privacy Policy
            </Text>
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: colors['dark-prime'],
            }}
          ></Text>
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
  text: {
    paddingHorizontal: 14,
    color: 'white',
    marginTop: 10,
  },
  link: {
    color: colors['dark-light'],
  },
});
