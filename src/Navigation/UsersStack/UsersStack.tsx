import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AddLocation from '../../screens/AddLocation/AddLocation';
import EditUser from '../../screens/EditUser/EditUser';
import UserDetails from '../../screens/UserDetails/UserDetails';
import Users from '../../screens/Users/Users';
import {NavigationKey} from '../types';

export type UsersStackParamList = {
  [NavigationKey.Users]: undefined;
  [NavigationKey.UserDetails]: undefined;
  [NavigationKey.EditUser]: undefined;
  [NavigationKey.AddLocation]: undefined;
};

export const UsersStack = () => {
  const Stack = createNativeStackNavigator<UsersStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={NavigationKey.Users}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NavigationKey.Users} component={Users} />
      <Stack.Screen name={NavigationKey.UserDetails} component={UserDetails} />
      <Stack.Screen name={NavigationKey.EditUser} component={EditUser} />
      <Stack.Screen name={NavigationKey.AddLocation} component={AddLocation} />
    </Stack.Navigator>
  );
};
