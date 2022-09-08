import { useState, useEffect, useRef } from 'react';
import './App.css';
import ApiDisplay from './components/ApiDisplay';

function App() {
  const [weather, setWeather] = useState()
  


  const getWeather = (input)=>{
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
      else setWeather(forecast)
    }) 
    .catch ((err) => {
      console.log(err.response.data);
      this.setState({ error: err.response.data.message });
    })
  }

//happens on mount/pageload
console.log(weather)

const handleInput = event =>{
  getWeather(event.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather-Project</h1>
        <input 
          className='inputBox' 
          onInput={handleInput} 
        ></input>
        {weather && <ApiDisplay weather = {weather}/>}
      </header>
    </div>
  );
}

export default App;
