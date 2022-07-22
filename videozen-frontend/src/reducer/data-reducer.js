import uuid from "react-uuid";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return { ...state, [action.payload.name]: action.payload.data };

    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        createdPlaylists: [
          ...state.createdPlaylists,
          {
            _id: uuid(),
            name: action.payload.name,
            videos: [action.payload.video],
          },
        ],
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        createdPlaylists: state.createdPlaylists.map((playlist) =>
          playlist.name === action.payload.playlistName
            ? {
                ...playlist,
                videos: [...playlist.videos, action.payload.video],
              }
            : playlist
        ),
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        createdPlaylists: state.createdPlaylists.map((playlist) =>
          playlist.name === action.payload.playlistName
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video.videoId !== action.payload.video.videoId
                ),
              }
            : playlist
        ),
      };

    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: [...state.likedVideos, action.payload.video],
      };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (likedVideo) => likedVideo.videoId !== action.payload.video.videoId
        ),
      };

    case "ADD_TO_WATCH_LATER_VIDEOS":
      return {
        ...state,
        watchLaterVideos: [...state.watchLaterVideos, action.payload.video],
      };

    case "REMOVE_FROM_WATCH_LATER_VIDEOS":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (watchLaterVideo) =>
            watchLaterVideo.videoId !== action.payload.video.videoId
        ),
      };

    case "ADD_TO_HISTORY":
      return state.history.find(
        (video) => video.videoId === action.payload.video.videoId
      )
        ? state
        : { ...state, history: [...state.history, action.payload.video] };

    default:
      return state;
  }
};
