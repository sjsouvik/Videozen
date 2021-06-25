import { useData } from "../../../context/data-context";

import { useState } from "react";
import { useLocation } from "react-router-dom";

import Toast from "../../Toast/Toast";
import ModalPart from "../ModalPart/ModalPart";

import AddPlaylist from "../../../assets/playlist1.svg";

import {
  addToLikedVideos,
  removeFromLikedVideos,
  addToWatchLaterVideos,
  removeFromWatchLaterVideos,
} from "../../../server/serverUpdate";

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
      if (state.likedVideos[i].videoId === videoId) {
        return true;
      }
    }
    return false;
  };

  const isTheVideoAddedToWatchLater = (videoId) => {
    const watchLaterVideos = state.watchLaterVideos;

    for (let i = 0; i < watchLaterVideos.length; i++) {
      if (watchLaterVideos[i].videoId === videoId) {
        return true;
      }
    }

    return false;
  };

  const likeHandler = () => {
    if (isTheVideoLiked(video.videoId)) {
      removeFromLikedVideos(dispatch, video);
    } else {
      addToLikedVideos(dispatch, video);
    }
  };

  const watchLaterHandler = () => {
    if (isTheVideoAddedToWatchLater(video.videoId)) {
      removeFromWatchLaterVideos(dispatch, video);
      utilToast("Removed from Watch Later");
    } else {
      addToWatchLaterVideos(dispatch, video);
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
                    style={
                      isTheVideoLiked(video.videoId) ? { color: "red" } : null
                    }
                  ></ion-icon>
                </span>
                <span className="icon-video" onClick={watchLaterHandler}>
                  <ion-icon
                    name="time"
                    style={
                      isTheVideoAddedToWatchLater(video.videoId)
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
