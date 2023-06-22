import { useState, memo, useRef, useEffect} from 'react';
import './today.css';
import Skelton from '../skelton/Skelton';
import SubCard from '../subInfo/SubCard';
import useFetch from '../../useFetch';
import useLocation from '../../useLocation';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function TodayWeather({setCoord}) {

    const [latitude, longitude]= useLocation();
    const [url, setUrl] = useState(`${API_URL}data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const input = useRef(null);
    const {data, error, isFetching, setError} = useFetch(url, false);
    
    useEffect(() => {
        data ? setCoord({lon: data.lon, lat: data.lat}) : setCoord({});
    }, [data, setCoord]);

    const handleSearch = () =>{
        if(input.current.value){
            setUrl(`${API_URL}data/2.5/weather?q=${input.current.value.trim()}&appid=${API_KEY}&units=metric`);
        }
    }

    return (
        
        <div className="today-card">
            <div className="search-bar">
                <input minLength="2" maxLength="20" pattern="[A-Za-z]+" title="Please enter only alphabetic characters!" type="text" placeholder="Enter City Name" onChange={() => setError(null)} ref={input} />
                <button onClick={handleSearch}><img src="./img/search.png" alt=""/></button>
            </div>
            {error && <div className="error-txt">{error}</div>}
            <section className="main-weather" >
                <h2 className="city">{isFetching||!data ? <Skelton type="city"/> : data.city}</h2>
                <div className="weather-info">
                    <div className="weather-descript">{isFetching||!data ? <Skelton type="mood"/> : data.main}</div>
                   {isFetching||!data ? <Skelton type="image"/> : <img className="weather-icon" src={`./img/${data.main}.png`}alt="img"/>}
                    <h1 className="main-temp">{isFetching||!data ? <Skelton type="temp"/> : Math.round(data.temp)+"°C"}</h1>
                    <div className="date-time">{isFetching||!data ? <Skelton type="date"/> : new Date(data.date * 1000).toLocaleDateString(undefined, {weekday: "long", month: "long", year: "numeric", day: "numeric"})}</div>
                    <SubCard data={data} isFetching={isFetching} />
                </div>
            </section>
        </div>
    )
}

export default memo(TodayWeather);
