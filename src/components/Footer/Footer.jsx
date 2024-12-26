import React from "react";
import "./Footer.css";
import whatsapp from "../../images/whatsappcolor.svg";
import vk from "../../images/vk.svg";
import mail from "../../images/mail.svg";
import nb from "../../images/Nb.svg";

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer__container">
        <h1 className="footer__title">контакты</h1>
        <div className="footer__wrapper">
          <div className="footer__box">
            <h2 className="footer__name">NB-Garden</h2>
            <p className="footer__text">
              Ландшафтная мастерская <br /> Натальи Борисовой
            </p>
          </div>
          <div className="footer__box">
            <div className="footer__block">
              <img
                loading="lazy"
                className="footer__img"
                src={whatsapp}
                alt="whatsApp icon"
              />
              <a
                className="footer__info"
                href="https://wa.me/+79169926957"
                target="_blank"
              >
                +7 (916) 992-69-57
              </a>
            </div>
            <div className="footer__block">
              <img
                loading="lazy"
                className="footer__img footer__img-white"
                src={mail}
                alt="mail icon"
              />
              <a
                className="footer__info"
                href="mailto:book@nb-garden.ru"
                target="_blank"
              >
                book@nb-garden.ru
              </a>
            </div>
            <div className="footer__block">
              <img
                loading="lazy"
                className="footer__img footer__img-white"
                src={nb}
                alt="mail icon"
              />
              <div className="footer__web">
                <a
                  className="footer__info"
                  href="https://nbgarden.ru"
                  target="_blank"
                >
                  nbgarden.ru
                </a>
                <a
                  className="footer__info"
                  href="https://nb-garden.ru"
                  target="_blank"
                >
                  nb-garden.ru
                </a>
              </div>
            </div>
            <div className="footer__block">
              <img
                loading="lazy"
                className="footer__img"
                src={vk}
                alt="vk icon"
              />
              <a
                className="footer__info"
                href="https://vk.com/nbgarden"
                target="_blank"
              >
                Вконтакте
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © 2024 by{" "}
        <a
          className="footer__link"
          href="https://www.ilyam.tech/"
          target="_blank"
        >
          Ilya
        </a>
      </p>
    </div>
  );
};

export default Footer;
