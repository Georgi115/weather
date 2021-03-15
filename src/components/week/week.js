import React from "react";
import "./week.scss";
import ReturnMonth from "../returnMonth/returnMonth";
const Week = ({ city, detailsCity }) => {
  const daysinMonth = 32 - new Date(city.year, city.month, 32).getDate();
  const day = {
    ...city,
  };
  let i = 1;
  const result = [];

  const dateFromArr = detailsCity.list[
    detailsCity.list.length - 1
  ].dt_txt.slice(8, 11);

  for (let j = 0; j < 5; j++) {
    if (+dateFromArr === 30 || +dateFromArr === 31) {
      if (day.day + i > dateFromArr) {
        i = 0;
        day.day = 1;
      }
    }
    if (day.day + i === 32) {
      i = 0;
      day.day = 1;
    }
    let num;
    if (day.day + i < 10) {
      const number = day.day + i;
      num = "0" + number;
    } else {
      num = day.day + i;
    }
    console.log(num);
    detailsCity.list.forEach((el) => {
      if (el.dt_txt.indexOf(`${num} 00:00:00`) !== -1) {
        console.log(el);
        result.push(el);
      }
    });
    i++;
  }
  console.log(result);
  const startWeek = +result[0].dt_txt.slice(6, 7);
  const endWeek = +result[result.length - 1].dt_txt.slice(6, 7);
  return (
    <div className="week animate__animated animate__backInUp">
      <div className="week__title">
        <p className="week__week-title">Прогноз на 5 дней</p>
        <p className="week__date">
          {
            <ReturnMonth
              month={startWeek === 0 ? 0 : startWeek - 1}
            ></ReturnMonth>
          }
          ,{city.day + 1 > daysinMonth ? city.day : city.day + 1}-
          {
            <ReturnMonth
              month={startWeek === 0 ? 0 : startWeek - 1}
            ></ReturnMonth>
          }
          ,{+result[result.length - 1].dt_txt.slice(8, 11)}
        </p>
      </div>
      <div className="week__content">
        {result.map((el, id) => {
          return (
            <div className="week__item" key={id}>
              <p className="week__item-date">
                {+el.dt_txt.slice(8, 11)} {<ReturnMonth month={city.month} />}
              </p>
              <p className="week__item-weather">
                {" "}
                {el.weather[0].description}, скорость ветра: {el.wind.speed}м/c
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Week;
