import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routeConstant';
import Login from '../screens/authScreens/Login';
import ForgotPassword from '../screens/authScreens/ForgotPassword';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.login}>
      <Stack.Screen name={ROUTES.login} component={Login} />
      <Stack.Screen name={ROUTES.forgotPassword} component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
