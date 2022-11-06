import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppInputProps} from '../types';
import {styles} from './AppInput.styles';

const AppInput = ({onBlur, onChangeText, value, ...props}: AppInputProps) => {
  return (
    <View style={styles.containerInput}>
      {props.placeholder && <Text>{props.placeholder}</Text>}
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.input,
          borderColor: props.errorMessage ? 'red' : 'grey',
        }}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        {...props}
        placeholder=""
      />
      {props.errorMessage && (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      )}
    </View>
  );
};

export default AppInput;
