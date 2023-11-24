import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routeConstant';
import Home from '../screens/appScreens/Home';
import Details from '../screens/appScreens/Details';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.home}>
      <Stack.Screen name={ROUTES.home} component={Home} />
      <Stack.Screen name={ROUTES.details} component={Details} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
