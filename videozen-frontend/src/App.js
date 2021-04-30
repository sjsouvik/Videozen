import { Routes, NavLink, Link, Route } from "react-router-dom";

import "./App.css";

import { useData } from "./context/data-context";

import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import PlaylistVideo from "./components/PlaylistVideo/PlaylistVideo";
import Videos from "./components/Videos/Videos";
import Library from "./components/Library/Library";
import NotFound from "./components/NotFound/NotFound";

import playlist from "./assets/playlist.svg";
import library from "./assets/video.svg";
import login from "./assets/user.svg";

const App = () => {
  const { state, dispatch } = useData();

  return (
    <div className="App">
      <header>
        <nav className="page-navigation">
          <div className="brand">
            <Link to="/">
              <h3 className="nav-brand">VIDEOZEN</h3>
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <img src={login} className="svg-icon" />
              <div className="nav-text">Login</div>
            </li>
            <li className="nav-item">
              <NavLink to="allplaylists" activeStyle={{ fontWeight: "bold" }}>
                <img src={playlist} className="svg-icon" />
                <div className="nav-text">Playlists</div>
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              <NavLink to="library" activeStyle={{ fontWeight: "bold" }}>
                <img src={library} className="svg-icon" />
                <div className="nav-text">Library</div>
              </NavLink>{" "}
            </li>
            {/* 
            <li className="nav-item">
              <button className="btn btn-secondary">SIGN UP</button>
            </li> */}
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="allplaylists" element={<AllPlaylists />} />
          <Route
            path=":playlist/:playlistId/:videoId"
            element={<PlaylistVideo />}
          />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
