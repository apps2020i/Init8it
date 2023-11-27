import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen, useTheme} from '../../../hooks';

export const useLoginStyle = () => {
  const {hp, wp} = useResponsiveScreen();
  const {colors} = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      lableStyle: {color: colors.white, fontWeight: '700'},
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.whiteSmoke,
      },
      logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      formContainer: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        elevation: 5,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: hp(20),
      },
      input: {
        width: '80%',
        height: hp(40),
        borderColor: colors.lightGray,
        borderWidth: wp(1),
        borderRadius: 5,
        paddingHorizontal: wp(10),
        marginBottom: hp(10),
      },
      loginButton: {
        backgroundColor: colors.darkBlue,
        width: '80%',
        height: hp(43),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(10),
      },
      buttonText: {
        color: colors.white,
        fontWeight: 'bold',
      },
      errorTextStyle: {
        color: colors.toastError,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: wp(34),
        marginBottom: hp(10),
        marginTop: hp(-5),
      },
    });
  }, []);

  return styles;
};
