import './style.css';
import apiWeather from './openWeather';
import { switchToFarenheit, switchToCelcius } from './unitChange';

apiWeather();
switchToFarenheit();
switchToCelcius();