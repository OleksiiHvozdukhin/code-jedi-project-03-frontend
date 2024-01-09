import * as yup from 'yup';

export const validateUserInfoSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email'),
  // .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of maximum 64 characters length'),
  // .required('Password is required'),
  oldPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of maximum 64 characters length'),
  // .required('Password is required'),
  gender: yup.string(),
  // .required('Choose one of two values'),
  name: yup
    .string('Enter your name')
    .max(32, 'name should be maximum 32 characters length'),
  // .required('Name is required'),
});
