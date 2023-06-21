import React, { useCallback } from 'react';
import { useState } from 'react';
import ForecastWeather from '../../component/forecast/ForecastWeather';
import TodayWeather from '../../component/todayCard/TodayWeather';
import './home.css';

export default function Home() {

    const [data, setData] = useState(null);
    const [isFetching, setisFetching] = useState(false);

    const setDataList = useCallback((d) => {
        setData(d);
    },[],);

    const setFetching = useCallback((val) => {
        setisFetching(val);
    },[],);

    return (
        <div className="home">
            <TodayWeather setForeCast={setDataList} setisFetching={setFetching} />
            <ForecastWeather list={data} isfetching={isFetching} />
        </div>
    )
}

