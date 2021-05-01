import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";

import "./Videos.css";

import Video from "../Video/Video";
import { useState } from "react";

const Videos = () => {
  const { state } = useData();
  const [searchedText, setSearchedText] = useState("");

  let allVideos = state.allPlaylists.reduce(
    (accumulator, item) => [...accumulator, ...item.videos],
    []
  );

  let searchedVideos = allVideos.filter((video) =>
    video.title.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <div className="videos">
      <input
        type="text"
        value={searchedText}
        className="form-control"
        placeholder="Search for videos by title..."
        onChange={(e) => setSearchedText(e.target.value)}
      />
      {searchedVideos.length === 0 && (
        <h3>
          No Videos found with{" "}
          <em>
            <q>{searchedText}</q>
          </em>
        </h3>
      )}
      <div className="card-row">
        {searchedVideos.map((video) => (
          <Link
            to={`/playlist/allvideos/${video.id}`}
            state={video}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Video
              id={video.id}
              image={video.image}
              ownerImage={video.ownerImage}
              title={video.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
