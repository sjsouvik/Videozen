import { useData } from "../../context/data-context";

import { Link } from "react-router-dom";

import "./AllPlaylists.css";

import CreatedPlaylists from "./CreatedPlaylists/CreatedPlaylists";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";

import { addToHistory } from "../../server/serverUpdate";

const AllPlaylists = () => {
  const { state, dispatch } = useData();

  return (
    <div className="playlists">
      <CreatedPlaylists />

      <h2 style={{ textAlign: "left" }}>Other Playlists</h2>
      {state.allPlaylists.map((playlist) => (
        <Link
          to={`/playlist/${playlist._id}/${playlist.videos[0].videoId}`}
          state={playlist.videos[0]}
          style={{ textDecoration: "none", color: "black" }}
          onClick={() => addToHistory(dispatch, playlist.videos[0])}
        >
          <HorizontalPlaylistCard playlist={playlist} />
        </Link>
      ))}
    </div>
  );
};

export default AllPlaylists;
