class Service {
  async callByCoordinats(props) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=metric&appid=d9bd9cebecdc58dddbebd11200ef2956&lang=ru`
    );
    const result = await res.json();
    return result;
  }
  async callByNameCity(name) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d9bd9cebecdc58dddbebd11200ef2956&lang=ru`
      );
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  async callByNameCityDetails(name) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=d9bd9cebecdc58dddbebd11200ef2956&lang=ru`
    );
    const result = await res.json();
    return result;
  }
}

export default Service;
