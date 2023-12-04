import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/appScreens/Home';
import Details from '../screens/appScreens/Details';
import {DataModel} from '../screens/appScreens/Details/DataModal';

type RootStackParamList = {
  Home: undefined;
  Details: {questionList: DataModel};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Details'} component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
