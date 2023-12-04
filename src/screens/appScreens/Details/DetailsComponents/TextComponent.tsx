import React from 'react';
import {View, Text, TextInputProps} from 'react-native';
import HTML from 'react-native-render-html';
import AppText from '../../../../components/text/AppText';
import {useTextComponentStyle} from './TextComponentStyle';

interface TextComponentProps extends TextInputProps {
  item: object;
}
const TextComponent: React.FC<TextComponentProps> = ({item}) => {
  const styles = useTextComponentStyle();
  console.log('qtestshowiong', item);
  const qCode = item?.QuestionsCode;
  const qText = item?.QuestionsText;
  const qLabel = item?.QuestionLabel;
  const qHeaderDesc = item?.QuestionHeaderDescription;
  const qMandotry = item?.QuestionsMandatory;
  return (
    <View style={styles.controlContainer}>
      <View style={styles.topRowView}>
        {!!qCode && <AppText style={styles.qCode}>{`${qCode} - `}</AppText>}
        {!!qText && (
          <Text style={styles.controlContainer}>
            <Text style={styles.qText}>{qText}</Text>
            {!!qMandotry && <AppText style={styles.star}>*</AppText>}
          </Text>
        )}
      </View>
      {!!qLabel && (
        <Text style={styles.bottomMargin}>
          <Text style={styles.qLabel}>{qLabel}</Text>
          {!!qMandotry && <AppText style={styles.star}>*</AppText>}
        </Text>
      )}
      {!!qHeaderDesc && <HTML source={{html: qHeaderDesc}} />}
    </View>
  );
};

export default TextComponent;
