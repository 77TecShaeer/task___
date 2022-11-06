import * as yup from 'yup';

export const schema = yup
  .object({
    lat: yup.string().required('lat is required'),
    lng: yup.string().required('lng is required'),
  })
  .required();
