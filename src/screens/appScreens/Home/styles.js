import {StyleSheet} from 'react-native';
import {useMemo} from 'react';

export const useLoginStyle = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      },
      text: {
        fontSize: 16,
        marginBottom: 8,
      },
      textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 8,
        paddingHorizontal: 8,
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 8,
      },
      checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      inputIOS: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 8,
        paddingHorizontal: 8,
      },
      inputAndroid: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 8,
        paddingHorizontal: 8,
      },
    });
  }, []);

  return styles;
};
