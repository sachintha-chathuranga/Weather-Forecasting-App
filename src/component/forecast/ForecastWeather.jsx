import { memo } from 'react';
import useFetch from '../../useFetch';
import Card from '../card/Card';
import "./forecast.css";

const array = [1,2,3,4,5,6,7];
const FORECAST_API_URL = process.env.REACT_APP_FORECAST_API_URL;

function ForecastWeather({coord}) {
    
    const {data, error, isFetching} = useFetch(`${FORECAST_API_URL}latitude=${coord.lat}&longitude=${coord.lon}`, true);
    
    return (
        <div className="forecast">
            <h4>This week forecasting</h4>
            <hr/>
            {error && <div className="error-txt">{error}</div>}
            <div className="row">
            {(!isFetching && data) ? data.time.map((day, index) =>(
                <Card key={day} data={{day : day, mood : data.weathercode[index], temp : data.temperature_2m_max[index]}} isFetching={isFetching} />
            )) : array.map(index => (
                <Card key={index} isFetching={isFetching}/>
            ))}
            </div>
        </div>
    )
}

export default memo(ForecastWeather);
