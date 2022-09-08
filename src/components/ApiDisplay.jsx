
const ApiDisplay = (props) =>{
    const {weather} = props;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // const weatherToApi = {
    //     forecast: {
    //     'city' : `${weather.name}`,
    //     'date' : `${date}`,
    //     'weather':`${weather.weather[0].description}`
    // }}
    
    // const addWeatherToApi = () =>{
    //         fetch("http://192.168.254.145:3080", {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(weatherToApi)
    //         })
    //       // .then (
    //       //   {getNewAPI}
    //       //   )
    // }

return (
    <div>
       {weather && <h2>{weather.name}</h2>}
       {weather &&<h2>{weather.clouds.all}</h2>}
       {weather &&<h2>{weather.weather[0].description}</h2>}
       {date}
    </div>
)
}

export default ApiDisplay;