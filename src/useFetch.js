import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsfetching] = useState(false);

    useEffect(() => {
        const fetchData = async ()=>{
            setIsfetching(true);
            try {
                const res = await axios.get(url);
                setData({date: res.data.dt, lon: res.data.coord.lon, lat: res.data.coord.lat, main: res.data.weather[0].main, temp: res.data.main.temp, 
                    precipitation: res.data.main.feels_like, humidity: res.data.main.humidity, wind: res.data.wind.speed, city: res.data.name});
                    setError(null);
            } catch (err) {
                if(err.response){
                    err.response.data && setError(err.response.data.message);
                }else{
                    setError("You are currently offline. Chech your internet connection");
                }
            }
            setIsfetching(false);
        }
        fetchData();
    }, [url]);

    return ({data, error, isFetching, setError});
}

export default useFetch;
