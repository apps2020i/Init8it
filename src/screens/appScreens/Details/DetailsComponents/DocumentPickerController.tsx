import React from 'react';
import {Controller, SubmitHandler} from 'react-hook-form';
import DocumentPickerComponent from './DocumentPicker';
import {Text, TouchableOpacity, View} from 'react-native';

interface DocumentPickerControllerProps {
  control: any;
  name: string;
  defaultValue?: any;
  item: any;
}

const DocumentPickerController: React.FC<DocumentPickerControllerProps> = ({
  control,
  name,
  defaultValue,
  item,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || []}
      render={({field, fieldState}) => {
        console.log('sdfdsfsf', fieldState, field);

        return (
          <View>
            <DocumentPickerComponent
              {...field}
              Answer={field.value}
              item={item}
            />
            {fieldState?.invalid && (
              <Text style={{color: 'blue', marginTop: 5}}>
                {'Validation error: At least one document is required'}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
};

export default DocumentPickerController;
