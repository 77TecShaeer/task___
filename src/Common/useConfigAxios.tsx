import axios from 'axios';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/Store';

const useConfigAxios = () => {
  const {token} = useSelector((state: RootState) => {
    return {
      token: state.auth.token,
    };
  });

  useEffect(() => {
    if (token) {
      axios.interceptors.request.use(config => {
        return {
          ...config,
          headers: {
            ...config.headers,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            token: token ? `${token}` : config?.headers?.token,
          },
        };
      });
    }
  }, [token]);

  return {};
};

export default useConfigAxios;
