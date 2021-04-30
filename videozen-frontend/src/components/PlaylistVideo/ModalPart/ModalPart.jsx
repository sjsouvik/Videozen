import { useData } from "../../../context/data-context";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import Modal from "../../Modal/Modal";
import Toast from "../../Toast/Toast";

const ModalPart = (props) => {
  let { state: video } = useLocation();

  const [createPlaylist, setCreatePlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const { state, dispatch } = useData();

  const playlists = () => {
    const allPlaylists = state.allPlaylists;
    let partOfPlaylists;

    for (let i = 0; i < allPlaylists.length; i++) {
      for (let j = 0; j < allPlaylists[i].videos.length; j++) {
        if (allPlaylists[i].videos[j].id === video.id) {
          partOfPlaylists = allPlaylists[i].videos[j].partOfPlaylists;

          return partOfPlaylists
            ? partOfPlaylists.reduce((accumulator, playlistName) => {
                return { ...accumulator, [playlistName]: playlistName };
              }, {})
            : 0;
        }
      }
    }
  };

  let partOfPlaylists = playlists();

  const utilToast = (message) => {
    setShowToast(true);
    setToastMessage(message);
    setTimeout(() => setShowToast(false), 2000);
  };

  const updatePlaylistHandler = (e, playlistName) => {
    if (e.target.checked) {
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: { name: playlistName, video: video },
      });
      utilToast(`Added to ${playlistName}`);
    } else {
      dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { name: playlistName, video: video },
      });
      utilToast(`Removed from ${playlistName}`);
    }
  };

  const createPlaylistHandler = () => {
    dispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: { name: newPlaylistName, video: video },
    });
    utilToast(`Added to ${newPlaylistName}`);
    props.openModal(false);
    setCreatePlaylist(false);
    setNewPlaylistName(null);
  };

  return (
    <div>
      <Modal
        show={props.modal}
        close={props.openModal}
        createPlaylist={setCreatePlaylist}
      >
        <h5 style={{ padding: "1rem", margin: "0" }}>Add to playlist</h5>
        <div className="modal-section">
          {state.createdPlaylists.map((playlist) => (
            <label className="playlist-checkbox">
              <input
                type="checkbox"
                checked={playlist.name in partOfPlaylists}
                onChange={(e) => updatePlaylistHandler(e, playlist.name)}
              />
              <span>{playlist.name}</span>
            </label>
          ))}
        </div>
        <div className="modal-section" style={{ cursor: "pointer" }}>
          {!createPlaylist ? (
            <span
              className="create-playlist"
              onClick={() => setCreatePlaylist(true)}
            >
              <ion-icon name="add"></ion-icon>Create Playlist
            </span>
          ) : (
            <div>
              <input
                type="text"
                text={newPlaylistName}
                id="formControlInput"
                class="form-control"
                placeholder="Enter playlist name..."
                onChange={(e) => setNewPlaylistName(e.target.value)}
              />
              <div className="modal-btn">
                <button
                  class="btn btn-primary btn-sm"
                  onClick={createPlaylistHandler}
                >
                  CREATE
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>

      <Toast show={showToast} message={toastMessage} />
    </div>
  );
};

export default ModalPart;
