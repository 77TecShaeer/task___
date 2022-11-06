import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {useSelector} from 'react-redux';
import useConfigAxios from '../Common/useConfigAxios';
import {RootState} from '../Redux/Store';
import {AuthStack} from './AuthStack/AuthStack';
import {NavigationKey} from './types';
import {UsersStack} from './UsersStack/UsersStack';

export type RootStackParamList = {
  [NavigationKey.UsersStack]: undefined;
  [NavigationKey.AuthStack]: undefined;
};

const RootNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  useConfigAxios();
  const {token} = useSelector((state: RootState) => {
    return {
      token: state.auth.token,
    };
  });
  console.log(token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          token ? NavigationKey.UsersStack : NavigationKey.AuthStack
        }
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={NavigationKey.UsersStack}
          component={UsersStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationKey.AuthStack}
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
