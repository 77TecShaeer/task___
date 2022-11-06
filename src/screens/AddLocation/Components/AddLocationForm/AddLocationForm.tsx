import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, View} from 'react-native';
import AppInput from '../../../../Components/AppInput/AppInput';
import {styles} from './AddLocationForm.styles';
import {schema} from './Validation';

export const AddLocationForm = ({mutationAddAddress}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      lat: '',
      lng: '',
    },
    resolver: yupResolver(schema),
  });
  // const {mutationLogin} = useLogin();

  const onSubmit = (data: {lat: string; lng: string}) =>
    mutationAddAddress.mutate(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            errorMessage={errors.lat?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'lat'}
            keyboardType="number-pad"
          />
        )}
        name="lat"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInput
            errorMessage={errors.lat?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'lng'}
            keyboardType="number-pad"
          />
        )}
        name="lng"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
