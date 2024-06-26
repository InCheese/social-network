import { Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/:userId?" element=<ProfileContainer /> />
          <Route path="/dialogs/*" element=<DialogsContainer /> />
          <Route path="/news" element=<News /> />
          <Route path="/music" element=<Music /> />
          <Route path="/settings" element=<Settings /> />
          <Route path="/users" element=<UsersContainer /> />
          <Route path="/login" element=<LoginPage /> />
        </Routes>
      </div>
    </div>
  );
};

export default App;
