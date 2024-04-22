import { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('');
  return (
    <div>
      <label htmlFor='city'></label>
      <input
        type='text'
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <p></p>
    </div>
  );
};

export default SearchBar;
