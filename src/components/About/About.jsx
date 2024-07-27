import React from "react";
import "./About.css";
import image1 from "../../images/about1.webp";
import image2 from "../../images/about2.webp";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <h1 className="about__title">О Книге</h1>
        <div className="about__wrapper">
          <div className="about__block">
            <img className="about__image" src={image1} alt="image of garden" />

            <p className="about__text">
              Эта книга рассказывает о замечательных садах, созданных
              ландшафтным архитектором Натальей Борисовой, руководителем
              ландшафтной мастерской NB-GARDEN, и Евгением Корнеевым –
              мастерами, нашедшими свой стиль и свой неповторимый авторский
              почерк. Авторы делятся секретами работы своей творческой
              ландшафтной мастерской и рассказывают об основных подходах и
              принципах проектирования и создания садов.
            </p>
          </div>

          <div className="about__block">
            <p className="about__text">
              В книгу вошла антология проектов, реализованных в 2004–2018 годах.
              Большое количество фотографий и планов делает возможным заглянуть
              в эти сады и окунуться в атмосферу творческого поиска, озарений и
              находок. Приведенные списки основных растений позволяют
              заинтересованному читателю, любящему свой сад и природу, глубже
              вникнуть в замысел авторов.
            </p>
            <img className="about__image" src={image2} alt="image of garden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
