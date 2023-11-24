import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Checkbox = ({label, onChange}) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <Text>{label}</Text>
      <Text>{checked ? 'Checked' : 'Unchecked'}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
