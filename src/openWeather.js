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

  function changeBackground(e) {
    if (e.keyCode === 13) {
      const bodyCont = document.querySelector('body');
      bodyCont.style.background = "url('./images/snow.jpg')";
    }
  }

  searchBar.addEventListener('keypress', setQuery);
  searchBar.addEventListener('keypress', changeBackground);

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  const displayWeather = (weather) => {
    console.log(weather);
    const cityName = document.querySelector('.city-name');
    cityName.textContent = `${weather.name}, ${weather.sys.country}`;

    const cityDate = document.querySelector('.city-date');
    cityDate.textContent = setDate().weatherDate;

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
    try {
      const response = await fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`, { mode: 'cors' });

      const weather = await response.json();
      displayWeather(weather);
    } catch (e) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'City not found';
    }
  }

  const setDate = () => {
    const currentDate = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayDescrip = (idx) => days[currentDate.getDay() + idx];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthDescrip = months[currentDate.getMonth()];

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

    const weatherDate = `${dayDescrip(0)} ${day}, ${monthDescrip} ${year}`;
    const forecastDate = `${year}-${month}-${day} 09:00:00`;

    return {
      weatherDate, forecastDate, dayDescrip, monthDescrip,
    };
  };

  const setForecastCard = (forecast, i, dayDescrip) => {
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
    tempForecast.textContent = `${forecast.list[i].main.temp.toFixed(0)}°C`;
    forecastCard.appendChild(tempForecast);

    const minMaxForecast = document.createElement('div');
    minMaxForecast.classList.add('.min-max-forecast');
    minMaxForecast.textContent = `${forecast.list[i].main.temp_min.toFixed(0)}°C / ${forecast.list[i].main.temp_max.toFixed(0)}°C`;
  };


  const displayForecast = (forecast) => {
    const forecastCont = document.querySelector('.forecast');
    clearElement(forecastCont);

    for (let i = 0; i < forecast.list.length; i += 1) {
      if (forecast.list[i].dt_txt === setDate().forecastDate) {
        setForecastCard(forecast, i, setDate().dayDescrip(1));
        setForecastCard(forecast, i + 8, setDate().dayDescrip(2));
        setForecastCard(forecast, i + 16, setDate().dayDescrip(3));
        setForecastCard(forecast, i + 24, setDate().dayDescrip(4));
        setForecastCard(forecast, i + 32, setDate().dayDescrip(5));
      }
    }
  };

  async function getForecast(query) {
    try {
      const responseForecast = await fetch(`${api.baseurl}forecast?q=${query}&units=metric&appid=${api.key}`, { mode: 'cors' });
      const forecast = await responseForecast.json();
      displayForecast(forecast);
    } catch (e) {
      errorMessage.style.visibility = 'visible';
      errorMessage.textContent = 'City not found';
    }
  }
};

export default apiWeather;