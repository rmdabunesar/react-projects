import React, { useState } from "react";
import ModalPopup from "./ModalPopup";
import "./style.css";

const ModalPopupTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const toggleModalPopup = () => {
    setShowModalPopup((prev) => !prev);
  };

  return (
    <div className="modal-container">
      <button onClick={toggleModalPopup}>Open Modal Popup</button>
      <ModalPopup
        show={showModalPopup}
        onClose={toggleModalPopup}
        header="Custom Header"
        body={<div>Customized Modal Body Content</div>}
        footer="Custom Footer"
      />
    </div>
  );
};

export default ModalPopupTest;
