import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {replace} from '../../navigation/rootNavigation';
import Routes from '../../routes/Routes';
import {ROUTES} from '../../constants/routeConstant';
import RNBootSplash from 'react-native-bootsplash';
import {getData} from '../../helpers/localstorage';
import {ASYNC_STORE_VAR} from '../../constants/constants';
import {RootState} from '@reduxjs/toolkit/query';
import {setToken, setUser} from '../../redux/auth/authSlice';

const Splash = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      const user = await getData(ASYNC_STORE_VAR.user);
      if (user) {
        setUser(user);
        replace(ROUTES.app);
      } else {
        replace(ROUTES.auth);
      }
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Helo splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 140,
    width: 100,
    resizeMode: 'contain',
  },
});
