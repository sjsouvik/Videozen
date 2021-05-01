import "./Video.css";

const Video = (props) => {
  return (
    <div className="card vertical" key={props.id}>
      <img src={props.image} alt="thumbnail" className="vertical-img" />
      <div
        className="card-detail"
        // style={{ flexDirection: "row", alignItems: "center" }}
      >
        <img src={props.ownerImage} className="avatar avatar-img" />
        <span className="title">{props.title}</span>
      </div>
    </div>
  );
};

export default Video;
