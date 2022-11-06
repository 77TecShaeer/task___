import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import {
  moderateScale,
  responsiveWidth,
} from '../../Common/responsiveDimensions';
import Row from './Components/Row';
import useUsers from './Logic/useUsers';
import {UserObject} from './types/types';
import {styles} from './Users.styles';

const Users = () => {
  const {data, isLoading, deleteUser} = useUsers();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<UserObject>) => (
      <Row item={item} deleteUser={deleteUser} />
    ),
    [],
  );
  const keyExtractor = useCallback(
    (item: UserObject) => `users_list_${item.id}`,
    [],
  );
  console.log('data', data);

  const [usersData, setUsersData] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (data) {
      setUsersData(data[0].data.users);
      setLocations(data[1].data.locations);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator />}
      {data && (
        <>
          <View style={{alignItems: 'flex-end', padding: moderateScale(10)}}>
            <Text>{'# locations ' + locations.length}</Text>
            <Text>{'# users ' + usersData.length}</Text>
          </View>
          <FlatList
            data={usersData ?? []}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={
              <View>
                <Text>No Founded users</Text>
              </View>
            }
          />
        </>
      )}
    </View>
  );
};

export default Users;
