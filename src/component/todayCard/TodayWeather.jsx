import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import './today.css';
import Skelton from '../skelton/Skelton';
import SubCard from '../subInfo/SubCard';
import { memo } from 'react';
import useFetch from '../../useFetch';
import { useRef } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const FORECAST_API_URL = process.env.REACT_APP_FORECAST_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function TodayWeather({setForeCast, setisFetching}) {

    const input = useRef(null);
    const [cityName, setCityName] = useState("colombo");
    const {data, error, isFetching, setError} = useFetch(`${API_URL}data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    data && console.log(data.lat);
    // const [data, setData] = useState({});
    // const [date, setDate] = useState(null);
    // const [error, setError] = useState("");
    // const [isFetchingCurr, setIsfetchingCurr] = useState(false);
    
    // useEffect(() => {
    //     // setIsfetchingCurr(true);/
    //     // when first time page render fetch current weather details from backend
    //     // axios.get(`${API_URL}data/2.5/weather?q=colombo&appid=${API_KEY}&units=metric`)
    //     // .then(res =>{
    //     //     setDate(Date(res.data.dt));
    //     //     setData({...data, main: res.data.weather[0].main, temp: res.data.main.temp, 
    //     //         precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
    //     //     setIsfetchingCurr(false);
    //     //     })
    //     //     .catch(err => {
    //     //         setError(err.response);
    //     //         setIsfetchingCurr(false);
    //     //     });

    //     // setisFetching(true);
    //     // // when first time page render fetch forecast weather details from backend
    //     // axios.get(`${FORECAST_API_URL}latitude=6.94&longitude=79.85`)
    //     // .then(res =>{
    //     //     setForeCast(res.data.daily);
    //     //     setisFetching(false);
    //     // })
    //     // .catch(err => setError(err.response));
    // }, [data, setForeCast, setisFetching]);
    
    const handleSearch = () =>{
        if(input.current.value){
            setCityName(input.current.value);

            // setisFetching(true);
            // fetch forecasting data for the search city
            // axios.get(`${FORECAST_API_URL}latitude=6.94&longitude=79.85`)
            // .then(res =>{
            //     setForeCast(res.data.daily);
            //     setisFetching(false);
            // })
            // .catch(err => setError(err.response));
        }
    }

    return (
        
        <div className="today-card">
            <div className="search-bar">
                <input type="text" placeholder="Enter City Name" onChange={() => setError(null)} ref={input} />
                <button onClick={handleSearch}><img src="./img/search.png" alt=""/> </button>
            </div>
            {error && <div className="error-txt">{error}</div>}
            <section className="main-weather" >
                <h2 className="city">{isFetching||!data ? <Skelton type="city"/> : data.city}</h2>
                <div className="weather-info">
                    <div className="weather-descript">{isFetching||!data ? <Skelton type="mood"/> : data.main}</div>
                   {isFetching||!data ? <Skelton type="image"/> : <img className="weather-icon" src={`./img/${data.main}.png`}alt="img"/>}
                    <h1 className="main-temp">{isFetching||!data ? <Skelton type="temp"/> : Math.round(data.temp)+"°C"}</h1>
                    <div className="date-time">{isFetching||!data ? <Skelton type="date"/> : data.date}</div>
                    <SubCard data={data} isFetching={isFetching} />
                </div>
            </section>
        </div>
    )
}

export default memo(TodayWeather);
