import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const CHANGE_USER_STATUS = "CHANGE_USER_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 0 },
    { id: 2, message: "Hello", likesCount: 0 },
    { id: 3, message: "Hello", likesCount: 0 },
    { id: 4, message: "Hello", likesCount: 0 },
  ],
  newPostText: "it-t.com",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    case CHANGE_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default: {
      return state;
    }
  }
};

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const updateUserStatus = (status) => ({
  type: UPDATE_USER_STATUS,
  status,
});

export const changeUserStatus = (status) => ({
  type: CHANGE_USER_STATUS,
  status,
});

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(updateUserStatus(status));
    }
  });
};

export default profileReducer;
