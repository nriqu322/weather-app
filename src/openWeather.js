// import unitWeather from './unitChange';
import { displayWeather, displayForecast } from './domManipulation';

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

  // const displayWeather = (weather, unit) => {
  //   const firstMessage = document.querySelector('.first-message');
  //   firstMessage.style.display = 'none';

  //   const cityName = document.querySelector('.city-name');
  //   cityName.textContent = `${weather.name}, ${weather.sys.country}`;

  //   const cityDate = document.querySelector('.city-date');
  //   cityDate.textContent = setDate().weatherDate;

  //   const temperature = document.querySelector('.temperature');
  //   temperature.textContent = `${weather.main.temp.toFixed(0)}°${unit}`;

  //   const description = document.querySelector('.description');
  //   description.textContent = `${weather.weather[0].description}`;

  //   const wind = document.querySelector('.wind');
  //   wind.textContent = `${weather.wind.speed} km/h`;

  //   const humidity = document.querySelector('.humidity');
  //   humidity.textContent = `${weather.main.humidity}%`;

  //   const feelLike = document.querySelector('.feel-like');
  //   feelLike.textContent = `${weather.main.feels_like.toFixed(0)}°${unit}`;

  //   const minMax = document.querySelector('.min-max');
  //   minMax.textContent = `${weather.main.temp_min.toFixed(0)}°${unit} / ${weather.main.temp_max.toFixed(0)}°${unit}`;
  // };

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

  // const setForecastCard = (forecast, i, dayDescrip, unit) => {
  //   const forecastCont = document.querySelector('.forecast');
  //   const forecastCard = document.createElement('div');
  //   forecastCard.classList.add('forecast-card', 'my-5', 'p-3', 'mx-2');
  //   forecastCont.appendChild(forecastCard);

  //   const forecastDay = document.createElement('div');
  //   forecastDay.classList.add('forecast-day');
  //   forecastDay.textContent = dayDescrip;
  //   forecastCard.appendChild(forecastDay);

  //   const iconForecast = document.createElement('img');
  //   iconForecast.classList.add('icon-forecast');
  //   iconForecast.src = `http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
  //   forecastCard.appendChild(iconForecast);

  //   const tempForecast = document.createElement('div');
  //   tempForecast.classList.add('temp-forecast');
  //   tempForecast.textContent = `${forecast.list[i].main.temp.toFixed(0)}°${unit}`;
  //   forecastCard.appendChild(tempForecast);

  //   const minMaxForecast = document.createElement('div');
  //   minMaxForecast.classList.add('.min-max-forecast');
  //   minMaxForecast.textContent = `${forecast.list[i].main.temp_min.toFixed(0)}°${unit} / ${forecast.list[i].main.temp_max.toFixed(0)}°${unit}`;
  // };


  // const displayForecast = (forecast, unit) => {
  //   for (let i = 0; i < forecast.list.length; i += 1) {
  //     if (forecast.list[i].dt_txt === setDate().forecastDate) {
  //       setForecastCard(forecast, i, setDate().dayDescrip(1), unit);
  //       setForecastCard(forecast, i + 8, setDate().dayDescrip(2), unit);
  //       setForecastCard(forecast, i + 16, setDate().dayDescrip(3), unit);
  //       setForecastCard(forecast, i + 24, setDate().dayDescrip(4), unit);
  //       setForecastCard(forecast, i + 32, setDate().dayDescrip(5), unit);
  //     }
  //   }
  // };

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

  const displayGift = (giftData) => {
    const giftContainer = document.querySelector('.gift-container');
    giftContainer.src = giftData.data.images.original.url;
  };

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