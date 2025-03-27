const ModalPopup = ({ id, header, body, footer, onClose, show }) => {
  if (!show) return null;

  return (
    <div
      id={id || "Modal"}
      className={`modal ${show ? "show" : ""}`}
      onClick={onClose}
      role="dialog"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3>{header || "Modal Header"}</h3>
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
        </div>
        <div className="body">{body || <p>This is the modal content.</p>}</div>
        <div className="footer">{footer || "Modal Footer"}</div>
      </div>
    </div>
  );
};

export default ModalPopup;
