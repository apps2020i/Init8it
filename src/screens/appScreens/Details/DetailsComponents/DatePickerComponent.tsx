import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
interface DatePickerComponentProps {
  onDateChange?: (date: Date) => void;
  name: string;
  onTimeChange?: (time: Date) => void;
  mode: 'date' | 'datetime';
  answer: string;
  ControlID: number;
  control: any;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  onDateChange,
  onTimeChange,
  mode,
  answer,
  name,
  ControlID,
  control,
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<TextInput>(null);

  const onTextInputFocus = () => {
    setShowDatePicker(true);
  };

  const onDateChangeHandler = (selectedDate: Date) => {
    console.log('Selected time and date', selectedDate);

    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (mode === 'date' && onDateChange) {
      onDateChange(selectedDate);
    } else if (mode === 'datetime' && onTimeChange) {
      onTimeChange(selectedDate);
    }

    setDate(selectedDate); // Update the state with the selected date
    setInputValue(selectedDate.toISOString().split('T')[0]); // Update the input value
  };

  const onTextInputChange = (text: string) => {
    setInputValue(text);
  };

  const hideDatePicker = () => {
    if (Platform.OS === 'ios') {
      setShowDatePicker(false);
    }
  };

  const onCalendarIconPress = () => {
    // Focus the TextInput
    if (datePickerRef.current) {
      datePickerRef.current.focus();
    }
  };

  const closeModal = () => {
    hideDatePicker();
  };

  return (
    <TouchableWithoutFeedback onPress={onTextInputFocus}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onCalendarIconPress}
          style={styles.iconContainer}>
          <Icon name="calendar" size={20} color="#555" />
        </TouchableOpacity>
        <TextInput
          ref={datePickerRef}
          style={styles.input}
          value={inputValue}
          placeholder="Select date"
          onFocus={onTextInputFocus}
          onChangeText={onTextInputChange}
          keyboardType="numeric"
          onBlur={hideDatePicker}
          placeholderTextColor="#999"
        />

        <Modal
          transparent={true}
          animationType="slide"
          visible={showDatePicker}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>
            <View style={styles.datePickerContainer}>
              <DatePicker
                date={date || new Date()}
                onDateChange={onDateChangeHandler}
                mode={mode === 'date' ? 'date' : 'datetime'}
                androidVariant="iosClone"
                fadeToColor="none"
              />
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flex: 1,
    paddingLeft: 40,
    paddingRight: 10,
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DatePickerComponent;
