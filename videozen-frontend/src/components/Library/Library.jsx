import { useData } from "../../context/data-context";

import { Link } from "react-router-dom";

import Video from "../Video/Video";

const LibraryVideos = (props) => {
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>{props.playlistName}</h2>
      {props.videos.length === 0 && (
        <h5 style={{ textAlign: "left" }}>Nothing to show here</h5>
      )}
      <div className="card-row">
        {props.videos.map((video) => (
          <Link
            to={`/createdplaylist/${props.playlistId}/${video.id}`}
            state={video}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Video id={video.id} title={video.title} image={video.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

const Library = () => {
  const { state } = useData();

  return (
    <div style={{ padding: "0 2rem" }}>
      {state.createdPlaylists.map((playlist) => (
        <LibraryVideos
          videos={playlist.videos}
          playlistName={playlist.name}
          playlistId={playlist.id}
        />
      ))}
      <div style={{ paddingTop: "2rem" }}>
        {
          <LibraryVideos
            videos={state.likedVideos}
            playlistName="Liked Videos"
            playlistId="likedvideos"
          />
        }
      </div>
    </div>
  );
};

export default Library;
