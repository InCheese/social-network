import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = () => {
  const posts = [
    { id: 1, message: "Hello1" },
    { id: 2, message: "Hello2" },
    { id: 3, message: "Hello3" },
    { id: 4, message: "Hello4" },
  ];
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element=<Profile posts={posts} /> />
            <Route path="/dialogs/*" element=<Dialogs /> />
            <Route path="/news" element=<News /> />
            <Route path="/music" element=<Music /> />
            <Route path="/settings" element=<Settings /> />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
