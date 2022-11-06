import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {EditUserForm} from './Components/EditUserForm/EditUserForm';
import {styles} from './EditUser.styles';

type CustomPropsUserDetails = {
  EditUser: {add: boolean; mutationAddUser: Function};
};

type Props = NativeStackScreenProps<
  CustomPropsUserDetails,
  'EditUser',
  'AddLocation'
>;

const EditUser: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.LoginText}>
        {props.route.params.add ? 'add user ' : 'Edit user'}
      </Text>
      <EditUserForm mutationAddUser={props.route.params.mutationAddUser} />
    </View>
  );
};

export default EditUser;
