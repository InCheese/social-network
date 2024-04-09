const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreator = (newPostText) => ({
  type: CHANGE_NEW_POST_TEXT,
  newPostText,
});

const initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 0 },
    { id: 2, message: "Hello", likesCount: 0 },
    { id: 3, message: "Hello", likesCount: 0 },
    { id: 4, message: "Hello", likesCount: 0 },
  ],
  newPostText: "it-t.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case CHANGE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newPostText;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

export default profileReducer;
