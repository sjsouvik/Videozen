import { useData } from "../../context/data-context";
import { useParams, NavLink, useLocation } from "react-router-dom";

import "./PlaylistVideo.css";

import CurrentVideo from "./CurrentVideo/CurrentVideo";

const SideMenu = () => {
  const { state } = useData();
  const { playlistName } = useParams();

  const playlistVideos = state.allPlaylists.find(
    (playlist) => playlist.name === playlistName
  ).videos;
  // console.log(playlistName);
  // console.log(playlistVideos);
  return (
    <div>
      <nav className="side-menu">
        {playlistVideos.map((video) => (
          <li className="list stacked-list" style={{ listStyle: "none" }}>
            {video.title}
          </li>
        ))}
      </nav>
    </div>
  );
};

const PlaylistVideo = () => {
  const { state, dispatch } = useData();
  const { playlist, playlistId, videoId } = useParams();

  let playlistVideos = [];

  if (playlist === "playlist") {
    if (playlistId === "allvideos") {
      playlistVideos = state.allPlaylists.reduce(
        (accumulator, item) => [...accumulator, ...item.videos],
        []
      );
    } else {
      playlistVideos = state.allPlaylists.find(
        (playlist) => playlist.id === playlistId
      ).videos;
    }
  } else if (playlist === "createdplaylist") {
    if (playlistId === "likedvideos") {
      playlistVideos = state.likedVideos;
    } else if (playlistId === "history") {
      playlistVideos = state.history;
    } else {
      playlistVideos = state.createdPlaylists.find(
        (playlist) => playlist.id === playlistId
      ).videos;
    }
  }

  return (
    <div className="grid-row">
      <CurrentVideo videoId={videoId} />

      <nav className="playlist-menu">
        {playlistVideos.map((video) => (
          <NavLink
            to={{
              pathname: `/${playlist}/${playlistId}/${video.id}`,
            }}
            state={video}
            activeStyle={{ fontWeight: "bold" }}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() =>
              dispatch({ type: "ADD_TO_HISTORY", payload: { video: video } })
            }
          >
            <li className="videolist">
              <div>
                <img src={video.image} className="thumbnail" />
              </div>
              <div className="title">{video.title}</div>
            </li>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default PlaylistVideo;
