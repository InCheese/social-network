import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = ({ state, addPost, changeNewPostText }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element=<Profile
              posts={state.profilePage.posts}
              addPost={addPost}
              newPostText={state.profilePage.newPostText}
              changeNewPostText={changeNewPostText}
            />
          />
          <Route path="/dialogs/*" element=<Dialogs /> />
          <Route path="/news" element=<News /> />
          <Route path="/music" element=<Music /> />
          <Route path="/settings" element=<Settings /> />
        </Routes>
      </div>
    </div>
  );
};

export default App;
