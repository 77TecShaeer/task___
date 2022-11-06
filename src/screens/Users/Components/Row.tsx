import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  moderateScale,
  responsiveWidth,
} from '../../../Common/responsiveDimensions';
import {UserObject} from '../types/types';
import {styles} from './Row.styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationKey} from '../../../Navigation/types';

type Props = {
  item: UserObject;
  deleteUser: Function;
};
const Row = ({item, deleteUser}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(NavigationKey.UserDetails, {
          email: item.email,
          name: item.name,
        })
      }
      style={styles.container}>
      <Text>{item.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text>{'dummary descirptuion '}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button}>
            <Text>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteUser(item.email)}
            style={styles.button}>
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Row;
