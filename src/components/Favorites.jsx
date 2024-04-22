import PropTypes from 'prop-types';

const Favorites = ({ favorites, setCity, setInput }) => {
  const handleChange = (el) => {
    setCity(el);
    setInput(el);
  };
  return (
    <div className='fav-container'>
      {favorites.length > 0 &&
        favorites.map((el, index) => {
          return (
            <button key={index} onClick={() => handleChange(el)}>
              {el}
            </button>
          );
        })}
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  setCity: PropTypes.func,
  setInput: PropTypes.func,
};

export default Favorites;
