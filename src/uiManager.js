import { getWeather, getForecast } from './apis/openWeatherApi';
import getGift from './apis/giphyApi';

const uiManager = () => {
  const searchBar = document.querySelector('.search-bar');
  const errorMessage = document.querySelector('.error-message');

  let unit = 'C';

  const unitC = document.querySelector('.celcius');
  const unitF = document.querySelector('.farenheit');

  unitC.addEventListener('click', () => {
    unitC.classList.add('selected');
    unitF.classList.remove('selected');
    unit = 'C';
  });


  unitF.addEventListener('click', () => {
    unitF.classList.add('selected');
    unitC.classList.remove('selected');
    unit = 'F';
  });

  function setQuery(e) {
    if (e.keyCode === 13) {
      if (searchBar.value !== '') {
        getWeather(searchBar.value, unit);
        getForecast(searchBar.value, unit);
        getGift();
        searchBar.value = '';
        errorMessage.style.visibility = 'hidden';
      } else {
        errorMessage.style.visibility = 'visible';
        errorMessage.textContent = 'Please enter a city name';
      }
    }
  }

  searchBar.addEventListener('keypress', setQuery);
};

export default uiManager;