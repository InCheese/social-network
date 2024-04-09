import avatar from "../assets/avatar.jpeg";

const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      photoUrl: avatar,
      followed: true,
      fullName: "Inna",
      status: "online",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      photoUrl: avatar,
      followed: false,
      fullName: "Vasya",
      status: "online",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl: avatar,
      followed: true,
      fullName: "Andrew",
      status: "online",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 4,
      photoUrl: avatar,
      followed: false,
      fullName: "Nika",
      status: "online",
      location: { city: "Moscow", country: "Russia" },
    },
  ],
};

export const followAC = (userId) => ({
  type: FOLLOW_USER,
  userId: userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export const showMoreUsersAC = () => ({
  type: SHOW_MORE_USERS,
});

//будут приходить с сервера
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER: {
      let stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
      return stateCopy;
    }
    case UNFOLLOW_USER: {
      let stateCopy = {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
      return stateCopy;
    }
    case SET_USERS:
      return { ...state, users: [...state.users, action.users] };
    default:
      return state;
  }
};

export default usersReducer;
