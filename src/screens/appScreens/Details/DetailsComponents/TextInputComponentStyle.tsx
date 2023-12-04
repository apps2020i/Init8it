import {PressableStateCallbackType, StyleSheet} from 'react-native';
// import {useResponsiveScreen, useTheme} from '../../hooks';
// import {SHADOW} from '../../styles';
import {useMemo} from 'react';
// import {DEFAULT_COLORS} from '../../styles';
import {useResponsiveScreen, useTheme} from '../../../../hooks';

export const useTextInputComponentStyle = () => {
  const {colors} = useTheme();
  const {wp, hp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      inputStyle: {
        flex: 1,
        // width: '80%',
        height: hp(40),
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: wp(10),
        marginBottom: hp(10),
      },
      textArea: {
        flex: 1,
        // width: '100%',
        minHeight: hp(40),
        borderColor: colors.gray,
        borderWidth: 1,
        maxHeight: hp(120),
        borderRadius: 5,
        paddingHorizontal: wp(10),
        marginBottom: hp(10),
      },
    });
  }, []);

  return styles;
};
