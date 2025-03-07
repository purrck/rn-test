import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginPage';
import PostsScreen from '../screens/PostsPage';
import PostDetailScreen from '../screens/PostsDetailPage';
import { RootStackParamList } from '../types/navigation';
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="Posts"
      component={PostsScreen}
      options={{ headerLeft: () => null }} // 禁用返回按钮
    />
    <Stack.Screen name="PostsDetailPage" component={PostDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
