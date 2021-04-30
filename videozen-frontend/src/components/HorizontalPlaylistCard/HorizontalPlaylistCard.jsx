const HorizontalPlaylistCard = (props) => {
  return (
    <div className="card horizontal" key={props.playlist.name}>
      <img
        src={props.playlist.image}
        alt="thumbnail"
        className="horizontal-card-image"
      />
      <div className="card-body">
        <div className="horizontal-section">
          <p className="product-title ">{props.playlist.name}</p>
        </div>
        <div className="horizontal-section">
          <p>{props.playlist.description}</p>
        </div>
        <div className="horizontal-section">
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj"
            alt="image"
            className="avatar avatar-img"
          />
          <em>{props.playlist.owner}</em>
        </div>
        <div className="horizontal-section">
          <p>{props.playlist.videos.length} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPlaylistCard;
