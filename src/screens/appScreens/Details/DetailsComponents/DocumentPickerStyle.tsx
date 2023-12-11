import {StyleSheet} from 'react-native';

export const useDocumentPickerStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 8,
      marginBottom: 16,
    },
    buttonText: {
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16,
    },
    selectedFiles: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    urlContainer: {
      marginRight: 16,
    },
    iconContainer: {
      position: 'relative',
    },
    closeIconContainer: {
      position: 'absolute',
      top: 5,
      right: 5,
      backgroundColor: 'red',
      borderRadius: 12,
      padding: 4,
      zIndex: 1,
    },
    customTxtContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DFF0D8', // Light green background
      borderRadius: 8,
      padding: 10,
      marginTop: 5,
    },
    customTxtLabel: {
      marginTop: 5,
      fontSize: 12,
      color: '#0000FF',
    },
    customTxtUrl: {
      marginTop: 5,
      width: 60,
      fontSize: 10,
      color: '#000000',
    },
  });
};
