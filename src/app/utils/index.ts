export const utils = {
  getToken() {
    return localStorage.getItem('token') ?? '';
  },
  setToken(token: string) {
    localStorage.setItem('token', token);
  },
  removeToken() {
    localStorage.removeItem('token');
  },
};
