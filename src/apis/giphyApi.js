import { displayGift } from '../domManipulation';

const errorMessage = document.querySelector('.error-message');

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


export default getGift;