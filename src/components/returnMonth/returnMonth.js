import react from "react";

const ReturnMonth = ({ month }) => {
  if (!month) {
    return null;
  }
  let months;
  switch (month) {
    case 0:
      months = "Января";
      break;
    case 1:
      months = "Февраля";
      break;
    case 2:
      months = "Марта";
      break;
    case 3:
      months = "Апреля";
      break;
    case 4:
      months = "Мая";
      break;
    case 5:
      months = "Июня";
      break;
    case 6:
      months = "Июля";
      break;
    case 7:
      months = "Августа";
      break;
    case 8:
      months = "Сентября";
      break;
    case 9:
      months = "Октября";
      break;
    case 10:
      months = "Ноября";
      break;
    case 11:
      months = "Декабря";
      break;
    default:
      break;
  }
  return months;
};
export default ReturnMonth;
