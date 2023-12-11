import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDropDownStyle} from './DropDownStyle';
import {useResponsiveScreen} from '../../../../hooks';
import {Controller} from 'react-hook-form';

interface DropDownProps {
  control: any;
  name: string;
  Answer: string;
  onDropDownChange: (value: string) => void;
  options: {IdQuestionControlOption: number; ControlItemName: string}[];
  ControlName: string;
}

const DropDown: FC<DropDownProps> = ({
  control,
  name,
  Answer,
  onDropDownChange,
  options,
  ControlName,
}) => {
  const [selectedValue, setSelectedValue] = useState(Answer);
  const styles = useDropDownStyle();
  const {hp} = useResponsiveScreen();

  return (
    <View style={styles.container}>
      <Controller
        defaultValue={name}
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <Dropdown
            style={styles.dropDown}
            placeholderStyle={styles.place}
            selectedTextStyle={styles.selectedText}
            data={options.map(option => ({
              label: option.ControlItemName,
              value: option.ControlItemName,
            }))}
            maxHeight={hp(3100)}
            labelField="label"
            valueField="value"
            placeholder={ControlName}
            // onChangeText={onChange}
            searchPlaceholder="Search..."
            value={selectedValue}
            onChange={item => {
              setSelectedValue(item.value);
              onDropDownChange(item.value);
            }}
          />
        )}
      />
    </View>
  );
};

export default DropDown;
