import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 0 },
    { id: 2, message: "Hello", likesCount: 0 },
    { id: 3, message: "Hello", likesCount: 0 },
    { id: 4, message: "Hello", likesCount: 0 },
  ],
  newPostText: "it-t.com",
  profile: null,
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
    case CHANGE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newPostText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default: {
      return state;
    }
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreator = (newPostText) => ({
  type: CHANGE_NEW_POST_TEXT,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export default profileReducer;
