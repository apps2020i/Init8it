import React from 'react';
import {View, Text, TextInputProps} from 'react-native';
import TextComponent from './TextComponent';
import TextInputComponent from './TextInputComponent';
import {Question} from '../DataModal';
import DatePickerComponent from './DatePickerComponent';
import {Controller} from 'react-hook-form';
import DropDown from './DropDown';
import RadioButton from './RadioButton';
import Checkbox from './CheckBox';
import DocumentPickerComponent from './DocumentPicker';
import DocumentPickerController from './DocumentPickerController';

interface RenderItemsProps extends TextInputProps {
  item: Question;
  index: number;
  control: any;
  onTextInputChange: (value: string) => void;
  onDateChange: (date: Date) => void;
  onTimeChange: (time: Date) => void;
}

// const handleDateChange = (dateString: string) => {
//   console.log('my date is', dateString);
//   // Handle the date change
// };
// const handleTimeChange = (timeString: string) => {
//   console.log('timeString is', timeString);
// };
// const onDropDownChange = (value: string) => {
//   // Handle the selected value
//   console.log('Selected value:', value);
// };

const RenderItems: React.FC<RenderItemsProps> = ({
  item,
  control,
  index,
  onTimeChange,
  onTextInputChange,
}) => {
  let conditionalComponent = null;

  switch (item?.ControlID) {
    case 1:
    case 2:
    case 3:
    case 4:
      console.log('utsssdfdf0', item?.Answer);
      conditionalComponent = (
        <TextInputComponent
          control={control}
          name={`Answers[${index}].Answer`}
          Answer={item?.Answer}
          ControlID={item?.ControlID}
          onChangeText={onTextInputChange}
        />
      );
      break;
    case 10:
      conditionalComponent = (
        <DocumentPickerController
          control={control}
          item={item}
          name={`Answers[${index}].Answer`}
          defaultValue={
            Array.isArray(item?.Answer)
              ? item.Answer
              : typeof item?.Answer === 'string'
              ? item?.Answer.split('|').map((path, index) => ({
                  id: index + 1,
                  url: path,
                }))
              : []
          }
        />
      );
      // conditionalComponent = (
      //   <DocumentPickerComponent
      //     control={control}
      //     name={`answers[${index}].answer`}
      //     item={item}
      //     answer={
      //       Array.isArray(item?.Answer)
      //         ? item.Answer
      //         : typeof item?.Answer === 'string'
      //         ? item?.Answer.split('|').map((path, index) => ({
      //             id: index + 1,
      //             url: path,
      //           }))
      //         : []
      //     }
      //   />
      // );
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
