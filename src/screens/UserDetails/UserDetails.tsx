import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './UserDetails.styles';
import {
  responsiveFontSize,
  moderateScale,
} from '../../Common/responsiveDimensions';
import useUserDetails from './Logic/useUserDetails';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BodyResponseUserDetails} from './types/types';
import Row from './Components/Row';
import {useNavigation} from '@react-navigation/native';

type CustomPropsUserDetails = {
  UserDetails: {email: string | undefined; name: string | undefined};
};

type Props = NativeStackScreenProps<
  CustomPropsUserDetails,
  'UserDetails',
  'UserDetails'
>;

const UserDetails = ({route}: Props) => {
  const {data, isLoading, deleteAddress, mutationAddAddress} = useUserDetails(
    route.params.email!,
  );
  // let info = useDataUserDetails();
  const navigation = useNavigation<any>();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<BodyResponseUserDetails>) => (
      <Row item={item} deleteAddress={deleteAddress} />
    ),
    [],
  );
  const keyExtractor = useCallback(
    (item: BodyResponseUserDetails) => `users_list_${item.id}`,
    [],
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: responsiveFontSize(10),
          margin: moderateScale(10),
        }}>
        Details
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'stretch',
          borderRadius: moderateScale(2),
          borderWidth: moderateScale(0.2),
          margin: moderateScale(2),
          justifyContent: 'space-between',
          padding: moderateScale(2),
        }}>
        <View style={{}}>
          <Text>{route.params.name}</Text>
          <Text>{route.params.email}</Text>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'red',
          }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: moderateScale(5),
        }}>
        <Text>Locations</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddLocation', {
              mutationAddAddress: mutationAddAddress,
            });
          }}
          style={{
            borderColor: 'grey',
            paddingHorizontal: moderateScale(10),
            borderWidth: moderateScale(1),
          }}>
          <Text>Add Location</Text>
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator />}
      {data && (
        <>
          <FlatList
            data={data.data.locations ?? []}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={
              <View>
                <Text>No Founded Locations</Text>
              </View>
            }
          />
        </>
      )}
    </View>
  );
};

export default UserDetails;
