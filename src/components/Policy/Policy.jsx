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
          <br />
          <a className="policy__link" href="https://sad-24.ru/" target="_blank">
            СЦ Садовник г. Екатеринбург, г.В. Пышма, г. Арамиль
          </a>
          <br />
          <p className="policy__text">Дизайнер BOOKS:</p>
          <a
            className="policy__link"
            href="https://www.designerbooks.ru/main.php?level=item&id=5072"
            target="_blank"
          >
            www.designerbooks.ru
          </a>
          <br />
          <a
            className="policy__link"
            href="https://www.ozon.ru/product/nb-sad-lesnye-uchastki-1878599558/"
            target="_blank"
          >
            www.ozon.ru
          </a>
          <br />
          <a
            className="policy__link"
            href="https://www.avito.ru/moskva/knigi_i_zhurnaly/nb.sad_lesnye_uchastki_4805834015"
            target="_blank"
          >
            www.avito.ru
          </a>
          <br />
          <a
            className="policy__link"
            href="https://market.yandex.ru/product--nb-sad-lesnye-uchastki/1017537743?sku=103780793649&uniqueId=738602&do-waremd5=RXU7AnW3Bee5ibowULfKLQ&clid=703"
            target="_blank"
          >
            www.market.yandex.ru
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
