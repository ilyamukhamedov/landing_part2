import React from "react";
import "./Policy.css";
import book from "../../images/policyBook.webp";

const Policy = ({ isOpen }) => {
  return (
    <div className="policy" id="policy">
      <div className="policy__container">
        <h1 className="policy__title">Политика Продаж</h1>
        <p className="policy__description">
          Мы предлагаем возможность оптовой покупки от 6 книг. <br />
          Для оформления заказа, пожалуйста, заполните форму ниже. <br /> Мы
          свяжется с вами в кратчайшие сроки для у точнения деталей.
        </p>
        <button className="policy__button" onClick={isOpen}>
          заказать
        </button>
        <p className="policy__text">
          Если вас интересует розничная покупка, вы можете обратиться к нашим
          партнерам <br />
          по адресу:
          <br />
          <a className="policy__link" href="https://grifbook.ru/contacts">
            grifbook.ru
          </a>
          <br /> АРХ ЛАВКА Москва, ул. Рождественка, д. 11
        </p>
        <img
          loading="lazy"
          className="policy__image"
          src={book}
          alt="image of the book"
        />
        <img
          loading="lazy"
          className="policy__image1"
          src={book}
          alt="image of the book"
        />
      </div>
    </div>
  );
};

export default Policy;
