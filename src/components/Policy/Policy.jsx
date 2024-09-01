import React from "react";
import "./Policy.css";
import book from "../../images/policyBook.webp";

const Policy = ({ isOpen }) => {
  return (
    <div className="policy" id="policy">
      <div className="policy__container">
        <h1 className="policy__title">Политика Продаж</h1>
        <p className="policy__description">
          Мы предлагаем возможность оптовой покупки от 3 книг. <br />
          Для оформления заказа, пожалуйста, заполните форму ниже. <br /> Мы
          свяжется с вами в кратчайшие сроки для у точнения деталей.
        </p>
        <button className="policy__button" onClick={isOpen}>
          заказать
        </button>
        <p className="policy__text">
          Если вас интересует розничная покупка, вы можете обратиться к нашим
          партнерам:
          <br />
          <a
            className="policy__link"
            href="https://zstrela-books.ru/books/tproduct/451363602-641744385392-nbsad-lesnie-uchastki"
            target="_blank"
          >
            Зеленая стрела г. Санкт-Петербург
          </a>
          <br />
          <a
            className="policy__link"
            href="https://arh-lavka.ru/"
            target="_blank"
          >
            Арх Лавка г. Москва, ул. Рождественка д.11 (около МАРХИ)
          </a>
        </p>
        <img className="policy__image" src={book} alt="image of the book" />
        <img
          className="policy__image policy__image-left"
          src={book}
          alt="image of the book"
        />
      </div>
    </div>
  );
};

export default Policy;
