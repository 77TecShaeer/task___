import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ActivityIndicator, Button, View} from 'react-native';
import AppInput from '../../../../Components/AppInput/AppInput';
import useRegister from '../../Logic/useRegister';
import {BodyRequestLogin} from '../../types/types';
import {styles} from './RegisterForm.styles';
import {schema} from './Validation';

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });
  const {mutationRegister} = useRegister();
  const onSubmit = (data: BodyRequestLogin) => mutationRegister.mutate(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            errorMessage={errors.name?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'name'}
          />
        )}
        name="name"
      />
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
        {mutationRegister.isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        )}
      </View>
    </View>
  );
};
