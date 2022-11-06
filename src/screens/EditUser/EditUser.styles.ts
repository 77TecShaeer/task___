import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  moderateScale,
} from '../../Common/responsiveDimensions';

export const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  LoginText: {
    fontSize: responsiveFontSize(10),
    fontWeight: '500',
    marginVertical: moderateScale(10),
  },
  welcomeBackText: {
    fontSize: responsiveFontSize(15),
    fontWeight: 'bold',
  },
});
