import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };

    default:
      return state;
  }
};

export const setUserData = (id, login, email) => ({
  type: SET_USER_DATA,
  data: { id, login, email },
});

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setUserData(id, login, email));
    }
  });
};
export default authReducer;
