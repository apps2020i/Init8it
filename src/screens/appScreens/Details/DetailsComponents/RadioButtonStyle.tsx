import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen} from '../../../../hooks';

export const useRadioButtonStyle = () => {
  const {hp, wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        marginVertical: hp(10),
        flexDirection: 'row',
      },
      label: {
        fontSize: 16,
        marginBottom: hp(5),
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(5),
        marginEnd: wp(15),
      },
      radioLabel: {
        marginLeft: wp(10),
        fontSize: 16,
      },
    });
  }, []);

  return styles;
};
