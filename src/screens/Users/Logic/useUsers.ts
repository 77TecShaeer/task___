import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';
import { useMutation, useQuery } from 'react-query';
import { BASE_URL } from '../../../config';
import { BodyRequestLogin } from '../../EditUser/types/types';

export type NewUser = {
  locations: [{ lat: number; lng: number }];
  name: string;
  email: string;
};
const useUsers = () => {
  let endpoints = [BASE_URL + 'user', BASE_URL + 'location'];
  const navigation = useNavigation<any>();

  const fetchAllUsers = async () => {
    return axios.all(endpoints.map((endpoint: string) => axios.get(endpoint)));
  };

  const { data, isLoading, refetch } = useQuery('users', fetchAllUsers, {
    manual: true,
  });

  const deleteUser = (userEmail: string) =>
    axios.delete(BASE_URL + 'user/' + userEmail).then((res: any) => {
      refetch();
    });

  const addUser = (values: NewUser) => {
    return axios.post(BASE_URL + 'user', values);
  };

  const mutationAddUser = useMutation(addUser, {
    onSuccess: response => {
      console.log(response);
      refetch();
      navigation.goBack();
    },
    onError: (error: any) => {
      Alert.alert(error.response.data.error!);
    },
  });

  return { data, isLoading, deleteUser, mutationAddUser };
};

export default useUsers;
