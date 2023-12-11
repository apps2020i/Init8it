import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRadioButtonStyle} from './RadioButtonStyle';
import {DEFAULT_COLORS} from '../../../../styles';
import {Controller} from 'react-hook-form';

interface RadioButtonProps {
  control: any;
  name: string;
  Answer: string | null;
  onRadioChange: (value: string) => void;
  options: {
    IdQuestionControlOption: number;
    ControlItemName: string;
    ControlItemConditionValue: any;
    IdQuestionDependent: number;
    ControlItemSortOrder: number;
    ControlResultCriteria: any;
  }[];
  ControlName: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  value,
  onRadioChange,
  options,
  control,
  name,
}) => {
  const styles = useRadioButtonStyle();

  const handleRadioPress = (selectedValue: string) => {
    onRadioChange(selectedValue);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => (
        <View style={styles.container}>
          {options?.map(option => (
            <TouchableOpacity
              key={option.IdQuestionControlOption}
              style={styles.radioButton}
              onPress={() => onChange(option.ControlItemName)}>
              <Icon
                name={
                  value === option.ControlItemName ? 'dot-circle-o' : 'circle-o'
                }
                size={20}
                color={
                  value === option.ControlItemName
                    ? DEFAULT_COLORS.blue
                    : 'gray'
                }
              />
              <Text style={styles.radioLabel}>{option.ControlItemName}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    />
  );
};

export default RadioButton;
