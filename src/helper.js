const setDate = () => {
  const currentDate = new Date();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
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

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export { setDate, clearElement };