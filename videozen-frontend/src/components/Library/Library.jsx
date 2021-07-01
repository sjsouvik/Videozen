import { useData } from "../../context/data-context";

import LibraryVideos from "./LibraryVideos/LibraryVideos";

const Library = ({ loading }) => {
  const { state } = useData();
  const {
    createdPlaylistsLoading,
    likedVideosLoading,
    watchLaterVideosLoading,
    historyLoading,
  } = loading;

  return (
    <div style={{ padding: "0 2rem" }}>
      {state.createdPlaylists.map((playlist) => (
        <LibraryVideos
          key={playlist._id}
          videos={playlist.videos}
          playlistName={playlist.name}
          playlistId={playlist._id}
          loading={createdPlaylistsLoading}
        />
      ))}
      <div style={{ paddingTop: "2rem" }}>
        {
          <LibraryVideos
            videos={state.watchLaterVideos}
            playlistName="Watch Later"
            playlistId="watchlater"
            loading={watchLaterVideosLoading}
          />
        }
      </div>
      <div style={{ paddingTop: "2rem" }}>
        {
          <LibraryVideos
            videos={state.likedVideos}
            playlistName="Liked Videos"
            playlistId="likedvideos"
            loading={likedVideosLoading}
          />
        }
      </div>
      <div style={{ paddingTop: "2rem" }}>
        {
          <LibraryVideos
            videos={state.history}
            playlistName="History"
            playlistId="history"
            loading={historyLoading}
          />
        }
      </div>
    </div>
  );
};

export default Library;
