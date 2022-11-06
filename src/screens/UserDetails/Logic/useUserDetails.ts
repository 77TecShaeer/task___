import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Alert} from 'react-native';
import {useMutation, useQuery} from 'react-query';
import {BASE_URL} from '../../../config';

const useUserDetails = (email: string) => {
  const navigation = useNavigation<any>();
  const fetchDetailsUser = async () => {
    return axios.get(BASE_URL + 'location/' + email);
  };

  const {data, isLoading, refetch} = useQuery(
    'userDetails',
    () => fetchDetailsUser(),
    {
      manual: true,
    },
  );

  const deleteAddress = (locationId: string) =>
    axios.delete(BASE_URL + 'location/' + locationId).then((res: any) => {
      refetch();
    });

  const addAddressRequest = (values: {lat: number; lng: number}) => {
    return axios.post(BASE_URL + 'location/' + email, values);
  };

  const mutationAddAddress = useMutation(addAddressRequest, {
    onSuccess: (response: any) => {
      console.log(response);
      refetch();
      navigation.goBack();
    },
    onError: (error: any) => {
      Alert.alert(error.response.data.error);
    },
  });

  return {
    data,
    isLoading,
    deleteAddress,
    mutationAddAddress,
    
  };
};

export default useUserDetails;
