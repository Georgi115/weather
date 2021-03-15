import React from "react";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error">
      <p className="error__text">Такого города не было найдено</p>
      <p className="error__text">Попобуйте ввести другой запрос</p>
    </div>
  );
};

export default Error;
