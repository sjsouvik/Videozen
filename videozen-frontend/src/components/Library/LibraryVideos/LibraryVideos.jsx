import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

import Video from "../../Video/Video";

const LibraryVideos = (props) => {
  const { playlistId, playlistName, videos, loading } = props;

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          <h2 className="text-left">{playlistName}</h2>
          {videos.length === 0 && (
            <h5 className="text-left">Nothing to show here</h5>
          )}
          <div className="card-grid-row">
            {videos.map((video) => (
              <Link
                key={video.videoId}
                to={`/createdplaylist/${playlistId}/${video.videoId}`}
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
        </>
      )}
    </div>
  );
};

export default LibraryVideos;
