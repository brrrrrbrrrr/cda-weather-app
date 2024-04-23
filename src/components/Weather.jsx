import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCityData, getForecastByCity } from '../services/getData';

import './Weather.css';
const Weather = ({
  cityData,
  setCityData,
  city,
  forecast,
  setForecast,
  coord,
  setCoord,
}) => {
  useEffect(() => {
    if (city) {
      getCityData(city, setCityData, setCoord);
    }
  }, [city]);

  useEffect(() => {
    if (Object.keys(coord).length > 0) {
      getForecastByCity(city, setForecast, coord);
      console.log('coord 2', coord);
    }
  }, [coord]);

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
