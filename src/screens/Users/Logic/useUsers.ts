import axios from 'axios';
import {useQuery} from 'react-query';
import {BASE_URL} from '../../../config';

const useUsers = () => {
  let endpoints = [BASE_URL + 'user', BASE_URL + 'location'];

  const fetchAllUsers = async () => {
    return axios.all(endpoints.map((endpoint: string) => axios.get(endpoint)));
  };

  const {data, isLoading, refetch} = useQuery('users', fetchAllUsers, {
    manual: true,
  });

  const deleteUser = (userEmail: string) =>
    axios.delete(BASE_URL + 'user/' + userEmail).then((res: any) => {
      refetch();
    });

  return {data, isLoading, deleteUser};
};

export default useUsers;
