import { Link } from "react-router-dom";

import { useData } from "../../../context/data-context";
import { useAuth } from "../../../context/auth-context";

import "./CreatedPlaylists.css";

import Video from "../../Video/Video";
import Loader from "../../Loader/Loader";

const CreatedPlaylistsVideos = (props) => {
  return (
    <div>
      <h3 className="text-left">{props.playlistName}</h3>
      <div className="card-grid-row">
        {props.videos.map((video) => (
          <Link
            key={video.videoId}
            to={`/createdplaylist/${props.playlistId}/${video.videoId}`}
            state={video}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Video
              id={video.id}
              title={video.title}
              image={video.image}
              ownerImage={video.ownerImage}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const CreatedPlaylists = ({ loading }) => {
  const {
    state: { createdPlaylists },
  } = useData();

  const { authToken } = useAuth();

  return (
    <section>
      {loading && <Loader />}
      {!loading && (
        <>
          <h2 className="text-left">Created Playlists</h2>
          {!authToken && (
            <div className="empty-playlist">
              <h5 className="text-left">
                Please login to see created playlists
              </h5>
            </div>
          )}
          {authToken && createdPlaylists.length === 0 && (
            <div className="empty-playlist">
              <h5 className="text-left">Nothing to show here</h5>
            </div>
          )}
          {authToken && (
            <div>
              {createdPlaylists.map((playlist) => (
                <CreatedPlaylistsVideos
                  key={playlist._id}
                  videos={playlist.videos}
                  playlistName={playlist.name}
                  playlistId={playlist._id}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default CreatedPlaylists;
