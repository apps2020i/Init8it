import React from 'react';
import {TextInputProps} from 'react-native';
import {Controller} from 'react-hook-form';
import {useTextInputComponentStyle} from './TextInputComponentStyle';
import AppTextInput from '../../../../components/textInput/AppTextInput';
import {Question} from '../DataModal';
interface TextInputComponentProps extends TextInputProps {
  control: any;
  name: string;
  label: string;
  Answer: string;
  ControlID: number;
  onChangeText: (text: string) => void;
}

const getTypes = (controlId: number) => {
  if (controlId === 2) {
    return 'number';
  } else if (controlId === 3) {
    return 'email';
  } else {
    return 'default';
  }
};
const TextInputComponent: React.FC<TextInputComponentProps> = ({
  control,
  name,
  label,
  ControlID,
  Answer,
  onChangeText,
}) => {
  console.log('Answeris', Answer);
  const styles = useTextInputComponentStyle();
  return (
    <Controller
      defaultValue={name}
      control={control}
      name={name}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <AppTextInput
          style={ControlID === 4 ? styles.textArea : styles.inputStyle}
          placeholderTextColor={'#aaa'}
          // value={value}
          defaultValue={Answer}
          placeholder={Answer ? Answer : 'enter something..'}
          multiline={ControlID === 4}
          numberOfLines={ControlID === 4 ? 2 : 1}
          onBlur={onBlur}
          // onChange={onChange}
          onChangeText={onChange}
          error={error?.message}
          autoCorrect={false}
          type={getTypes(ControlID)}
        />
      )}
    />
  );
};

export default TextInputComponent;
