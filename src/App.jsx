import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

function App() {
  const [cityData, setCityData] = useState({});
  const [city, setCity] = useState('');
  const [input, setInput] = useState('');
  const [favorites, setFavorites] = useState([]);
  return (
    <div className='app-container'>
      <SearchBar
        city={city}
        setCity={setCity}
        setInput={setInput}
        input={input}
        setFavorites={setFavorites}
        favorites={favorites}
      />
      <Weather cityData={cityData} setCityData={setCityData} city={city} />
    </div>
  );
}

export default App;
