import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './AddLocation.styles';
import {AddLocationForm} from './Components/AddLocationForm/AddLocationForm';

type CustomPropsUserDetails = {
  AddLocation: {mutationAddAddress: Function};
};

type Props = NativeStackScreenProps<
  CustomPropsUserDetails,
  'AddLocation',
  'AddLocation'
>;

const AddLocation: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.LoginText}>AddLocation</Text>
      <AddLocationForm
        mutationAddAddress={props.route.params.mutationAddAddress}
      />
    </View>
  );
};

export default AddLocation;
