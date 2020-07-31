import { getWeather, getForecast } from './apis/openWeatherApi';
import getGift from './apis/giphyApi';

const uiManager = () => {
  const searchBar = document.querySelector('.search-bar');
  const errorMessage = document.querySelector('.error-message');

  let unit = 'C';

  const unitC = document.querySelector('.celcius');
  const unitF = document.querySelector('.farenheit');

  function setQuery(unit) {
    if (searchBar.value !== '') {
      getWeather(searchBar.value, unit);
      getForecast(searchBar.value, unit);
      getGift();
      errorMessage.style.visibility = 'hidden';
    } else {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'Please enter a city name';
    }
  }

  unitC.addEventListener('click', () => {
    unitC.classList.add('selected');
    unitF.classList.remove('selected');
    unit = 'C';
    setQuery(unit);
  });

  unitF.addEventListener('click', () => {
    unitF.classList.add('selected');
    unitC.classList.remove('selected');
    unit = 'F';
    setQuery(unit);
  });
};

export default uiManager;