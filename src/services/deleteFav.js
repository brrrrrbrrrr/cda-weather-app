const deleteFav = (index, tab) => {
  return tab.filter((el, i) => i !== index);
};

export default deleteFav;
