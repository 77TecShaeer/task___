import {StyleSheet} from 'react-native';
import {moderateScale} from '../../../../Common/responsiveDimensions';

export const styles = StyleSheet.create({
  container: {flex: 1},
  input: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginVertical: 20,
    backgroundColor: 'red',
  },
  buttonContainer: {
    backgroundColor: '#b7cfff',
    margin: moderateScale(10),
  },
});
