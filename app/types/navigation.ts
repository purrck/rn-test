import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  LoginPage: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  PostsStack: NavigatorScreenParams<PostsStackParamList>;
  ProfilePage: undefined;
};

export type PostsStackParamList = {
  PostsPage: undefined;
  PostsDetailPage: { postId: number };
};

export interface RootParamList extends RootStackParamList {}
