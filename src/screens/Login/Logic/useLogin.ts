import axios from 'axios';
import {Alert} from 'react-native';
import {useMutation} from 'react-query';
import {BASE_URL} from '../../../config';
import {LOGIN_SUCCESS} from '../../../Redux/Actions/Types';
import {BodyRequestLogin} from '../types/types';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NavigationKey} from '../../../Navigation/types';

const useLogin = () => {
  const loginRequest = (values: BodyRequestLogin) => {
    return axios.post(BASE_URL + 'login', values);
  };
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const mutationLogin = useMutation(loginRequest, {
    onSuccess: response => {
      dispatch({type: LOGIN_SUCCESS, payload: {...response.data}});
      navigation.reset({
        index: 0,
        routes: [{name: NavigationKey.UsersStack}],
      });
    },
    onError: (error: any) => {
      Alert.alert(error.response.data.error);
    },
  });

  return {
    mutationLogin,
  };
};

export default useLogin;
