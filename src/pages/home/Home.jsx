import React from 'react';
import { useState } from 'react';
import ForecastWeather from '../../component/forecast/ForecastWeather';
import TodayWeather from '../../component/todayCard/TodayWeather';
import './home.css';


export default function Home() {
    
    const [data, setData] = useState([]);

    return (
        <div className="home">
            <TodayWeather setForeCast={setData}/>
            <ForecastWeather list={data} />
        </div>
    )
}

