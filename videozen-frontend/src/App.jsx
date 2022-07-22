import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useAxios } from "./server/useAxios";

import NavBar from "./components/NavBar/NavBar";
import AllPlaylists from "./components/AllPlaylists/AllPlaylists";
import PlaylistVideo from "./components/PlaylistVideo/PlaylistVideo";
import Videos from "./components/Videos/Videos";
import Library from "./components/Library/Library";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

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
          <Route
            path="/allplaylists"
            element={
              <AllPlaylists
                loading={{ allPlaylistsLoading, createdPlaylistsLoading }}
              />
            }
          />
          <Route
            path="/:playlist/:playlistId/:videoId"
            element={<PlaylistVideo />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute
            path="/library"
            element={
              <Library
                loading={{
                  createdPlaylistsLoading,
                  likedVideosLoading,
                  watchLaterVideosLoading,
                  historyLoading,
                }}
              />
            }
          />
          <PrivateRoute path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
