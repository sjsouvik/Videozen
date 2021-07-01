import { serverRequests } from "./serverRequests";

export const loginWithCreds = async (email, password) => {
  const { response, statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/login`,
    data: { email: email, password: password },
  });

  if (statusCode === 401 || statusCode === 400 || statusCode === 422) {
    return {
      statusCode: true,
      message: "Invalid email and password combination",
    };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return response && response.data ? { data: response.data } : { data: null };
};

export const signup = async (firstName, lastName, email, password) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/signup`,
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
  });

  if (statusCode === 422) {
    return {
      error: true,
      message: "Give a valid email to register",
    };
  }

  if (statusCode === 409) {
    return {
      error: true,
      message: "This email is already registered",
    };
  }

  if (statusCode !== 200) {
    return { error: true, message: "Something went wrong" };
  }

  return { message: "Successfully registered" };
};

export const createNewPlaylist = async (
  dispatch,
  playlistName,
  video,
  userId,
  token
) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: { name: playlistName, video },
    });
  }
};

export const addToPlaylist = async (
  dispatch,
  playlistName,
  video,
  userId,
  token
) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistName, video },
    });
  }
};

export const removeFromPlaylist = async (
  dispatch,
  playlistName,
  video,
  userId,
  token
) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/createdplaylist/${userId}`,
    data: { playlist: [{ name: playlistName, videos: [video._id] }] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "REMOVE_FROM_PLAYLIST",
      payload: { playlistName, video },
    });
  }

  return statusCode === 200;
};

export const addToLikedVideos = async (dispatch, video, userId, token) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/likedvideo/${userId}`,
    data: { videos: [video._id] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "ADD_TO_LIKED_VIDEOS",
      payload: { video },
    });
  }
};

export const removeFromLikedVideos = async (dispatch, video, userId, token) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/likedvideo/${userId}`,
    data: { videos: [video._id] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "REMOVE_FROM_LIKED_VIDEOS",
      payload: { video },
    });
  }
};

export const addToWatchLaterVideos = async (dispatch, video, userId, token) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/watchlater/${userId}`,
    data: { videos: [video._id] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "ADD_TO_WATCH_LATER_VIDEOS",
      payload: { video },
    });
  }
};

export const removeFromWatchLaterVideos = async (
  dispatch,
  video,
  userId,
  token
) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/watchlater/${userId}`,
    data: { videos: [video._id] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "REMOVE_FROM_WATCH_LATER_VIDEOS",
      payload: { video },
    });
  }
};

export const addToHistory = async (dispatch, video, userId, token) => {
  const { statusCode } = await serverRequests({
    requestType: "post",
    url: `${process.env.REACT_APP_BACKEND}/history/${userId}`,
    data: { videos: [video._id] },
    token: { headers: { authorization: `Bearer ${token}` } },
  });

  if (statusCode === 200) {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: { video },
    });
  }
};
