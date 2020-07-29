import { setDate } from './helper';

const displayWeather = (weather, unit) => {
  const firstMessage = document.querySelector('.first-message');
  firstMessage.style.display = 'none';

  const cityName = document.querySelector('.city-name');
  cityName.textContent = `${weather.name}, ${weather.sys.country}`;

  const cityDate = document.querySelector('.city-date');
  cityDate.textContent = setDate().weatherDate;

  const iconWeather = document.querySelector('.icon-weather');
  iconWeather.src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

  const temperature = document.querySelector('.temperature');
  temperature.textContent = `${weather.main.temp.toFixed(0)}°${unit}`;

  const description = document.querySelector('.description');
  description.textContent = `${weather.weather[0].description}`;

  const wind = document.querySelector('.wind');
  wind.textContent = `${weather.wind.speed} km/h`;

  const humidity = document.querySelector('.humidity');
  humidity.textContent = `${weather.main.humidity}%`;

  const feelLike = document.querySelector('.feel-like');
  feelLike.textContent = `${weather.main.feels_like.toFixed(0)}°${unit}`;

  const minMax = document.querySelector('.min-max');
  minMax.textContent = `${weather.main.temp_min.toFixed(0)}°${unit} / ${weather.main.temp_max.toFixed(0)}°${unit}`;
};

const setForecastCard = (forecast, i, dayDescrip, unit) => {
  const forecastCont = document.querySelector('.forecast');
  const forecastCard = document.createElement('div');
  forecastCard.classList.add('forecast-card', 'my-5', 'p-3', 'mx-2');
  forecastCont.appendChild(forecastCard);

  const forecastDay = document.createElement('div');
  forecastDay.classList.add('forecast-day');
  forecastDay.textContent = dayDescrip;
  forecastCard.appendChild(forecastDay);

  const iconForecast = document.createElement('img');
  iconForecast.classList.add('icon-forecast');
  iconForecast.src = `http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
  forecastCard.appendChild(iconForecast);

  const tempForecast = document.createElement('div');
  tempForecast.classList.add('temp-forecast');
  tempForecast.textContent = `${forecast.list[i].main.temp.toFixed(0)}°${unit}`;
  forecastCard.appendChild(tempForecast);

  const minMaxForecast = document.createElement('div');
  minMaxForecast.classList.add('.min-max-forecast');
  minMaxForecast.textContent = `${forecast.list[i].main.temp_min.toFixed(0)}°${unit} / ${forecast.list[i].main.temp_max.toFixed(0)}°${unit}`;
};

const displayForecast = (forecast, unit) => {
  for (let i = 0; i < forecast.list.length; i += 1) {
    if (forecast.list[i].dt_txt === setDate().forecastDate) {
      setForecastCard(forecast, i, setDate().dayDescrip(1), unit);
      setForecastCard(forecast, i + 8, setDate().dayDescrip(2), unit);
      setForecastCard(forecast, i + 16, setDate().dayDescrip(3), unit);
      setForecastCard(forecast, i + 24, setDate().dayDescrip(4), unit);
      setForecastCard(forecast, i + 32, setDate().dayDescrip(5), unit);
    }
  }
};

const displayGift = (giftData) => {
  const giftContainer = document.querySelector('.gift-container');
  giftContainer.src = giftData.data.images.original.url;
};

export { displayWeather, displayForecast, displayGift };