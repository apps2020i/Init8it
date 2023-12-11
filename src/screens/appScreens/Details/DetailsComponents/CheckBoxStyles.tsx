import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen} from '../../../../hooks';

export const useCheckBoxStyle = () => {
  const {hp, wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        marginBottom: hp(10),
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: hp(5),
      },
      checkboxContainer: {
        marginBottom: 5,
      },
      checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkboxLabel: {
        marginLeft: wp(15),
      },
    });
  }, []);

  return styles;
};
