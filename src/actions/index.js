import axios from 'axios'

const API_KEY = '23123957d0f9f566df4fc8a8eca4524d'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br&lang=pt&`
  const request = axios.get(url)
  
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
