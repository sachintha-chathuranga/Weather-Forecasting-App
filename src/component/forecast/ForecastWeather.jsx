import React from 'react';
import { memo } from 'react';
import Card from '../card/Card';
import "./forecast.css";

const array = [1,2,3,4,5,6,7];

function ForecastWeather({list, isfetching}) {

    return (
        <div className="forecast">
            <h4>Forecast</h4>
            <hr/>
            <div className="row">
            {(!isfetching && list) ? list.time.map((day, index) =>(
                <Card key={day} data={{day : day, mood : list.weathercode[index], temp : list.temperature_2m_max[index]}} isFetching={isfetching} />
            )) : array.map(index => (
                <Card key={index} isFetching={isfetching}/>
            ))}
            </div>
        </div>
    )
}

export default memo(ForecastWeather);
