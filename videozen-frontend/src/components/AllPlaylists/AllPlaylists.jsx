import { Link } from "react-router-dom";

import "./AllPlaylists.css";

import CreatedPlaylists from "./CreatedPlaylists/CreatedPlaylists";
import HorizontalPlaylistCard from "../HorizontalPlaylistCard/HorizontalPlaylistCard";

import { addToHistory } from "../../server/serverUpdate";

import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context";
import Loader from "../Loader/Loader";

const AllPlaylists = ({
  loading: { createdPlaylistsLoading, allPlaylistsLoading },
}) => {
  const { state, dispatch } = useData();
  const { authToken, authUser } = useAuth();

  return (
    <div className="playlists">
      <CreatedPlaylists loading={createdPlaylistsLoading} />
      {allPlaylistsLoading && <Loader />}
      {!allPlaylistsLoading && (
        <>
          <h2 style={{ textAlign: "left" }}>Other Playlists</h2>
          {state.allPlaylists.map((playlist) => (
            <Link
              key={playlist._id}
              to={`/playlist/${playlist._id}/${playlist.videos[0].videoId}`}
              state={playlist.videos[0]}
              style={{ textDecoration: "none", color: "black" }}
              onClick={() =>
                authToken &&
                addToHistory(
                  dispatch,
                  playlist.videos[0],
                  authUser._id,
                  authToken
                )
              }
            >
              <HorizontalPlaylistCard playlist={playlist} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default AllPlaylists;
