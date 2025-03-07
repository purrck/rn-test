export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}
