import React, { useState } from "react";
import "./Map.css";
import RussianMap from "../../images/russia.svg";
import pin from "../../images/pin.svg";

const cities = [
  { name: "Москва", x: "10.75%", y: "59.64%" },
  { name: "Санкт-Петербург", x: "85%", y: "25%" },
  { name: "Новосибирск", x: "40%", y: "60%" },
  { name: "Екатеринбург", x: "50%", y: "45%" },
];

const Map = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="map">
      <h1 className="map__title">Нашу книгу уже читают по всей России</h1>
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
