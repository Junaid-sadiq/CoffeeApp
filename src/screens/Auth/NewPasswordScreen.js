import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
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
import { passwordResetSchema } from '../../utils';
import CustomInput from '../../components/UIComponents/CustomInput';
import Icon from '../../components/UIComponents/Icon';

const image = require('../../../assets/SignIn.png');

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);
  const [errorState, setErrorState] = useState('');
  const navigation = useNavigation();
  const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();

  const handleResetPassword = async (values) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(
        values.email,
        values.code,
        values.password
      );
      Alert.alert('Password Reset Successfully ');
      navigation.navigate('SignIn');
    } catch (error) {
      setErrorState(error.message);
      setLoading(false);
    }
    setLoading(false);
  };
  const onVerifyPress = () => {
    navigation.navigate('NewPassword');
  };
  const goBack = () => {
    navigation.goBack();
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
        <Text style={styles.pageTitle}>Reset your password</Text>
        <View style={styles.container}>
          <Formik
            initialValues={{
              email: '',
              code: '',
              password: '',
            }}
            validationSchema={passwordResetSchema}
            onSubmit={(values) => handleResetPassword(values)}
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
                {errorState !== '' ? (
                  <FormErrorMessage error={errorState} visible={true} />
                ) : null}
                <Text style={styles.fieldsTitle}>Enter confirmation code</Text>
                <CustomInput
                  placeholder='Confirmation code'
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
                <Text style={styles.fieldsTitle}>Email password</Text>
                <CustomInput
                  placeholder='Enter password'
                  leftIconName='lock'
                  autoCapitalize='none'
                  placeholderTextColor={colors['slightly-dark']}
                  type='TERTIARY'
                  color={colors['dark-prime']}
                  value={values.password}
                  setValue={handleChange('password')}
                  onBlur={handleBlur('password')}
                  state={errors.code ? 'SECONDARY' : 'DEFAULT'}
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
                      'Submit'
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
          {/*   <CustomButton
            text='Back To Sign In'
            onPress={onSignInPressed}
            leftIconName='back'
            type='TERTIARY'
            color={colors.white}
             fgColor={colors['dark-prime']}
            bgColor={colors.dark} 
          /> */}
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
    marginTop: 250,
    marginLeft: 25,
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
