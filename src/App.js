import { useEffect, useState } from 'react';
import Default from './assets/Sunset.jpg'
import './App.css';

function App() {
  const api ={
    key:"b6dbe0440bb9a4cb685cee367a0377a6",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const [name , setName]=useState('');
  const [weather , setWeather ]=useState([]);
  useEffect(()=>{
    fetch(`${api.base}/weather?q=vietnam&appid=${api.key}`)
      .then(res=>res.json())
      .then(data=>{
        setWeather(data)
      })
  },[])
  console.log(weather)
  return (
    <div className="App">
      <div className='app'>
      <img src={Default} />
      </div>
    </div>
  );
}

export default App;
