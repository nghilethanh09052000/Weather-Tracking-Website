import { useEffect, useState } from 'react';
import './App.css';
import Default from './components/display/Default'
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
        setName('')
      })
    }
  }
  const backGround  = () =>{
    if(weather.message==='city not found') return 'App default'
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
      case 'Sunny':
        return 'App sunny'
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
  }else if(weather.message==='city not found'){
    return (
      <div className="App default ">
        <Default
          name={name}
          setName={setName}
          search={search}
        />
      </div>
    );
  }else{
    return(
      <div className={backGround()}>
        <Display

        />
    </div>
    )
   
  }
    
}

export default App;
