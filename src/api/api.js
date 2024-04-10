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
};

export const followUnfollowAPI = {
  follow(userId = 2) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },

  unfollow(userId = 2) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
