import React from "react";
import ReturnMonth from "../returnMonth/returnMonth";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Tommorow = ({ city, detailsCity }) => {
  const daysinMonth = 32 - new Date(city.year, city.month, 32).getDate();
  const month = city.month + 1;
  const resultMonth = month < 10 ? "0" + month : month;
  const day = city.day + 1 > daysinMonth ? 0 : city.day + 1;
  const resultDay = day < 10 ? "0" + day : day;
  const result = detailsCity.list.filter((el) => {
    if (el.dt_txt.indexOf(`${city.year}-${resultMonth}-${resultDay}`) !== -1) {
      return el;
    }
  });

  console.log(`${city.year}-${resultMonth}-${resultDay}`);

  const map = () => {
    const coordinates = [
      [detailsCity.city.coord.lat, detailsCity.city.coord.lon],
    ];
    const center = [detailsCity.city.coord.lat, detailsCity.city.coord.lon];
    return (
      <YMaps>
        <Map
          width="100%"
          height="100%"
          defaultState={{ center: center, zoom: 9 }}
        >
          {coordinates.map((coordinate) => (
            <Placemark geometry={coordinate} key={Math.random * 1000000} />
          ))}
        </Map>
      </YMaps>
    );
  };

  return (
    <div className="today animate__animated animate__backInUp">
      <div className="today__text">
        <div className="today__title">
          <p className="today__text-title">Завтра</p>
          <p className="today__date">
            {<ReturnMonth month={city.month} />}, {Number(resultDay)}
          </p>
        </div>
        <div className="today__weather">
          <div className="today__weather-title">
            <p>Время</p>
            <p>Погода</p>
          </div>
          <div className="today__weather-text">
            {result.map((el, id) => {
              return (
                <div className="today__details-map" key={id}>
                  <p className="today__time">{el.dt_txt.slice(11, 16)}</p>
                  <p className="today__details-weather">
                    {el.weather[0].description}, скорость ветра: {el.wind.speed}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="today__map">{map()}</div>
    </div>
  );
};

export default Tommorow;
