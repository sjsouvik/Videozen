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
            to={`/createdplaylist/${props.playlistId}/${video.id}`}
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
  const { state } = useData();
  // const image = "https://via.placeholder.com/100x80";

  return (
    <div>
      <h2 className="text-left">Created Playlists</h2>
      {state.createdPlaylists.length === 1 && (
        <div className="empty-playlist">
          <h5 className="text-left">Nothing to show here</h5>
        </div>
      )}
      {state.createdPlaylists.length > 1 && (
        <div>
          {state.createdPlaylists
            .filter((playlist) => playlist.name !== "Watch Later")
            .map((playlist) => (
              // <div className="card vertical" key={playlist.name}>
              //   <img
              //     src={playlist?.image ? playlist.image : image}
              //     alt="thumbnail"
              //   />
              //   <div className="card-body">
              //     <h3 className="card-description">{playlist.name}</h3>
              //     <p className="card-description">
              //       {playlist.videos.length} videos
              //     </p>
              //   </div>
              // </div>
              <CreatedPlaylistsVideos
                videos={playlist.videos}
                playlistName={playlist.name}
                playlistId={playlist.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CreatedPlaylists;
