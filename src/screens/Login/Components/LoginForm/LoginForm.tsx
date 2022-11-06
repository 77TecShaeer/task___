import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import AppInput from '../../../../Components/AppInput/AppInput';
import {BodyRequestLogin} from '../../types/types';
import {styles} from './LoginForm.styles';
import {schema} from './Validation';
import useLogin from '../../Logic/useLogin';

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const {mutationLogin} = useLogin();
  const onSubmit = (data: BodyRequestLogin) => mutationLogin.mutate(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            errorMessage={errors.email?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'Email'}
            keyboardType="email-address"
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            errorMessage={errors.password?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'password'}
            secureTextEntry
          />
        )}
        name="password"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
