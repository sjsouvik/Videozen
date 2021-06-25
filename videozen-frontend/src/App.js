import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useAxios } from "./server/useAxios";

import NavBar from "./components/NavBar/NavBar";
import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import PlaylistVideo from "./components/PlaylistVideo/PlaylistVideo";
import Videos from "./components/Videos/Videos";
import Library from "./components/Library/Library";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const { loading: videoLoading } = useAxios("video", "videos");
  const { loading: allPlaylistsLoading } = useAxios(
    "allplaylist",
    "allPlaylists"
  );
  const { loading: createdPlaylistsLoading } = useAxios(
    "createdplaylist",
    "createdPlaylists"
  );
  const { loading: likedVideosLoading } = useAxios("likedvideo", "likedVideos");
  const { loading: watchLaterVideosLoading } = useAxios(
    "watchlater",
    "watchLaterVideos"
  );
  const { loading: historyLoading } = useAxios("history", "history");

  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Videos loading={videoLoading} />} />
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
