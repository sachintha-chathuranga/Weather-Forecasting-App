import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/Card';
import axios from "axios";
import "./forecast.css";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function ForecastWeather({list}) {
    const [days, setDays] = useState(3);
    const [foreCast, setForeCast] = useState(list);

    useEffect(() => {
        axios.get(`${API_URL}data/2.5/forecast/daily?q=colombo&cnt=${days}&appid=${API_KEY}&units=metric`)
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
