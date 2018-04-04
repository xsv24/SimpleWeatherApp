import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = 'API_KEY';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
	const url = `${ROOT_URL}&q=${city}`;
	const req = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload: req
	};
};
