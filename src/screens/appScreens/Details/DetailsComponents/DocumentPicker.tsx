import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useForm, Controller} from 'react-hook-form';
import {useDocumentPickerStyle} from './DocumentPickerStyle';
import {useDispatch} from 'react-redux';
import {setBusinessList} from '../../../../redux/app/appSlice';
import {Question} from '../DataModal';

interface DocumentPickerProps {
  control: any;
  name: string;
  Answer: Array<{id: number; url: string}>;
  item: Question;
}

const DocumentPickerComponent: React.FC<DocumentPickerProps> = ({
  name,
  Answer,
  item,
  control,
}) => {
  const {} = useForm({control});
  const {setValue} = useForm();
  const [selectedFiles, setSelectedFiles] =
    useState<Array<{id: number; url: string}>>(Answer);
  const dispatch = useDispatch();
  const styles = useDocumentPickerStyle();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles, DocumentPicker.types.images],
      });

      if (result.length > 0) {
        const uri = result[0]?.uri;
        const newFile = {id: selectedFiles.length + 1, url: uri};
        const updatedFiles = [...selectedFiles, newFile];

        setValue(name, updatedFiles);

        setSelectedFiles(updatedFiles);
      }
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error('Error picking document:', err);
      }
    }
  };

  useEffect(() => {
    console.log('selectedFiles', selectedFiles);
    const updatedAnswer = selectedFiles?.map(file => file.url).join('|');
    const businessItem = {
      QuestionsID: item.QuestionsID,
      Answer: updatedAnswer,
      ControlID: item.ControlID,
    };
    console.log('businesslistite', businessItem);
    dispatch(setBusinessList([businessItem]));
    console.log('my logs', businessItem);
  }, [selectedFiles, dispatch, item, name]);

  const openInBrowser = (url: string) => {
    Linking.openURL(`https://test.in8it.com/${url}`);
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    // setValue(name, updatedFiles);
  };

  const renderFileIcon = (item: {url: string}, index: number) => {
    const fileExtension = item.url.split('.').pop()?.toLowerCase();

    const renderFileTypeIcon = (iconName: string, label: string) => (
      <View style={styles.customTxtContainer}>
        <Icon name={iconName} size={40} color="#0000FF" />
        <Text style={styles.customTxtLabel}>{label}</Text>
        <Text style={styles.customTxtUrl} numberOfLines={2}>
          {item.url}
        </Text>
      </View>
    );

    switch (fileExtension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return renderFileTypeIcon('file-image-o', 'Img');
      case 'txt':
        return renderFileTypeIcon('file-text-o', 'Txt');
      case 'pdf':
        return renderFileTypeIcon('file-pdf-o', 'Pdf');
      case 'mp4':
        return renderFileTypeIcon('file-video-o', 'ThumbVideo');
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickDocument} style={styles.button}>
        <Text style={styles.buttonText}>Pick a Document</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        <View style={styles.selectedFiles}>
          {selectedFiles?.map((file, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => openInBrowser(file.url)}
              style={styles.urlContainer}>
              {renderFileIcon(file, index)}
              <TouchableOpacity
                style={styles.closeIconContainer}
                onPress={() => handleRemoveFile(index)}>
                <Icon name="close" size={10} color="#FFFFFF" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DocumentPickerComponent;
