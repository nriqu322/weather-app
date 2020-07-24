const apiWeather = () => {
  const api = {
    key: '175ed9516bf5a7c853e693c92bba596b',
    baseurl: 'https://api.openweathermap.org/data/2.5/weather?q=',
  };

  // async function getWeather(query) {
  //   const response = await fetch(`${api.baseurl}${query}&units=metric&APPID=${api.key}`, {mode: 'cors'});

  //   const weatherData = await response.json();
  //   console.log(weatherData);
  // }


  const searchBar = document.querySelector('.search-bar');


  function setQuery(e) {
    if (e.keyCode === 13) {
      // getWeather(searchBar.value);
      console.log(searchBar.value);
    }
  }

  searchBar.addEventListener('keypress', setQuery);
};

export default apiWeather;