import React from "react";
import "./About.css";
import image1 from "../../images/about1.webp";
import image2 from "../../images/about2.webp";
import link from "../../images/link-outline.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <a
          className="about__link"
          target="_blank"
          href="https://www.nbgarden.ru/book_1/"
        >
          <p className="about__paragraph">Узнать что было в 1 части</p>
          <img className="about__image-link" src={link} alt="image of link" />
        </a>
        <h1 className="about__title">О Книге</h1>
        <div className="about__wrapper">
          <div className="about__block">
            <p className="about__text">
              Эта книга о лесе и лесных участках, о кусочке природного и
              рукотворного ландшафта с лесными деревьями внутри ограды вашего
              загородного дома.
              <img
                className="about__image"
                src={image1}
                alt="image of garden"
              />
              Автор, Наталья Борисова, любит Лес и свою работу ландшафтного
              архитектора и с удовольствием делится опытом и знаниями по
              проектированию участков с лесным контекстом. В книге обсуждается
              базовый ассортимент древесно-кустарниковых и травянистых растений,
              используемых автором в проектах лесных участков.
            </p>

          </div>

          <div className="about__block">
            <img className="about__image" src={image2} alt="image of garden" />
            <p className="about__text">
              В качестве иллюстрации в книге представлены планы и описания
              реализованных проектов лесных участков ландшафтной мастерской
              NB-GARDEN с 2019 по 2024 г. Более 250 авторских фотографий делает
              возможным почувствовать атмосферу леса, создание и реализацию
              проекта и заглянуть в эти сады. Книга «NB.САД. Лесные участки»
              является логическим продолжением книги «NB.САД 17 проектов
              ландшафтной мастерской NB-GARDEN», вышедшей в 2019 г.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
