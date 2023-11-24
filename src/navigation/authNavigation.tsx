import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routeConstant';
import Login from '../screens/authScreens/login';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.login}>
      <Stack.Screen name={ROUTES.login} component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
