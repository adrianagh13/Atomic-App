import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cellphone, Home, Name, Registered} from '../screens';

const Stack = createNativeStackNavigator();

const Navigate = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Name" component={Name} />
    <Stack.Screen name="Cellphone" component={Cellphone} />
    <Stack.Screen name="Registered" component={Registered} />
  </Stack.Navigator>
);

export default Navigate;
