import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {
  useForm,
  SubmitHandler,
  useController,
  UseFormReturn,
} from 'react-hook-form';
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

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      Answers: questions.map(item => {
        console.log('show me the queas', question);

        return {
          Answer:
            item.ControlID === 10
              ? item.Answer.split('|').map((url, index) => ({
                  id: index + 1,
                  url,
                }))
              : item.Answer,
          QuestionsID: item.QuestionsID,
          ControlID: item.ControlID,
        };
      }),
    },
  });

  const onSubmit: SubmitHandler<UseFormReturn> = data => {
    console.log('Form data:', data);

    if (Object.keys(errors).length === 0) {
      console.log('Answers are', data.Answers);

      const updatedAnswers = data.Answers.map(Answer => {
        const {QuestionsID, Answer: selectedDocuments} = Answer;

        const updatedDocuments = Array.isArray(selectedDocuments)
          ? selectedDocuments.map(
              (document: {id: number; url: string}) => document.url,
            )
          : [selectedDocuments];

        return {
          QuestionsID,
          Answer: updatedDocuments.join('|'),
        };
      });

      console.log('updatedAnswers====', updatedAnswers);
      dispatch(setBusinessList(updatedAnswers));
    } else {
      console.log('Validation error: At least one document is required');
    }
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <RenderItems
      index={index}
      item={item}
      control={control}
      onTextInputChange={(value: string) => {
        console.log('Values==', value);
      }}
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
