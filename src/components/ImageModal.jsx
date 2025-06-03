import React from "react";
import "./ImageModal.scss";

const ImageModal = ({ src, onClose }) => {
  if (!src) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <img src={src} alt="Enlarged favorite" />
    </div>
  );
};

export default ImageModal;
