import React, { useState } from "react";
import "./Navigation.css";
import nb from "../../images/Nb.svg";
import instagram from "../../images/instagram.svg";
import dzen from "../../images/dzen.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="nav">
        <div
          className={`nav__container ${
            openMenu ? "nav__container-active" : ""
          }`}
        >
          <ul className="nav__links">
            <li>
              <a href="#author" className="nav__link" onClick={handleOpenMenu}>
                ОБ АВТОРАХ
              </a>
            </li>
            <li>
              <a href="#about" className="nav__link" onClick={handleOpenMenu}>
                О КНИГЕ
              </a>
            </li>
            <li>
              <a
                href="#fragments"
                className="nav__link"
                onClick={handleOpenMenu}
              >
                ФРАГМЕНТЫ И ОТЗЫВЫ
              </a>
            </li>
            <li>
              <a href="#policy" className="nav__link" onClick={handleOpenMenu}>
                ПОЛИТИКА ПРОДАЖ
              </a>
            </li>

            <li>
              <a
                href="#contacts"
                className="nav__link"
                onClick={handleOpenMenu}
              >
                КОНТАКТЫ
              </a>
            </li>
          </ul>
          <div className="social">
            <a href="https://nbgarden.ru" target="_blank">
              <img
                loading="lazy"
                className="social__icon"
                src={nb}
                alt="NB-Garden icon"
              />
            </a>
            <a href="https://dzen.ru/nbgarden" target="_blank">
              <img
                loading="lazy"
                className="social__icon"
                src={dzen}
                alt="Yandex Dzen icon"
              />
            </a>
            <a href="https://www.instagram.com/nbgarden" target="_blank">
              <img
                loading="lazy"
                className="social__icon"
                src={instagram}
                alt="Instagram icon"
              />
            </a>
          </div>
        </div>

        <div
          className={`nav__btn ${openMenu ? "nav__btn-active" : ""}`}
          onClick={handleOpenMenu}
        >
          {openMenu ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
