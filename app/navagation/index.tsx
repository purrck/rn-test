import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {
  RootStackParamList,
  MainTabParamList,
  PostsStackParamList,
} from './types';
import LoginPage from '../screens/LoginPage';
import PostsPage from '../screens/PostsPage';
import PostDetailPage from '../screens/PostsDetailPage';
import ProfilePage from '../screens/ProfilePage';
import { Ionicons } from '@expo/vector-icons';

// 创建各导航器实例
const RootStack = createNativeStackNavigator<RootStackParamList>();
const MainTabs = createBottomTabNavigator<MainTabParamList>();
const PostsStack = createNativeStackNavigator<PostsStackParamList>();

// Posts 堆栈导航器
const PostsStackNavigator = () => (
  <PostsStack.Navigator>
    <PostsStack.Screen
      name="Posts"
      component={PostsPage}
      options={{ headerTitle: '全部帖子' }}
    />
    <PostsStack.Screen
      name="PostDetail"
      component={PostDetailPage}
      options={({ route }) => ({
        title: `帖子 #${route.params.postId}`,
      })}
    />
  </PostsStack.Navigator>
);

// 主标签导航器
const MainTabNavigator = () => (
  <MainTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = '';

        if (route.name === 'PostsStack') {
          iconName = 'list-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <MainTabs.Screen
      name="PostsStack"
      component={PostsStackNavigator}
      options={{ tabBarLabel: '帖子' }}
    />
    <MainTabs.Screen
      name="Profile"
      component={ProfilePage}
      options={{ tabBarLabel: '我的' }}
    />
  </MainTabs.Navigator>
);

// 根导航器
const AppNavigator = () => (
  <RootStack.Navigator initialRouteName="MainTabs">
    <RootStack.Screen
      name="MainTabs"
      component={MainTabNavigator}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="Login"
      component={LoginPage}
      options={{ headerTitle: '用户登录' }}
    />
  </RootStack.Navigator>
);

const RootNavigationContainer = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

// 导出导航容器
export default RootNavigationContainer;
