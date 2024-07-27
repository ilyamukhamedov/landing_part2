import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen }) => {
  return (
    <div className={`confirm ${isOpen ? "confirm__opened" : ""}`}>
      <div className="confirm__container">
        <h1 className="confirm__title">Спасибо за заявку!</h1>
        <p className="confirm__description">
          Наш менеджер свяжется с вами в течение дня.
        </p>
      </div>
    </div>
  );
};

export default ConfirmModal;
