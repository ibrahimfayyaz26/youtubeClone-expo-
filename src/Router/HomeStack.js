import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreen';

import Header from './Header';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
