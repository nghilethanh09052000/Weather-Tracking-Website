import { useState } from 'react';
import './App.css';
import Default from './components/display/Default'
import None from './components/display/None'
import Display from './components/display/Display';
function App() {
  const [name , setName]=useState('');
  const [weather , setWeather ]=useState();
  const api ={
    key:"b6dbe0440bb9a4cb685cee367a0377a6",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 
const search = (e) =>{
    if(e.key ==="Enter"){
      fetch(`${api.base}/weather?q=${name}&appid=${api.key}`)
      .then(res=>res.json())
      .then(data=>{
        setWeather(data)
        console.log(data)
        setName('')
      })
    }
  }
  const backGround  = () =>{
    const type = weather.weather[0].main
    switch(type){
      case 'Rain':
        return 'App rain'
      case 'Clouds':
        return 'App cloud'
      case 'Snow':
        return 'App snow'
      case 'Thunderstorm':
        return 'App thunderstorm'
      case 'Drizzle':
        return 'App drizzle'
      case 'Clear':
        return 'App clear'
      default:
        return 'App sunny'
    }
  }
  if(!weather){
    return (
      <div className="App default ">
        <Default
          name={name}
          setName={setName}
          search={search}
        />
      </div>
    );
  }else if(weather.cod==='404'){
    return (
      <div className="App snow">
        <None
          name={name}
          setName={setName}
          search={search}
          city={weather.message}
          cod={weather.cod}
        />
      </div>
    );
  }else{
    return(
      <div className={backGround()}>
        <Display
          name={name}
          setName={setName}
          search={search}

          country={weather.name}
          weather={weather.weather[0].main}
          temp={weather.main.temp}
          wind={weather.wind.speed}
          feels_like={weather.main.feels_like}
          humidity={weather.main.humidity}
          pressure={weather.main.pressure}
        />
    </div>
    )
   
  }
    
}

export default App;
