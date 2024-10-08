import React, { useState, useEffect } from "react";
import "./Modal.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import sendTelegram from "../../utils/sendTelegram";

const Modal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [phoneError, setPhoneError] = useState(
    "Пожалуйста введите телефон или Email"
  );
  const [emailError, setEmailError] = useState(
    "Пожалуйста введите телефон или Email"
  );
  const [formValid, setFormValid] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  useEffect(() => {
    if (nameError || emailError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, phoneError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);

    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(value).toLowerCase())) {
      !value
        ? !phoneError && phone
          ? setEmailError("")
          : setEmailError("Пожалуйста введите телефон или Email")
        : setEmailError("Некорректный email");
    } else {
      setEmailError("");
      phoneError != "Неверный номер телефона" && setPhoneError("");
    }
  };

  const phoneHandler = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (value.length < 18) {
      !value
        ? !emailError && email
          ? setPhoneError("")
          : setPhoneError("Пожалуйста введите телефон или Email")
        : setPhoneError("Неверный номер телефона");
    } else {
      setPhoneError("");
      emailError != "Некорректный email" && setEmailError("");
    }
  };

  const nameHandler = (e) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-zA-Zа-яА-Я\s]/g, "");
    setName(filteredValue);
    if (!filteredValue) {
      setNameError("Имя не может быть пустым");
    } else {
      setNameError("");
    }
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const openConfirmModal = (e) => {
    e.preventDefault();

    sendTelegram(e);

    setTimeout(() => {
      onClose();
      setFormValid(false);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setOpenConfirm(true);
    }, 1000);

    setTimeout(() => {
      setOpenConfirm(false);
    }, 4000);
  };

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const onPhoneInput = (e) => {
    let input = e.target;

    let inputNumbersValue = getInputNumbersValue(input);

    let formattedInputValue = "";

    let selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length !== selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (inputNumbersValue.length >= 1) {
      formattedInputValue = "+7";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += " (" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    }

    input.value = formattedInputValue;
  };

  const onPhonePaste = (e) => {
    let input = e.target;
    let pasted = e.clipboardData;
    let inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  return (
    <>
      <div
        className={`modal ${isOpen ? "modal__opened" : ""}`}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="modal__container">
          <div className="modal__header">
            <h2 className="modal__title">Оставить заявку</h2>
            <button
              aria-label="Close"
              type="button"
              className="modal__close-button"
              onClick={onClose}
            />
          </div>
          <form className="modal__form" onSubmit={openConfirmModal}>
            <input
              name="name"
              type="text"
              className="modal__input"
              placeholder="Имя"
              minLength="1"
              maxLength="30"
              value={name}
              onChange={nameHandler}
              required
              // onBlur={blurHandler}
              onFocus={blurHandler}
            />
            <span
              className={`modal__error ${
                nameDirty && nameError ? "modal__error_visible" : ""
              }`}
            >
              {nameError}
            </span>
            <input
              name="phone"
              type="tel"
              className="modal__input"
              placeholder="Телефон"
              maxLength="18"
              onInput={onPhoneInput}
              onPaste={onPhonePaste}
              value={phone}
              // onBlur={blurHandler}
              onFocus={blurHandler}
              onChange={phoneHandler}
            />
            <span
              className={`modal__error ${
                phoneDirty && phoneError ? "modal__error_visible" : ""
              }`}
            >
              {phoneError}
            </span>
            <input
              name="email"
              type="email"
              className="modal__input"
              placeholder="Email"
              maxLength="40"
              value={email}
              onChange={emailHandler}
              // onBlur={blurHandler}
              onFocus={blurHandler}
            />
            <span
              className={`modal__error ${
                emailDirty && emailError ? "modal__error_visible" : ""
              }`}
            >
              {emailError}
            </span>

            <textarea
              name="message"
              className="modal__input modal__input-message"
              placeholder="Комментарий"
              maxLength="400"
              value={message}
              onChange={messageHandler}
            ></textarea>
            <button
              type="submit"
              className={`modal__button ${
                formValid ? "" : "modal__button_disabled"
              }`}
              disabled={!formValid}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
      <ConfirmModal isOpen={openConfirm} />
    </>
  );
};

export default Modal;
