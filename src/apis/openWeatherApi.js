import { displayWeather, displayForecast } from '../domManipulation';
import { clearElement } from '../helper';

const errorMessage = document.querySelector('.error-message');
const api = {
  key: '175ed9516bf5a7c853e693c92bba596b',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
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

export { getWeather, getForecast };