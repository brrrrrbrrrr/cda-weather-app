import { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Weather.css';
const Weather = ({ cityData, setCityData, city }) => {
  const key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
      )
        .then((response) => response.json())
        .then((response) => setCityData(response))
        .catch((err) => console.error('Erreur +', err));
    }
  }, [city]);

  return (
    <div>
      {cityData.main && (
        <div className='temp-container'>
          <span>Température : {cityData.main.temp} </span>
          <span>Ressenti : {cityData.main.feels_like} </span>
          <span>Temp. Max : {cityData.main.temp_max} </span>
          <span>Temp. Min : {cityData.main.temp_min} </span>
        </div>
      )}
    </div>
  );
};

Weather.propTypes = {
  cityData: PropTypes.object,
  setCityData: PropTypes.func,
  city: PropTypes.string,
};

export default Weather;
