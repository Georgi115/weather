import React from "react";
import "./weatherScreen.scss";
import ReturnMonth from "../returnMonth/returnMonth";

const WeatherScreen = ({ city, saveCity }) => {
  console.log(city.month);
  return (
    <section className="wetherScreen">
      <div className="wetherScreen__info">
        <div className="wetherScreen__icon">
          <div className="wetherScreen__sircle" onClick={saveCity}>
            <i className=" wetherScreen__plus fa fa-plus fa-1x"></i>
          </div>
        </div>
        <div className="wetherScreen__text">
          <p className="wetherScreen__temperature">{city.temp} °С</p>
          <p className="wetherScreen__city">{city.name}</p>
          <p className="wetherScreen__details">{city.weather[0].description}</p>
          <p className="wetherScreen__day">
            {city.day} {<ReturnMonth month={city.month} />} {city.year}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherScreen;
