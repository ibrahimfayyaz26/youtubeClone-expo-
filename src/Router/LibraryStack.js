import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from './Header';
import Library from '../Screens/LibraryScreen';

const Stack = createNativeStackNavigator();

const LibraryStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Screen name="Home" component={Library} />
    </Stack.Navigator>
  );
};

export default LibraryStack;
