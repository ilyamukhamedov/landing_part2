import React, { useState } from "react";
import "./Map.css";
import RussianMap from "../../images/russia.svg";
import pin from "../../images/pin.svg";

const cities = [
  { name: "Москва", x: "10.75%", y: "59.64%" },
  { name: "Санкт-Петербург", x: "11.5%", y: "47%" },
  { name: "Екатеринбург", x: "25.67%", y: "74%" },
  { name: "Тюмень", x: "30.75%", y: "75.64%" },
  { name: "Томск", x: "44.8%", y: "82.5%" },
  { name: "Кемерово", x: "46.2%", y: "85.5%" },
  { name: "Челябинск", x: "26.9%", y: "77.9%" },
  { name: "Иваново", x: "13.6%", y: "60.2%" },
  { name: "Нижний Новгород", x: "14.9%", y: "64.2%" },
  { name: "Казань", x: "18%", y: "69.5%" },
];

const Map = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="map">
      <h1 className="map__title">Нашу книгу уже читают...</h1>
      <div className="map__container">
        <img src={RussianMap} alt="Карта России" className="svg-map" />

        {cities.map((city, index) => (
          <div
            key={index}
            className="marker"
            style={{ left: city.x, top: city.y }}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <img src={pin} className="marker-point" alt="Метка" />
            {hoveredCity === city.name && (
              <div className="city-tooltip">{city.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
