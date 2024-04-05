import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//import { state } from "./state";
import { addPost } from "./state";
import { changeNewPostText } from "./state";
const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </BrowserRouter>
  );
};
