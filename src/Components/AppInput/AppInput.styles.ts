import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  moderateScale,
} from '../../Common/responsiveDimensions';

export const styles = StyleSheet.create({
  input: {
    width: responsiveWidth(85),
    alignSelf: 'center',
    height: responsiveHeight(6),
    borderColor: 'grey',
    borderRadius: moderateScale(2),
    marginVertical: moderateScale(5),
    borderWidth: moderateScale(0.2),
    paddingHorizontal: moderateScale(5)
  },
  containerInput: {
    marginHorizontal: moderateScale(10),
  },
  errorMessage: {
    color: 'red',
  },
});
