import { useData } from "../../context/data-context";

import LibraryVideos from "./LibraryVideos/LibraryVideos";

const Library = () => {
  const { state } = useData();

  return (
    <div style={{ padding: "0 2rem" }}>
      {state.createdPlaylists.map((playlist) => (
        <LibraryVideos
          videos={playlist.videos}
          playlistName={playlist.name}
          playlistId={playlist.id}
        />
      ))}
      <div style={{ paddingTop: "2rem" }}>
        {
          <LibraryVideos
            videos={state.likedVideos}
            playlistName="Liked Videos"
            playlistId="likedvideos"
          />
        }
      </div>
    </div>
  );
};

export default Library;
