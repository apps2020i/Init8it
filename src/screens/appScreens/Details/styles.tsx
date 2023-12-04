import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen, useTheme} from '../../../hooks';

export const useDetailsStyle = () => {
  const {hp, wp} = useResponsiveScreen();
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {flex: 1, backgroundColor: '#ffffff'},
      seprator: {
        height: 1,
        marginBottom: hp(20),
        overflow: 'visible',
        width: '100%',
        backgroundColor: 'gray',
      },
      contentCont: {paddingBottom: 120},
      lableStyle: {color: colors.white, fontWeight: '700'},
      loginButton: {
        backgroundColor: colors.darkBlue,
        width: '80%',
        height: hp(45),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(10),
        position: 'absolute',
        bottom: hp(50),
        zIndex: 999,
        alignSelf: 'center',
      },
    });
  }, []);

  return styles;
};
