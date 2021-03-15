import React from "react";
import Today from "../today/today";
import Spinner from "../spinner/spinner";
import Tommorow from "../tommorow/tommorow";
import Week from "../week/week";

const Days = ({ city, detailsCity }) => {
  if (detailsCity === null) return null;
  let component;
  const location = document.location.pathname;
  switch (location) {
    case "/today":
      component = (
        <Today city={city} detailsCity={detailsCity} location={location} />
      );
      break;
    case "/tommorow":
      component = (
        <Tommorow city={city} detailsCity={detailsCity} location={location} />
      );
      break;
    case "/week":
      component = (
        <Week city={city} detailsCity={detailsCity} location={location} />
      );
      break;
  }

  return <div>{component}</div>;
};

export default Days;
