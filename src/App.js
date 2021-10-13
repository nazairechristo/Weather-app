import React, { useState } from 'react';
import './App.css';
import { fetchWeather } from './fetchWeather';

function App() {
  const [query,setQuery] = useState('');
  const [dataWeather, setDataWeather] = useState({})

  console.log(query);

  const searchOnApi = async (e) => {
    e.preventDefault();

    const data = await fetchWeather(query);

   
    setDataWeather(data);

    console.log(dataWeather);



  }

  const toCelsius = (temp) => {
    let result = temp - 273.15;
    return result;
  } 

  return (
    <div className="App">
      <div className='main-container'>
        <h1 id='logo'>Weather</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={searchOnApi}>Search</button>

        </div>
        { dataWeather.main && (

          <div className='weather-container'>
            <h4>{dataWeather.name}<span id='region'>{dataWeather.sys.country}</span></h4>
            <span id='temp'>
              {Math.ceil(toCelsius(dataWeather.main.temp))}
              <sup>&deg;C</sup>
              </span>
              <span id='desc-img'>
                <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt='desc' />
              </span>
              <span id='desc-text'>
                {dataWeather.weather[0].description}
              </span>
             
          </div>

        ) 
       }
      </div>
    </div>
  );
}

export default App;
