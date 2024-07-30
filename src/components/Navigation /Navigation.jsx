import React, { useState } from "react";
import "./Navigation.css";
import nb from "../../images/Nb.svg";
import instagram from "../../images/instagram.svg";
import dzen from "../../images/dzen.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpenMenu = (id) => {
    scrollToSection(id);
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
              <button
                className="nav__link"
                onClick={() => handleOpenMenu("author")}
              >
                ОБ АВТОРАХ
              </button>
            </li>
            <li>
              <button
                className="nav__link"
                onClick={() => handleOpenMenu("about")}
              >
                О КНИГЕ
              </button>
            </li>
            <li>
              <button
                className="nav__link"
                onClick={() => handleOpenMenu("reviews")}
              >
                РЕЦЕНЗИИ И ОТЗЫВЫ
              </button>
            </li>
            <li>
              <button
                className="nav__link"
                onClick={() => handleOpenMenu("policy")}
              >
                ПОЛИТИКА ПРОДАЖ
              </button>
            </li>

            <li>
              <button
                className="nav__link"
                onClick={() => handleOpenMenu("contacts")}
              >
                КОНТАКТЫ
              </button>
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
          onClick={() => setOpenMenu(!openMenu)}
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
