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
import TextComponent from './DetailsComponents/TextComponent';

const Details = () => {
  const route = useRoute();
  const details = route?.params?.questionList;
  const questions = details?.Questions;

  console.log('questions===', questions);

  //   return <View style={{flex: 1, backgroundColor: 'green'}} />;
  //   const styles = useLoginStyle();

  const renderItem = ({item}) => {
    console.log('renderitemsare', item?.ControlID);
    switch (item.ControlID) {
      case 1:
        return (
          <TextComponent
            QuestionsCode={item?.QuestionsCode}
            QuestionsText={item?.QuestionsText}
            QuestionLabel={item?.QuestionLabel}
            QuestionHeaderDescription={item?.QuestionHeaderDescription}
          />
        );
      case 2:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );

      case 3:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );

      case 4:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 5:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 6:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 7:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 8:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 9:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 10:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 11:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 12:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 13:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );
      case 14:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );

      case 15:
        return (
          <TextComponent qCode={'Q1'} QuestionsText={'Space for normal text'} />
        );

      // Add cases for other control types as needed
      default:
        return null;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        margin: 5,
        paddingLeft: 30,
        marginTop: 150,
        borderColor: 'blue',
      }}>
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={item => item.ControlID.toString()}
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
