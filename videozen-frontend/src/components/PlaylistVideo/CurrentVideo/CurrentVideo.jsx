import { useData } from "../../../context/data-context";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Toast from "../../Toast/Toast";
import ModalPart from "../ModalPart/ModalPart";

import AddPlaylist from "../../../assets/playlist1.svg";

const CurrentVideo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const { state: video } = useLocation();
  const { state, dispatch } = useData();

  const utilToast = (message) => {
    setShowToast(true);
    setToastMessage(message);
    setTimeout(() => setShowToast(false), 2000);
  };

  const isTheVideoLiked = (videoId) => {
    for (let i = 0; i < state.likedVideos.length; i++) {
      if (state.likedVideos[i].id === videoId) {
        return true;
      }
    }
    return false;
  };

  const isTheVideoAddedToWatchLater = (videoId) => {
    const watchLaterVideos = state.createdPlaylists[0].videos;

    for (let i = 0; i < watchLaterVideos.length; i++) {
      if (watchLaterVideos[i].id === videoId) {
        return true;
      }
    }

    return false;
  };

  const likeHandler = () => {
    if (isTheVideoLiked(video.id)) {
      dispatch({
        type: "REMOVE_FROM_LIKED_VIDEOS",
        payload: { video: video },
      });
    } else {
      dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: { video: video } });
    }
  };

  const watchLaterHandler = () => {
    if (isTheVideoAddedToWatchLater(video.id)) {
      dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { name: "Watch Later", video: video },
      });
      utilToast("Removed from Watch Later");
    } else {
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { name: "Watch Later", video: video },
      });
      utilToast("Added to Watch Later");
    }
  };

  return (
    <div>
      <div className="video">
        <div className="video-card">
          <iframe
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
            allowFullScreen
          ></iframe>
          <div className="video-card-body">
            <div className="video-title">
              <div>{video.title}</div>
              <div className="video-icons">
                <span className="icon-video" onClick={likeHandler}>
                  <ion-icon
                    name="heart"
                    style={isTheVideoLiked(video.id) ? { color: "red" } : null}
                  ></ion-icon>
                </span>
                <span className="icon-video" onClick={watchLaterHandler}>
                  <ion-icon
                    name="time"
                    style={
                      isTheVideoAddedToWatchLater(video.id)
                        ? { color: "red" }
                        : null
                    }
                  ></ion-icon>
                </span>
                <span
                  className="icon-video icon-save"
                  onClick={() => setShowModal(true)}
                >
                  {/* <ion-icon name="bookmark"></ion-icon> */}
                  <img src={AddPlaylist} />
                </span>
              </div>
            </div>
            <div className="video-description">
              <img
                src={video.ownerImage}
                alt="image"
                className="avatar avatar-img"
              />
              <p>{video.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Toast show={showToast} message={toastMessage} />
      {showModal && <ModalPart modal={showModal} openModal={setShowModal} />}
    </div>
  );
};

export default CurrentVideo;
