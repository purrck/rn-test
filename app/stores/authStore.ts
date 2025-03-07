import { makeAutoObservable } from 'mobx';
import { User } from '../types/post';
const emptyUser = {
  id: -1,
  username: '',
  email: '',
  token: '',
};
class AuthStore {
  user: User = emptyUser;
  isAuthenticated = false;
  constructor() {
    makeAutoObservable(this);
  }

  login(user: User) {
    this.user = user;
    this.isAuthenticated = true;
  }

  logout() {
    this.user = emptyUser;
    this.isAuthenticated = false;
  }
  checkLoginState() {
    return this.isAuthenticated;
  }
}

export default new AuthStore();
