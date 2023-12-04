import React from 'react';
import {View, Text, TextInputProps} from 'react-native';
import TextComponent from './TextComponent';
import TextInputComponent from './TextInputComponent';
import {Question} from '../DataModal';
import DatePickerComponent from './DatePickerComponent';
import {Controller} from 'react-hook-form';

interface RenderItemsProps extends TextInputProps {
  item: Question;
  index: number;
  control: any;
  // onTextInputChange: (value: string) => void;
  onTextInputChange: (value: string) => void;
  onDateChange: (date: Date) => void;
  onTimeChange: (time: Date) => void;
}
const RenderItems: React.FC<RenderItemsProps> = ({
  item,
  control,
  index,
  // onTextInputChange,
  onTextInputChange,
  onDateChange,
  onTimeChange,
}) => {
  let conditionalComponent = null;

  const handleDateChange = (dateString: string) => {
    console.log('my date is', dateString);
    // Handle the date change
  };
  const handleTimeChange = (timeString: string) => {
    console.log('timeString is', timeString);
  };
  switch (item?.ControlID) {
    case 1:
    case 2:
    case 3:
    case 4:
      conditionalComponent = (
        <TextInputComponent
          control={control}
          name={`answers[${index}].answer`}
          label={item?.ControlName}
          answer={item?.Answer}
          ControlID={item?.ControlID}
          onChangeText={onTextInputChange}
        />
      );
      break;
    case 5:
      conditionalComponent = (
        <Controller
          control={control}
          defaultValue={`answers[${index}].answer`}
          name={`answers[${index}].answer`}
          render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
            <DatePickerComponent
              control={control}
              name={`answers[${index}].answer`}
              mode="date" // or 'datetime'
              answer={item?.Answer}
              onDateChange={date => onChange(date)}
              onChange={date => onChange(date)} // Important: Pass the onChange function to the DatePickerComponent
            />
          )}
        />
      );
      break;
    case 6:
      conditionalComponent = (
        <DatePickerComponent
          control={control}
          name={`answers[${index}].answer`}
          answer={item?.Answer}
          mode={'datetime'}
          onTimeChange={onTimeChange}
        />
      );
      break;
    case 7:
      conditionalComponent = <Text style={{color: 'red'}}>Select</Text>;
      break;
    case 8:
      conditionalComponent = (
        <Text style={{color: 'red'}}>Radio Buttons Will Render</Text>
      );
      break;
    case 9:
      conditionalComponent = (
        <Text style={{color: 'red'}}>CheckBox Will Render</Text>
      );
      break;
    case 10:
      conditionalComponent = (
        <Text style={{color: 'red'}}>File UI Will Render</Text>
      );
      break;
    default:
      conditionalComponent = null;
  }

  return (
    <View style={{marginHorizontal: 10}}>
      <TextComponent item={item} />
      {conditionalComponent}
    </View>
  );
};

export default RenderItems;
