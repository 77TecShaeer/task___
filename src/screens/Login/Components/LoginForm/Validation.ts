import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().required().email('Please Enter Valid Email'),
    password: yup.string().required('Password is required'),
  })
  .required();
