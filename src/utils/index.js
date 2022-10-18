import * as Yup from 'yup';
import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .label('Password'),
  /*  password: Yup.string().required().min(6).label('Password'), */
});

export const signupValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Please enter your email address as username')
    .email()
    .label('Username'),
  email: Yup.string()
    .required('Please Enter your Email Address')
    .email()
    .label('Email'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must match password.')
    .required('Confirm Password is required.'),
});

export const emailConfirmationSchema = Yup.object().shape({
  code: Yup.string()
    .min(6)
    .required('Please enter code sent to your email address')
    .label('Code'),
});

export const passwordResentSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter your email address')
    .email()
    .label('Username'),
});
export const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please Enter your Email Address')
    .email()
    .label('Email'),
  code: Yup.string()
    .required('Please enter code sent to your email address')
    .label('Code'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
    .label('Password'),
});
