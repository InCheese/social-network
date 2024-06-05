import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

//экземпляр axios с нужными настройками
const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": "77b03694-e7c9-461f-a471-650bdc9bd4a7",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 30) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(userId) {
    return instance.post(`/follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`/follow/${userId}`);
  },

  //в дальнейшем зарефакторю
  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`);
  },

  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },

  updateStatus(status) {
    return instance.put(`/profile/status/`, { status: status });
  },
};

export const authAPI = {
  me() {
    return instance.get("auth/me", { withCredentials: true });
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe});
  },
  
  logout() {
    return instance.delete('auth/login');
  }
};
