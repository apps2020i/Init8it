import React from 'react';
import {View, Text, TextInputProps, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';

interface TextComponentProps extends TextInputProps {
  QuestionsCode: string;
  QuestionsText: string;
  QuestionLabel: string;
  QuestionHeaderDescription: string;
}

const TextComponent: React.FC<TextComponentProps> = ({
  QuestionsCode,
  QuestionsText,
  QuestionLabel,
  QuestionHeaderDescription,
}) => {
  console.log('qtestshowiong', QuestionsText);
  return (
    <View style={styles.controlContainer}>
      {!!QuestionsCode && (
        <Text style={styles.text}>{`${QuestionsCode} - `}` </Text>
      )}
      {!!QuestionsText && <Text style={styles.text}>{QuestionsText}</Text>}
      {QuestionLabel && <Text style={styles.text}>{QuestionLabel}</Text>}

      {!!QuestionHeaderDescription && (
        <HTML source={{html: QuestionHeaderDescription}} />
      )}

      {/* {!!qCode && <Text style={styles.text}>{qCode} - </Text>}
      <Text style={styles.text}>{QuestionsText}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black',
  },
  controlContainer: {
    marginBottom: 16,
  },
});

export default TextComponent;
