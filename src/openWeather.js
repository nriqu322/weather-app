// import unitWeather from './unitChange';
import { displayWeather, displayForecast, displayGift } from './domManipulation';

const apiWeather = () => {
  const api = {
    key: '175ed9516bf5a7c853e693c92bba596b',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };

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

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  async function getWeather(query, unit) {
    try {
      const response = await fetch(`${api.baseurl}weather?q=${query}&units=${unit === 'C' ? 'metric' : 'imperial'}&APPID=${api.key}`, { mode: 'cors' });
      const weather = await response.json();
      const mainContent = document.querySelector('.main-content');
      mainContent.classList.add('d-flex', 'justify-content-around');
      displayWeather(weather, unit);
    } catch (e) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'City not found';
      const mainContent = document.querySelector('.main-content');
      mainContent.classList.remove('d-flex', 'justify-content-around');
    }
  }

  async function getForecast(query, unit) {
    try {
      const responseForecast = await fetch(`${api.baseurl}forecast?q=${query}&units=${unit === 'C' ? 'metric' : 'imperial'}&appid=${api.key}`, { mode: 'cors' });
      const forecast = await responseForecast.json();
      const forecastCont = document.querySelector('.forecast');
      clearElement(forecastCont);
      displayForecast(forecast, unit);
    } catch (e) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'City not found';
    }
  }

  async function getGift() {
    try {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=JbHdX4EguTWZ7yIGmJ4qJDtoBI2LuUg7&s=weather', { mode: 'cors' });
      const giftData = await response.json();
      displayGift(giftData);
    } catch (e) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'Gift not found';
    }
  }
};

export default apiWeather;