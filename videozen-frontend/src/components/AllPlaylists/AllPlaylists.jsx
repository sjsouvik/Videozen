import { useData } from "../../context/data-context";

import { Link } from "react-router-dom";

import "./AllPlaylists.css";

import CreatedPlaylists from "./CreatedPlaylists/CreatedPlaylists";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";

const AllPlaylists = () => {
  const { state, dispatch } = useData();
  return (
    <div className="playlists">
      <CreatedPlaylists />
      <h2 style={{ textAlign: "left" }}>Other Playlists</h2>
      {state.allPlaylists.map((playlist) => (
        <Link
          to={`/playlist/${playlist.id}/${playlist.videos[0].id}`}
          state={playlist.videos[0]}
          style={{ textDecoration: "none", color: "black" }}
        >
          {/* <div className="card vertical" key={playlist.name}>
            <img src={playlist.image} alt="thumbnail" />
            <div className="card-body">
              <h3 className="card-description">{playlist.name}</h3>
              <p className="card-description">
                {playlist.videos.length} videos
              </p>
            </div>
          </div> */}
          <HorizontalPlaylistCard playlist={playlist} />
        </Link>
      ))}
    </div>
  );
};

export default AllPlaylists;
