const apiWeather = () => {
  const api = {
    key: '175ed9516bf5a7c853e693c92bba596b',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };

  const searchBar = document.querySelector('.search-bar');
  const errorMessage = document.querySelector('.error-message');

  function setQuery(e) {
    if (e.keyCode === 13) {
      if (searchBar.value !== '') {
        getWeather(searchBar.value);
        getForecast(searchBar.value);
        searchBar.value = '';
        errorMessage.style.visibility = 'hidden';
      } else {
        errorMessage.style.visibility = 'visible';
        errorMessage.textContent = 'Please enter a city name';
      }
    }
  }

  searchBar.addEventListener('keypress', setQuery);

  const displayWeather = (weather) => {
    // console.log(weather);
    const cityName = document.querySelector('.city-name');
    cityName.textContent = `${weather.name}, ${weather.sys.country}`;

    const temperature = document.querySelector('.temperature');
    temperature.textContent = `${weather.main.temp.toFixed(0)}°C`;

    const description = document.querySelector('.description');
    description.textContent = `${weather.weather[0].description}`;

    const wind = document.querySelector('.wind');
    wind.textContent = `${weather.wind.speed} km/h`;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = `${weather.main.humidity}%`;

    const feelLike = document.querySelector('.feel-like');
    feelLike.textContent = `${weather.main.feels_like.toFixed(0)}°c`;

    const minMax = document.querySelector('.min-max');
    minMax.textContent = `${weather.main.temp_min.toFixed(0)}°C / ${weather.main.temp_max.toFixed(0)}°C`;
  };

  async function getWeather(query) {
    const response = await fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`, { mode: 'cors' });

    const weather = await response.json();
    displayWeather(weather);
  }

  const setDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = '';
    let day = '';
    if (currentDate.getMonth() < 10) {
      month = `0${currentDate.getMonth() + 1}`;
    } else {
      month = currentDate.getMonth() + 1;
    }
    if (currentDate.getDate() < 10) {
      day = `0${currentDate.getDate()}`;
    } else {
      day = currentDate.getDate() + 1;
    }
    const forecastDate = `${year}-${month}-${day} 09:00:00`;

    // console.log(forecastDate);
    return String(forecastDate);
  };

  const setForecastCard = (forecast, i) => {
    const forecastCont = document.querySelector('.forecast');
    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');
    forecastCont.appendChild(forecastCard);

    const tempForecast = document.createElement('div');
    tempForecast.classList.add('temp-forecast');
    tempForecast.textContent = `${forecast.list[i].main.temp.toFixed(0)}°C`;
    forecastCard.appendChild(tempForecast);

    const iconForecast = document.createElement('img');
    iconForecast.classList.add('icon-forecast');
    iconForecast.src = `http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png`;
    forecastCard.appendChild(iconForecast);
  };


  const displayForecast = (forecast) => {
    console.log(forecast.list);
    console.log(setDate());

    for (let i = 0; i < forecast.list.length; i += 1) {
      if (forecast.list[i].dt_txt === setDate()) {
        setForecastCard(forecast, i);
        setForecastCard(forecast, i + 8);
        setForecastCard(forecast, i + 16);
        setForecastCard(forecast, i + 24);
        setForecastCard(forecast, i + 32);
      }
    }
  };

  async function getForecast(query) {
    const responseForecast = await fetch(`${api.baseurl}forecast?q=${query}&units=metric&appid=${api.key}`, { mode: 'cors' });

    const forecast = await responseForecast.json();
    displayForecast(forecast);
  }
};

export default apiWeather;