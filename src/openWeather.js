const apiWeather = () => {
  const api = {
    key: '175ed9516bf5a7c853e693c92bba596b',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
  };

  const searchBar = document.querySelector('.search-bar');

  function setQuery(e) {
    if (e.keyCode === 13) {
      getWeather(searchBar.value);
      searchBar.value = '';
    }
  }

  searchBar.addEventListener('keypress', setQuery);

  const displayWeather = (weather) => {
    console.log(weather);
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
};

export default apiWeather;