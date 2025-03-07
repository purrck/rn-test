import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthStore from '../stores/authStore';
import {
  RootStackParamList,
  MainTabParamList,
  PostsStackParamList,
} from '../types/navigation';
import ProfilePage from '../screens/ProfilePage';
import LoginPage from '../screens/LoginPage';
import Icon from 'react-native-vector-icons/AntDesign';
import PostsStack from './PostsStack';
import { observer } from 'mobx-react-lite';
// 创建各导航器实例
const MainTabs = createBottomTabNavigator<MainTabParamList>();
// 主标签导航器
const MainTabNavigator = () => (
  <MainTabs.Navigator
    initialRouteName="PostsStack"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = '';
        if (route.name === 'PostsStack') {
          iconName = 'inbox';
        } else if (route.name === 'ProfilePage') {
          iconName = 'user';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <MainTabs.Screen
      name="PostsStack"
      component={PostsStack}
      options={{ tabBarLabel: '帖子' }}
    />
    <MainTabs.Screen
      name="ProfilePage"
      component={ProfilePage}
      options={{ tabBarLabel: '我的' }}
    />
  </MainTabs.Navigator>
);

const RootNavigationContainer = observer(() => {
  const isLogin = AuthStore.checkLoginState();
  const RootStack = createNativeStackNavigator();
  console.log('RootNavigationContainer', isLogin);
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
});

// 导出导航容器
export default RootNavigationContainer;
