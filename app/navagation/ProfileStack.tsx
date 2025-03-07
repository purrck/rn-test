import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../screens/ProfilePage';
import LoginPage from '../screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
}
