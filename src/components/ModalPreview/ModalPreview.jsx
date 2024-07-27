import React from "react";
import "./ModalPreview.css";

const ModalPreview = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`modal__preview ${isOpen ? "modal__preview-opened" : ""}`}
    >
      <div
        className="modal__preview-container"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          loading="lazy"
          className="modal__preview-image"
          src={imageSrc}
          alt="image of the book"
        />
        <button
          type="button"
          className="modal__preview-button"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalPreview;
