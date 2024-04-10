const SHOW_MORE_USERS = "SHOW_MORE_USERS";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 40,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingfInProgress: false,
};

export const followUser = (userId) => ({
  type: FOLLOW_USER,
  userId: userId,
});

export const unfollowUser = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});

export const showMoreUsersAC = () => ({
  type: SHOW_MORE_USERS,
});

//будут приходить с сервера
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber,
});

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default usersReducer;
