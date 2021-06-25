import { serverRequests } from "./serverRequests";

const userId = "6096352966132b598c40964e";

export const createNewPlaylist = async (dispatch, playlistName, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
  });

  if (!error) {
    dispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: { name: playlistName, video },
    });
  }
};

export const addToPlaylist = async (dispatch, playlistName, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
  });

  if (!error) {
    dispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistName, video },
    });
  }
};

export const removeFromPlaylist = async (dispatch, playlistName, video) => {
  console.log("Video remove handler", video);
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
  });

  if (!error) {
    dispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { playlistName, video },
    });
  }

  return !error;
};

export const addToLikedVideos = async (dispatch, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/likedvideo/${userId}`,
    data: { videos: [video._id] },
  });

  if (!error) {
    dispatch({
      type: "ADD_TO_LIKED_VIDEOS",
      payload: { video },
    });
  }
};

export const removeFromLikedVideos = async (dispatch, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/likedvideo/${userId}`,
    data: { videos: [video._id] },
  });

  if (!error) {
    dispatch({
      type: "REMOVE_FROM_LIKED_VIDEOS",
      payload: { video },
    });
  }
};

export const addToWatchLaterVideos = async (dispatch, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/watchlater/${userId}`,
    data: { videos: [video._id] },
  });

  if (!error) {
    dispatch({
      type: "ADD_TO_WATCH_LATER_VIDEOS",
      payload: { video },
    });
  }
};

export const removeFromWatchLaterVideos = async (dispatch, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/watchlater/${userId}`,
    data: { videos: [video._id] },
  });

  if (!error) {
    dispatch({
      type: "REMOVE_FROM_WATCH_LATER_VIDEOS",
      payload: { video },
    });
  }
};

export const addToHistory = async (dispatch, video) => {
  const { error } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/history/${userId}`,
    data: { videos: [video._id] },
  });

  if (!error) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: { video },
    });
  }
};
