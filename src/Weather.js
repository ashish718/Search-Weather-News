import React, {useState, useEffect} from "react";
import './App.css';
import style from './Weather.module.css'


function Weather(){

  const[weatherInfo, setWeather] = useState([]);
  const[extraInfo, setInfo] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('gurgaon')


  useEffect(()=>{
    getWeather();
  }, [query]);


  const getWeather = async ()=>{
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=76e51cc01f60bad0c6e901a7347bb22e&q=${query}&units=metric`);
    const weatherData = await data.json();
    console.log(weatherData);
    setWeather(weatherData.main);
    setInfo(weatherData.sys);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  function utcTime(value){
    return Date(value*1000);
  }

  return(
    <div>
      <form onSubmit = {getSearch} className={style.form}>
        <input className={style.search} type="text" placeholder="Search your city" value={search} onChange={updateSearch}/>
        <button className={style.click} type="submit">Search</button>
      </form>


      <div className={style.info}>

        <h1>City: {query}</h1>
        <h2>Country:</h2> <p>{extraInfo.country}</p>
        <h3>Temp:</h3> <p>{weatherInfo.temp}º C</p>
        <h3> Feel Like: </h3><p>{weatherInfo.feels_like}º C</p>



      </div>



    </div>

  )

};

export default Weather;
