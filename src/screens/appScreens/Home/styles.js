import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen} from '../../../hooks';

export const useHomeStyle = () => {
  const {hp, wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
      },
      hit: {fontSize: 22, color: 'white'},
      dummyBtn: {
        position: 'absolute',
        top: 120,
        right: 20,
        height: 60,
        width: 60,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        zIndex: 999,
      },
      touch: {
        backgroundColor: '#fff',
        padding: hp(20),
        marginVertical: hp(8),
        marginHorizontal: wp(16),
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
      },
      secName: {fontSize: 16, fontWeight: 'bold'},
    });
  }, []);

  return styles;
};
