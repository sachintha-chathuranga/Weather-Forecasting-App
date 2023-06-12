import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './today.css';
import { useRef } from 'react';



const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function TodayWeather() {
    
    const [data, setData] = useState({
        main: "clouds",
        temp: 30,
        precipitation: 10,
        humidity: 5,
        wind: 40,
        city: "Colombo"
    });
    const [date, setDate] = useState("sunday");
    const cityName = useRef("");
    const [error, setError] = useState("");
    

    useEffect(() => {
        axios.get(`${API_URL}data/2.5/weather?q=colombo&appid=${API_KEY}&units=metric`)
        .then(res =>{
            setDate(Date(res.data.dt));
            setData({...data, main: res.data.weather[0].main, temp: res.data.main.temp, 
            precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
        })
        .catch(err => console.log(err));
    }, [data]);

    const handleSearch = () =>{
        if(cityName.current.value !== ""){
            axios.get(`${API_URL}data/2.5/weather?q=${cityName.current.value}&appid=${API_KEY}&units=metric`)
            .then(res =>{
                setDate(Date(res.data.dt));
                setData({...data, main: res.data.weather[0].main, temp: res.data.main.temp, 
                precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
        })
        .catch(err => {
            if(err.response.status === 404 ){
                setError("Invalid City Name");
            }else{
                setError(err.response);
            }
        });

            // axios.get(`${API_URL}data/2.5/forecast/daily?q=${cityName.current.value}&cnt=3&appid=${API_KEY}&units=metric`)
            // .then(res =>{
            //     setForeCast(res.data.list);
            // })
            // .catch(err => console.log(err));
        }
    }

    return (

        <div className="today-card">
            <div className="search-bar">
                <input type="text" placeholder="Enter City Name" onChange={() => setError("")} ref={cityName}/>
                <button onClick={handleSearch}><img src="./img/search.png" alt=""/> </button>
            </div>
            {error && <div className="error-txt">{error}</div>}
            <section className="main-weather" >
                <h2 className="city">{data.city}</h2>
                <div className="weather-info">
                    <div className="weather-descript">{data.main}</div>
                    <img className="weather-icon" src={`./img/${data.main}.png`}alt="img"/>
                    <h1 className="main-temp">{Math.round(data.temp)}°C</h1>
                    <div className="date-time">{date}</div>
                    <div className="sub-info">
                        <div className="col">
                            <img src="./img/rain-umbrella.png" alt="img"/>
                            <div>
                                <p className="precipitation">{Math.round(data.precipitation)}%</p>
                                <p>precipitation</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./img/drop.png" alt="img"/>
                            <div>
                                <p className="humidity">{Math.round(data.humidity)}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./img/wind.png" alt="img"/>
                            <div>
                                <p className="wind">{Math.round(data.wind)} km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
