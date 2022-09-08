import { useState, useEffect, useRef } from 'react';
import './App.css';
import ApiDisplay from './components/ApiDisplay';

function App() {
  const [weather, setWeather] = useState()
  


  const weatherToApi = (weather) => {
      console.log(weather)
     return {
    'name' : `${weather.name}`,
    'clouds':`${weather.clouds.all}`,
    'description' : weather.weather[0].description
}}

  // const postWeather = (weather) =>{
  //   fetch (`http://localhost:3010/`)
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((postData)=>{

  //   })
  // }

  const addWeatherToApi = (forecast) =>{
    fetch("http://localhost:3010/", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(weatherToApi(forecast))
    })
  // .then (
  //   {getNewAPI}
  //   )
}


  const getWeather = async(input)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b9d30726a834b3a44eec4e5a08ad64bd`)
    .then((res)=>{
      return res.json()
    })
    .then ((forecast)=>{
      if (forecast.cod == 404) {
        console.log("not a city")
        console.log(forecast.name +" not city")
      } else if (forecast.cod == "400") {
        console.log("not found")
        console.log(forecast.name +" notfound")
      }
      else {
      addWeatherToApi(forecast)
      console.log(forecast)
      setWeather(forecast)
      }
    }) 
    .catch ((err) => {
      console.log(err);
    })
  }

//happens on mount/pageload
console.log(weather)
const inputElement = useRef(null)
const handleInput = event =>{
  getWeather(inputElement.current.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather-Project</h1>
        <input ref = {inputElement}
          className='inputBox' 
        ></input>
          <button onClick={handleInput} >submit</button>
        {weather && <ApiDisplay weather = {weather}/>}
      </header>
    </div>
  );
}

export default App;
