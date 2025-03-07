import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsPage from '../screens/PostsPage';
import PostsDetailPage from '../screens/PostsDetailPage';
const Stack = createNativeStackNavigator();

export default function PostsStack() {
  console.log('LoginPage');
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === 'PostsPage' ? false : true,
      })}>
      <Stack.Screen name="PostsPage" component={PostsPage} />
      <Stack.Screen
        name="PostsDetailPage"
        options={{ title: '帖子详情' }}
        component={PostsDetailPage}
      />
    </Stack.Navigator>
  );
}
