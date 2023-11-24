import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Checkbox from '../../../../Checkbox';
import {Picker} from '@react-native-picker/picker';
import {useLoginStyle} from './styles';
import {Database} from '../../../../Database';
import {navigate} from '../../../navigation/rootNavigation';
import {useRoute} from '@react-navigation/native';
import AppTextInput from '../../../components/textInput/AppTextInput';

const Details = () => {
  const route = useRoute();
  const details = route?.params?.questionList;
  const questions = details;

  console.log('questions===', questions);

  //   return <View style={{flex: 1, backgroundColor: 'green'}} />;
  //   const styles = useLoginStyle();

  const renderItem = ({item}) => {
    console.log('detail items', item);
    return <Text>{item?.QuestionsID}</Text>;
    // switch (item?.ControlName) {
    //   case 'TextArea':
    //     return <AppTextInput />;
    // }
    // return (
    //   <View
    //     style={{
    //       marginBottom: 10,
    //       backgroundColor: '#EEEEEE',
    //       height: 60,
    //       justifyContent: 'center',
    //     }}>
    //     <Text style={{marginLeft: 20, fontSize: 16, fontWeight: 'bold'}}>
    //       Helo details
    //     </Text>
    //   </View>
    // );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{height: 120}} />
      <FlatList
        keyExtractor={item => item?.id}
        data={questions}
        contentContainerStyle={{paddingBottom: 30}}
        renderItem={renderItem}
      />
    </View>

    // <View style={styles}>
    //   {testingData.map((requirement, index) => {
    //     switch (requirement.type) {
    //       case 'text':
    //         return (
    //           <Text key={index} style={styles.text}>
    //             {requirement.value}
    //           </Text>
    //         );
    //       case 'textInput':
    //         return (
    //           <TextInput
    //             key={index}
    //             style={styles.textInput}
    //             placeholder={requirement.placeholder}
    //           />
    //         );
    //       case 'dropdown':
    //         return (
    //           <Picker
    //             key={index}
    //             // style={pickerSelectStyles}
    //             items={requirement?.options?.map(option => ({
    //               label: option,
    //               value: option,
    //             }))}
    //             onValueChange={value => console.log(value)}
    //           />
    //         );
    //       case 'image':
    //         return (
    //           <Image
    //             key={index}
    //             style={styles.image}
    //             source={requirement.source}
    //           />
    //         );
    //       case 'checkbox':
    //         return (
    //           <Checkbox
    //             key={index}
    //             style={styles.checkbox}
    //             onChange={() => {}}
    //             label={requirement.label}
    //           />
    //         );
    //       default:
    //         return null;
    //     }
    //   })}
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   textInput: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 8,
//     paddingHorizontal: 8,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 8,
//   },
//   checkbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
// });

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 8,
//     paddingHorizontal: 8,
//   },
//   inputAndroid: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 8,
//     paddingHorizontal: 8,
//   },
// });

export default Details;
