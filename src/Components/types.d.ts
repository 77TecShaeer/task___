import {TextInputProps} from 'react-native';

interface AppInputProps extends TextInputProps {
  errorMessage?: string;
}
