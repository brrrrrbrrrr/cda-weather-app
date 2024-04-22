const isAlreadyInFav = (el, tab) => {
  if (el.length !== 0) {
    return tab.includes(el);
  } else {
    console.error('You have to put a city');
  }
};

export default isAlreadyInFav;
