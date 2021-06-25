import { Link } from "react-router-dom";

import Video from "../../Video/Video";

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
            to={`/createdplaylist/${props.playlistId}/${video.videoId}`}
            state={video}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Video
              id={video.videoId}
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

export default LibraryVideos;
