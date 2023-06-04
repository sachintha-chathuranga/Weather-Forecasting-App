import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import axios from "axios";
import "./forecast.css";

export default function ForecastWeather({list}) {
    const [days, setDays] = useState(3);
    const [foreCast, setForeCast] = useState(list);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=colombo&cnt=${days}&appid=8a054cdd09032e964a87f9a0d49b1665&units=metric`)
        .then(res =>{
            setForeCast(res.data.list);
        })
        .catch(err => console.log(err));
    }, [days]);
    return (
        <div className="forecast">
            <h4>Forecast</h4>
            <hr/>
            <div className="row">
            {foreCast.map((d) =>(
                <Card id={d.weather[0].id} data={d} />
            ))}
            {days!==7 && <button onClick={() => setDays(7)} className="veiw-more">Veiw More</button>}
            </div>
        </div>
    )
}
