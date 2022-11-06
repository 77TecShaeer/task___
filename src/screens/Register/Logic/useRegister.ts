import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Alert} from 'react-native';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {BASE_URL} from '../../../config';
import {LOGIN_SUCCESS} from '../../../Redux/Actions/Types';
import {BodyRequestLogin} from '../types/types';
import {NavigationKey} from '../../../Navigation/types';

const useRegister = () => {
  const navigation = useNavigation<any>();
  const registerRequest = (values: BodyRequestLogin) => {
    return axios.post(BASE_URL + 'register', values);
  };

  const dispatch = useDispatch();
  const mutationRegister = useMutation(registerRequest, {
    onSuccess: response => {
      dispatch({type: LOGIN_SUCCESS, payload: {...response.data}});
      navigation.reset({
        index: 0,
        routes: [{name: NavigationKey.UsersStack}],
      });
    },
    onError: (error: any) => {
      Alert.alert(error.response.data.error!);
    },
  });

  return {
    mutationRegister,
  };
};

export default useRegister;
