import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import './today.css';
import { useRef } from 'react';

export default function TodayWeather({setForeCast}) {
    
    const [data, setData] = useState({
        main: "sun",
        desc: "sunny day",
        temp: 30,
        precipitation: 10,
        humidity: 5,
        wind: 40,
        city: "Colombo"
    });

    const cityName = useRef("");
    const [error, setError] = useState("");
    

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=colombo&appid=8a054cdd09032e964a87f9a0d49b1665&units=metric")
        .then(res =>{
            setData({...data, main: res.data.weather[0].main, desc: res.data.weather[0].descriptions, temp: res.data.main.temp, 
            precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
        })
        .catch(err => console.log(err));
    }, []);

    const handleSearch = () =>{
        if(cityName.current.value !== ""){

            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.current.value}&appid=8a054cdd09032e964a87f9a0d49b1665&units=metric`)
            .then(res =>{
                console.log(res.data);
                setData({...data, main: res.data.weather[0].main, desc: res.data.weather[0].descriptions, temp: res.data.main.temp, 
                precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
        })
        .catch(err => {
            if(err.response.status === 404 ){
                setError("Invalid City Name");
            }else{
                setError(err.response);
            }
        });

            axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName.current.value}&cnt=3&appid=8a054cdd09032e964a87f9a0d49b1665&units=metric`)
            .then(res =>{
                setForeCast(res.data.list);
            })
            .catch(err => console.log(err));
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
                    <div className="weather-descript">{data.desc}</div>
                    <img className="weather-icon" src={`./img/${data.main}.png`}alt="img"/>
                    <h1 className="main-temp">{data.temp}°C</h1>
                    <div className="date-time">sunday</div>
                    <div className="sub-info">
                        <div className="col">
                            <img src="./img/rain-umbrella.png" alt="img"/>
                            <div>
                                <p className="precipitation">{data.precipitation}%</p>
                                <p>precipitation</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./img/drop.png" alt="img"/>
                            <div>
                                <p className="humidity">{data.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="./img/wind.png" alt="img"/>
                            <div>
                                <p className="wind">{data.wind} km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
