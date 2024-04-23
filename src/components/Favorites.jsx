import PropTypes from 'prop-types';
import deleteFav from '../services/deleteFav';

const Favorites = ({ favorites, setCity, setInput, setFavorites }) => {
  const handleChange = (el) => {
    setCity(el);
    setInput(el);
  };

  const handleDelete = (index) => {
    setFavorites(deleteFav(index, favorites));
  };

  return (
    <div className='fav-container'>
      {favorites.length > 0 &&
        favorites.map((el, index) => {
          return (
            <div key={index}>
              <button onClick={() => handleChange(el)}>{el}</button>
              <button
                className='delete-btn'
                onClick={() => handleDelete(index)}
              >
                Supprimer
              </button>
            </div>
          );
        })}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  setCity: PropTypes.func,
  setInput: PropTypes.func,
  setFavorites: PropTypes.func,
};

export default Favorites;
