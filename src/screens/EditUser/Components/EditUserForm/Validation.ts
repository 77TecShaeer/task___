import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().required().email('Please Enter Valid Email'),
    name: yup.string().required('name is required'),
  })
  .required();
