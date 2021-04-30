import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      class="modal"
      style={props.show ? { display: "block" } : { display: "none" }}
    >
      <div class="modal-content">
        <span
          class="close-button"
          onClick={() => {
            props.close(false);
            props.createPlaylist(false);
          }}
        >
          <ion-icon name="close-circle"></ion-icon>
        </span>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
