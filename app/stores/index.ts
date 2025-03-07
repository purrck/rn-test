import axios from 'axios';
import { Post } from '../types/post';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const AuthService = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
};

export const PostService = {
  getPosts: () => api.get<{ posts: Post[] }>('/posts'),
  getPostById: (id: number) => api.get<Post>(`/posts/${id}`),
};
