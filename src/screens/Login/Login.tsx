import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthStackParamList} from '../../Navigation/AuthStack/AuthStack';
import {NavigationKey} from '../../Navigation/types';
import {LoginForm} from './Components/LoginForm/LoginForm';
import {styles} from './Login.styles';

export type LoginScreenProps = StackScreenProps<
  AuthStackParamList,
  NavigationKey.Login
>;
const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  const navigateToRegister = () => navigation.navigate(NavigationKey.Register);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeBackText}>Welcome Back</Text>
      <Text style={styles.LoginText}>Login</Text>
      <LoginForm />
      <View>
        <Button onPress={navigateToRegister} title="Register" color={'grey'} />
      </View>
    </View>
  );
};

export default Login;
