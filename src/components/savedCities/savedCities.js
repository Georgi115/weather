import React from "react";
import "./savedCities.scss";

const SavedCities = ({ savedCities, clickSaveCity }) => {
  if (savedCities.length === 0) {
    return null;
  }
  return (
    <section className="savedCities  animate__animated animate__backInUp">
      <div className="savedCities__title">Сохраненные города</div>
      <div className="savedCities__cities">
        {savedCities.map((el, id) => {
          return (
            <div
              className="savedCities__item  animate__animated animate__fadeIn"
              onClick={() => clickSaveCity(id)}
              key={id}
            >
              <p className="savedCities__title">{el}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SavedCities;
