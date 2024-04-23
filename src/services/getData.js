const key = import.meta.env.VITE_API_KEY;

const getCityData = (city, setCityData, setCoord) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
  )
    .then((response) => response.json())

    .then((response) => {
      setCityData(response);
      setCoord(response.coord);
    })
    .catch((err) => console.error('Erreur +', err));
};

const getForecastByCity = (city, setForecast, coord) => {
  if (coord) {
    fetch(
      // `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`
      // `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${key}&cnt=5`
      // `https://api.openweathermap.org/data/2.5/forecast?lat=45.75&lon=4.5833&appid=${key}&cnt=5`
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${key}&cnt=5`
    )
      .then((response) => response.json())

      .then((response) => setForecast(response))
      .catch((err) => console.error('Erreur +', err));
  }
};

export { getCityData, getForecastByCity };
