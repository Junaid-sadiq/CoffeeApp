import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
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
import { emailConfirmationSchema, passwordResentSchema } from '../../utils';
import CustomInput from '../../components/UIComponents/CustomInput';
import Icon from '../../components/UIComponents/Icon';

const image = require('../../../assets/SignIn.png');

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation();
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const onConfirmCodePress = async (values) => {
    if (loading) {
      return;
    }
    setLoading(true);
    setErrorState('');
    try {
      const { email, code } = values;
      await Auth.confirmSignUp(values.username, values.code);
      setLoading(false);
      /*  navigation.navigate('SignIn'); */
    } catch (error) {
      setErrorState(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  const onPress = () => {
    navigation.goBack();
  };
  const onResendPress = async () => {
    navigation.navigate('ForgotPassword');
    /*  try {
      const { email } = route.params;
      await Auth.resendSignUp(email);
    } catch (err) {
      setErrorState(err.message);
    } */
  };
  const goBack = () => {
    navigation.goBack();
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
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
        <Text style={styles.pageTitle}>Confirm your email</Text>
        <View style={styles.container}>
          <Formik
            initialValues={{
              username: '',
              code: '',
            }}
            validationSchema={emailConfirmationSchema}
            onSubmit={(values) => onConfirmCodePress(values)}
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
                  placeholder='enter email as username'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  placeholderTextColor={colors['slightly-dark']}
                  leftIconName='user'
                  type='TERTIARY'
                  color={colors['dark-prime']}
                  value={values.username}
                  setValue={handleChange('username')}
                  onBlur={handleBlur('username')}
                  state={errors.username ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage
                  error={errors.username}
                  visible={touched.username}
                />
                {errorState !== '' ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                <Text style={styles.fieldsTitle}>Confirmation code</Text>
                <CustomInput
                  placeholder='enter confirmation code'
                  autoCapitalize='none'
                  placeholderTextColor={colors['slightly-dark']}
                  leftIconName='code'
                  type='TERTIARY'
                  color={colors['dark-prime']}
                  value={values.code}
                  setValue={handleChange('code')}
                  onBlur={handleBlur('code')}
                  state={errors.code ? 'SECONDARY' : 'DEFAULT'}
                />
                <FormErrorMessage error={errors.code} visible={touched.code} />
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
            text='Resend the Code'
            onPress={onResendPress}
            RightIconName='reload1'
            type='TERTIARY'
            bgColor={colors['primary']}
            color={colors['white']}
            IconLiberary={AntDesign}
          />
          <CustomButton
            text='Back To Sign In'
            onPress={onSignInPressed}
            leftIconName='arrow-left'
            color={colors.white}
            type='TERTIARY'
            fgColor={colors.white}
            /*     color={Colors[colorScheme].lightText}
            bgColor={Colors[colorScheme].background} */
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
    top: 200,
    left: 20,
  },
});
