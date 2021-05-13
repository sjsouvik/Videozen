import { Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import PlaylistVideo from "./components/PlaylistVideo/PlaylistVideo";
import Videos from "./components/Videos/Videos";
import Library from "./components/Library/Library";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <NavBar />

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
