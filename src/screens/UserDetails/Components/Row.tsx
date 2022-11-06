import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BodyResponseUserDetails} from '../types/types';
import {styles} from './Row.styles';

type propsRow = {
  item: BodyResponseUserDetails;
  deleteAddress: Function;
};
const Row = ({item, deleteAddress}: propsRow) => {
  
  return (
    <View style={styles.container}>
      <Text>Location name </Text>
      <View style={styles.descriptionContainer}>
        <Text>{item.lat + ' / ' + item.lng}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() => {
              deleteAddress(item.id);
            }}
            style={styles.button}>
            <Text>delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Row;
