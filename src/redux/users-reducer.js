const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  users: [],
  pageSize: 40,
  totalCount: 0,
  currentPage: 3,
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

export const setCurrentPageAC = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setTotalCountAC = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
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
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    default:
      return state;
  }
};

export default usersReducer;
