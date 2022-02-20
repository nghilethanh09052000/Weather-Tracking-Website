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
  const getTime = (d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${month} ${date} ${year}`
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
          getTime={getTime}
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
          getTime={getTime}
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
          getTime={getTime}
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
