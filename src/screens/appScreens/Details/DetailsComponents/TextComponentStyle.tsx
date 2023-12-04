import {PressableStateCallbackType, StyleSheet} from 'react-native';
// import {useResponsiveScreen, useTheme} from '../../hooks';
// import {SHADOW} from '../../styles';
import {ReactNode, useMemo} from 'react';
// import {DEFAULT_COLORS} from '../../styles';
import {useResponsiveScreen, useTheme} from '../../../../hooks';

export const useTextComponentStyle = () => {
  const {colors} = useTheme();
  const {wp, hp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      qCode: {fontSize: 18, color: 'black', fontWeight: '500'},
      topRowView: {
        flexDirection: 'row',
      },
      star: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
      },
      qLabel: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
      },
      qText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
      },
      text: {
        fontSize: 18,
        color: 'black',
      },
      controlContainer: {
        flex: 1,
        marginBottom: hp(20),
      },
      bottomMargin: {
        marginBottom: hp(20),
      },
    });
  }, []);

  return styles;
};
