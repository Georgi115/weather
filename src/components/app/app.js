import React from "react";
import "./app.scss";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../header/header";
import WeatherScreen from "../weatherScreen/weatherScreen";
import SavedCities from "../savedCities/savedCities";
import Service from "../../service/service";
import Spinner from "../spinner/spinner";
import Error from "../Error/Error";
import Days from "../days/days";

const App = () => {
  const service = new Service();
  const date = new Date();
  const [geolocation, setGeolocation] = useState(null);
  const [city, setCity] = useState({});
  const [savedCities, setSavedCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [detailsCity, setDetailsCity] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (!geolocation) return;
    service.callByCoordinats(geolocation).then((res) => {
      showCity(res);
    });
  }, [geolocation]);

  const changeInput = (value) => {
    setValueInput(value);
  };

  const showCity = (res) => {
    const temp = res.main.temp + "";
    setCity({
      name: res.name,
      weather: res.weather,
      temp: temp.slice(0, 2),
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });
    setLoading(false);
  };

  useEffect(() => {
    if (city.name === undefined) return;
    service.callByNameCityDetails(city.name).then((res) => {
      setDetailsCity(res);
    });
  }, [city]);

  const saveCity = () => {
    const arr = savedCities.slice();
    const find = arr.find((el) => el === city.name);
    if (find) return;
    arr.push(city.name);
    setSavedCities(arr);
  };

  const clickSaveCity = (id) => {
    const elem = savedCities[id];
    if (elem === city.name) return;
    callServiceByName(elem);
  };

  const searchCity = () => {
    callServiceByName();
  };

  const callServiceByName = (name = valueInput) => {
    setLoading(true);
    service
      .callByNameCity(name)
      .then((res) => {
        showCity(res);
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  const today = loading ? (
    <Spinner />
  ) : (
    <Days city={city} detailsCity={detailsCity} />
  );

  const tommorow = loading ? (
    <Spinner />
  ) : (
    <Days city={city} detailsCity={detailsCity} />
  );
  const week = loading ? (
    <Spinner />
  ) : (
    <Days city={city} detailsCity={detailsCity} />
  );
  return (
    <div className="app">
      <Header changeInput={changeInput} searchCity={searchCity} />
      <div className={loading ? "app__Screen" : "app__screen"}>
        {error ? (
          <Error />
        ) : (
          <React.Fragment>
            {loading ? (
              <Spinner />
            ) : (
              <WeatherScreen city={city} saveCity={saveCity} />
            )}
          </React.Fragment>
        )}
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <SavedCities
            savedCities={savedCities}
            clickSaveCity={clickSaveCity}
          />
        )}
      />
      <div className={loading ? "flex-block" : null}>
        <Route path="/today" exact render={() => today} />
        <Route path="/tommorow" exact render={() => tommorow} />
        <Route path="/week" exact render={() => week} />
      </div>
    </div>
  );
};
export default App;
