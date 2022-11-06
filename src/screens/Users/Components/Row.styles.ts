import { StyleSheet } from 'react-native';
import { moderateScale, responsiveWidth } from '../../../Common/responsiveDimensions';

export const styles = StyleSheet.create({
  container: {
    elevation: 1,
    padding: moderateScale(5),
    margin: moderateScale(5),
    alignSelf: 'stretch',
    borderColor: 'grey',
  },
  button: {
    width: responsiveWidth(20),
    borderWidth: moderateScale(1),
    borderColor: 'grey',
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
    justifyContent: 'center',
    borderRadius: moderateScale(5)
  },
  containerButtons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'space-between',
  }
});
