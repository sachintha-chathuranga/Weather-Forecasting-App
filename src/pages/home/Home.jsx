import React from 'react';
import { useState } from 'react';
// import ForecastWeather from '../../component/forecast/ForecastWeather';
import TodayWeather from '../../component/todayCard/TodayWeather';
import './home.css';


export default function Home() {
    
    const [data, setData] = useState([]);
    const setDataList = (d) =>{
        setData(d);
    }
    return (
        <div className="home">
            <TodayWeather setForeCast={setDataList}/>
            {/* <ForecastWeather list={data} /> */}
        </div>
    )
}

