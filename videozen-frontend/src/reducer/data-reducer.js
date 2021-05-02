import uuid from "react-uuid";

const findPlaylistName = (allPlaylists, videoId) => {
  // return allPlaylists.map((playlist) =>
  //   playlist.videos.filter((video, playlist) =>
  //     video.id === videoId ? playlist.name : ""
  //   )
  // );

  for (let i = 0; i < allPlaylists.length; i++) {
    for (let j = 0; j < allPlaylists[i].videos.length; j++) {
      if (allPlaylists[i].videos[j].id === videoId) {
        return allPlaylists[i].name;
      }
    }
  }
};

export const dataReducer = (state, action) => {
  const playlistName = findPlaylistName(
    state.allPlaylists,
    action.payload.video.id
  );

  switch (action.type) {
    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        allPlaylists: state.allPlaylists.map((playlist) =>
          playlist.name === playlistName
            ? {
                ...playlist,
                videos: playlist.videos.map((video) =>
                  video.id === action.payload.video.id
                    ? {
                        ...video,
                        partOfPlaylists: [
                          ...video.partOfPlaylists,
                          action.payload.name,
                        ],
                      }
                    : video
                ),
              }
            : playlist
        ),
        createdPlaylists: [
          ...state.createdPlaylists,
          {
            id: uuid(),
            name: action.payload.name,
            image: action.payload.video.image,
            videos: [action.payload.video],
          },
        ],
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        allPlaylists: state.allPlaylists.map((playlist) =>
          playlist.name === playlistName
            ? {
                ...playlist,
                videos: playlist.videos.map((video) =>
                  video.id === action.payload.video.id
                    ? {
                        ...video,
                        partOfPlaylists: [
                          ...video.partOfPlaylists,
                          action.payload.name,
                        ],
                      }
                    : video
                ),
              }
            : playlist
        ),
        createdPlaylists: state.createdPlaylists.map((playlist) =>
          playlist.name === action.payload.name
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
        allPlaylists: state.allPlaylists.map((playlist) =>
          playlist.name === playlistName
            ? {
                ...playlist,
                videos: playlist.videos.map((video) =>
                  video.id === action.payload.video.id
                    ? {
                        ...video,
                        partOfPlaylists: video.partOfPlaylists.filter(
                          (partOfPlaylistName) =>
                            partOfPlaylistName !== action.payload.name
                        ),
                      }
                    : video
                ),
              }
            : playlist
        ),
        createdPlaylists: state.createdPlaylists.map((playlist) =>
          playlist.name === action.payload.name
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video.id !== action.payload.video.id
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
          (likedVideo) => likedVideo.id !== action.payload.video.id
        ),
      };

    case "ADD_TO_HISTORY":
      return state.history.find((video) => video.id === action.payload.video.id)
        ? state
        : { ...state, history: [...state.history, action.payload.video] };

    default:
      return state;
  }
};
