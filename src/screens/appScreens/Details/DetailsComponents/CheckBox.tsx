import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useCheckBoxStyle} from './CheckBoxStyles';
import HTML from 'react-native-render-html';
interface CheckboxProps {
  control: any;
  name: string;
  options: any[];
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({control, name, options, label}) => {
  const styles = useCheckBoxStyle();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        {options.map(option => (
          <View
            key={option.IdQuestionControlOption}
            style={styles.checkboxContainer}>
            <Controller
              control={control}
              name={`${name}.${option.IdQuestionControlOption}`}
              render={({field}) => (
                <TouchableOpacity onPress={() => field.onChange(!field.value)}>
                  <View style={styles.checkbox}>
                    <Icon
                      name={field.value ? 'check-square' : 'square'}
                      size={20}
                      color={field.value ? 'blue' : 'black'}
                    />
                    <Text style={styles.checkboxLabel}>
                      <HTML source={{html: option.ControlItemName}} />
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Checkbox;
