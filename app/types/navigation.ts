import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  PostDetail: { postId: number };
};

export type MainTabParamList = {
  PostsStack: NavigatorScreenParams<PostsStackParamList>;
  Profile: undefined;
};

export type PostsStackParamList = {
  Posts: undefined;
  PostDetail: { postId: number };
};

export interface RootParamList extends RootStackParamList {}
