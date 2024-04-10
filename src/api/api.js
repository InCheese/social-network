import axios from "axios";

const URL = "https://social-network.samuraijs.com/api/1.0/users";

export const getUsers = (currentPage = 1, pageSize = 30) => {
  return axios
    .get(URL + `?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
    .then((response) => response.data);
};
