import { Link } from "react-router-dom";

import { useData } from "../../../context/data-context";

import "./CreatedPlaylists.css";

import Video from "../../Video/Video";

const CreatedPlaylistsVideos = (props) => {
  return (
    <div>
      <h3 className="text-left">{props.playlistName}</h3>
      <div className="card-row">
        {props.videos.map((video) => (
          <Link
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

const CreatedPlaylists = () => {
  const {
    state: { createdPlaylists },
  } = useData();

  return (
    <section>
      <h2 className="text-left">Created Playlists</h2>
      {createdPlaylists.length === 0 && (
        <div className="empty-playlist">
          <h5 className="text-left">Nothing to show here</h5>
        </div>
      )}
      <div>
        {createdPlaylists.map((playlist) => (
          <CreatedPlaylistsVideos
            videos={playlist.videos}
            playlistName={playlist.name}
            playlistId={playlist._id}
          />
        ))}
      </div>
    </section>
  );
};

export default CreatedPlaylists;
