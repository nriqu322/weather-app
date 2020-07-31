const setDate = () => {
  const currentDate = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const dayDescrip = (idx) => days[currentDate.getDay() + idx];

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthDescrip = months[currentDate.getMonth()];

  const year = currentDate.getFullYear();
  let month = '';
  let currentDay = '';
  let tomorrowDay = '';
  const tomorrow = new Date(currentDate);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (currentDate.getDate() < 10) {
    currentDay = `0${currentDate.getDate()}`;
  } else {
    currentDay = currentDate.getDate();
  }

  if (tomorrow.getMonth() < 10) {
    month = `0${tomorrow.getMonth() + 1}`;
  } else {
    month = tomorrow.getMonth() + 1;
  }
  if (tomorrow.getDate() < 10) {
    tomorrowDay = `0${tomorrow.getDate()}`;
  } else {
    tomorrowDay = tomorrow.getDate();
  }

  const weatherDate = `${dayDescrip(0)} ${currentDay}, ${monthDescrip} ${year}`;
  const forecastDate = `${year}-${month}-${tomorrowDay} 09:00:00`;

  return {
    weatherDate, forecastDate, dayDescrip, monthDescrip,
  };
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export { setDate, clearElement };