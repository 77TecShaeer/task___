import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {
  moderateScale,
  responsiveWidth,
} from '../../../../Common/responsiveDimensions';
import AppInput from '../../../../Components/AppInput/AppInput';
import {styles} from './EditUser.styles';
import {schema} from './Validation';
import {NewUser} from '../../../Users/Logic/useUsers';

export const EditUserForm = ({mutationAddUser}: any) => {
  const navigation = useNavigation<any>();

  const [latLng, setLatLng] = useState([]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) =>
    mutationAddUser.mutate({
      locations: latLng,
      ...data,
    });

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
            placeholder={'email'}
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
            errorMessage={errors.name?.message}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={'name'}
          />
        )}
        name="name"
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddLocation', {
            getLatLng: (value: any) => {
              setLatLng([...latLng, value]);
            },
          });
        }}
        style={{
          borderColor: 'grey',
          paddingHorizontal: moderateScale(10),
          borderWidth: moderateScale(1),
          width: responsiveWidth(50),
          marginVertical: moderateScale(10),
        }}>
        <Text>Add Location</Text>
      </TouchableOpacity>

      {latLng?.map((item, index) => {
        return <Text>{JSON.stringify(item)}</Text>;
      })}
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};
