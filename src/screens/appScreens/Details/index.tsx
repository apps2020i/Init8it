import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import validationSchema from './DetailsComponents/validationSchema';
import RenderItems from './DetailsComponents/RenderItems';
import Header from '../../../components/header/Header';
import {useRoute} from '@react-navigation/native';
import {DataModel} from './DataModal';
import {useDetailsStyle} from './styles';
import AppButton from '../../../components/button/AppButton';
import {useDispatch} from 'react-redux';
import {setBusinessList} from '../../../redux/app/appSlice';

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => {
  const dispatch = useDispatch();

  const styles = useDetailsStyle();
  const route = useRoute();
  const details: DataModel = route?.params?.questionList;
  const question = details?.Questions;

  const [questions, setQuestions] = useState(question);

  const handleTextInputChange = async (text: string, index: number) => {
    setQuestions((prevQuestions: any[]) =>
      prevQuestions.map((question, i) =>
        i === index
          ? {...question, Answer: text} // Update the specific key
          : question,
      ),
    );

    console.log('question is updateing', questions);
  };

  const handleTimeChange = (time: Date, index: number) => {
    const updatedFormValues = [...formValues];
    updatedFormValues[index].time = time;
    // setFormValues(updatedFormValues);
  };

  const handleDateChange = (date: Date, index: number) => {
    const updatedFormValues = [...formValues];
    updatedFormValues[index].date = date;
    setFormValues(updatedFormValues);
  };

  const {
    handleSubmit,
    control,
    getValues,
    formState: {},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      answers: questions.map(item => {
        return {
          answer: item.Answer,
          QuestionsID: item.QuestionsID,
        };
      }),
    },
  });

  const onSubmit = () => {
    const {answers} = getValues();
    console.log('answersare', answers);
    dispatch(setBusinessList(answers));
  };
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <RenderItems
      // onTextInputChange={value => handleTextInputChange(value, index)}
      // onDateChange={dateString => handleDateChange(dateString, index)}
      // onTimeChange={timeString => handleTimeChange(timeString, index)}
      index={index}
      item={item}
      control={control}
    />
  );

  const renderSeparator = () => <View style={styles.seprator} />;

  return (
    <View style={styles.container}>
      <Header title="This space for header" />
      <FlatList
        contentContainerStyle={styles.contentCont}
        data={questions}
        renderItem={renderItem}
        keyExtractor={item => item.ControlID.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
      <AppButton
        style={styles.loginButton}
        title="Save Details"
        onPress={handleSubmit(onSubmit)}
        labelStyle={styles.lableStyle}
      />
    </View>
  );
};

export default Details;
