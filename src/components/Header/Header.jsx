import React from "react";
import "./Header.css";
import Navigation from "../Navigation /Navigation";
import book from "../../images/bookImage.jpg";

const Header = () => {
  return (
    <div className="header">
      <Navigation />
      <div className="header__container">
        <div className="header__text">
          <h1 className="header__name">Наталья Борисова</h1>
          <h2 className="header__title">NB. Сад</h2>
          <p className="header__description">
            17 проектов ландшафтной <br />
            мастерской NB-GARDEN
          </p>
          <button type="button" className="header__button" onClick={""}>
            новая книга
          </button>
        </div>
        <img
          loading="lazy"
          className="header__book"
          src={book}
          alt="image of the book"
        />
      </div>
    </div>
  );
};

export default Header;
