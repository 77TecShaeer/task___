import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../../screens/Login/Login';
import Register from '../../screens/Register/Register';
import {NavigationKey} from '../types';

export type AuthStackParamList = {
  [NavigationKey.Login]: undefined;
  [NavigationKey.Register]: undefined;
};

export const AuthStack = () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={NavigationKey.Login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationKey.Login} component={Login} />
      <Stack.Screen name={NavigationKey.Register} component={Register} />
    </Stack.Navigator>
  );
};
