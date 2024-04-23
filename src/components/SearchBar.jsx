import Favorites from './Favorites';
import isAlreadyInFav from '../services/isAlreadyInFav';
import PropTypes from 'prop-types';

const SearchBar = ({ setCity, setInput, input, setFavorites, favorites }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
  };

  const handleFavorites = (value) => {
    if (!isAlreadyInFav(value, favorites) && value.length !== 0) {
      setFavorites([...favorites, value]);
    }
  };

  return (
    <div>
      <h2>Choisir une ville</h2>

      <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
        setCity={setCity}
        setInput={setInput}
      />
      <form onSubmit={handleSubmit}>
        <label htmlFor='city'></label>
        <input
          type='text'
          id='city'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className='btn-container'>
          <button type='submit'>Valider</button>
        </div>
      </form>
      <button onClick={() => handleFavorites(input)}>Ajouter en favoris</button>
    </div>
  );
};
SearchBar.propTypes = {
  setCity: PropTypes.func,
  setInput: PropTypes.func,
  input: PropTypes.string,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
};

export default SearchBar;
