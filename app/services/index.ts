import axios from 'axios';
import { Post } from '../types/post';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export const AuthService = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
  getMe: (token: string) =>
    api.get('auth/me', {
      /* providing accessToken in bearer */
      method: 'GET',
      headers: {
        Authorization: `${'Bearer ' + token}`, // Pass JWT via Authorization header
      },
    }),
};

export const PostService = {
  getPosts: () => api.get<{ posts: Post[] }>('/posts'),
  getPostById: (id: number) => api.get<Post>(`/posts/${id}`),
};
