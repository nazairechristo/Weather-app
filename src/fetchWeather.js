import axios from 'axios';


export const fetchWeather = async (query) => {
  
  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = 'dde3bd0801a7050e2f3455a57d05b68e';

  const { data } = await axios.get(URL, {
    params: {
      q: query,
      appid: API_KEY,
    }
  }).then((data) => data)
    .catch((err) => console.log(err))

  return data;


} 

