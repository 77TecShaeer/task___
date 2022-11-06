import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthStackParamList} from '../../Navigation/AuthStack/AuthStack';
import {NavigationKey} from '../../Navigation/types';
import {RegisterForm} from './Components/RegisterForm/RegisterForm';
import {styles} from './Register.styles';

export type RegisterScreenProps = StackScreenProps<
  AuthStackParamList,
  NavigationKey.Login
>;
const Register: React.FC<RegisterScreenProps> = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-back" size={30} color="grey" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.welcomeBackText}>Welcome </Text>
        <Text style={styles.LoginText}>Register</Text>
        <RegisterForm />
      </View>
    </>
  );
};

export default Register;
