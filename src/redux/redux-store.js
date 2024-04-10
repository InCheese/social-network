import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  auth: authReducer,
  form: formReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
