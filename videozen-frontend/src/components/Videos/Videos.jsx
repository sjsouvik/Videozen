import { useData } from "../../context/data-context";
import { Link } from "react-router-dom";

import Loader from "../Loader/Loader";

import "./Videos.css";

import Video from "../Video/Video";
import { useState } from "react";

import { addToHistory } from "../../server/serverUpdate";

import Empty from "../../assets/empty.svg";

const Videos = ({ loading }) => {
  const { state, dispatch } = useData();
  const [searchedText, setSearchedText] = useState("");

  let allVideos = state.videos;

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
      {loading && <Loader />}
      <div>
        {!loading && searchedVideos.length === 0 && (
          <div>
            <h3>
              No Videos found with{" "}
              <em>
                <q>{searchedText}</q>
              </em>
            </h3>
            <img src={Empty} alt="empty list" className="empty-list" />
          </div>
        )}
        <div className="card-row">
          {searchedVideos.map((video) => (
            <Link
              to={`/playlist/allvideos/${video.videoId}`}
              state={video}
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => addToHistory(dispatch, video)}
              key={video._id}
            >
              <Video
                id={video.videoId}
                image={video.image}
                ownerImage={video.ownerImage}
                title={video.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
