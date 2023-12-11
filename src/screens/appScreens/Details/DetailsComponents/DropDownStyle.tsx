import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen} from '../../../../hooks';

export const useDropDownStyle = () => {
  const {hp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        marginVertical: hp(10),
      },
      dropDown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      label: {
        fontSize: 16,
        marginBottom: hp(5),
      },
      place: {
        fontSize: 16,
      },
      selectedText: {fontSize: 16},
    });
  }, []);

  return styles;
};
