import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().required().email('Please Enter Valid Email'),
    password: yup.string().required('Password is required'),
  })
  .required();
