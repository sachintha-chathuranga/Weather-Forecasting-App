import { useCallback, useState } from 'react';
import ForecastWeather from '../../component/forecast/ForecastWeather';
import TodayWeather from '../../component/todayCard/TodayWeather';
import './home.css';

export default function Home() {

    const [data, setData] = useState({});
    
    const setCoord = useCallback((d) => {
        setData(d);
    },[]);

    return (
        <div className="home">
            <TodayWeather setCoord={setCoord} />
            <ForecastWeather coord={data} />
        </div>
    )
}

