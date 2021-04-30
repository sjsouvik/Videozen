const Video = (props) => {
  return (
    <div className="card vertical" key={props.id}>
      <img src={props.image} alt="thumbnail" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
      </div>
    </div>
  );
};

export default Video;
