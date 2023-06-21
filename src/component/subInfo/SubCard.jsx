import { CircularProgress } from "@material-ui/core"
import { memo } from "react"


function SubCard({data, isFetching}) {
    return (
        <div className="sub-info">
            <div className="col">
                <img src="./img/rain-umbrella.png" alt="img"/>
                <div className='sub-info-wrapper'>
                    {isFetching||!data ? <CircularProgress style={{color: '#3fc3e1', width: "35px", height: "35px"}} className="loading" /> : <p className="precipitation">{Math.round(data.precipitation)}%</p>}
                    <p>precipitation</p>
                </div>
            </div>
            <div className="col">
                <img src="./img/drop.png" alt="img"/>
                <div className='sub-info-wrapper'>
                    {isFetching||!data ? <CircularProgress style={{color: '#3fc3e1', width: "35px", height: "35px"}} className="loading" /> : <p className="humidity">{Math.round(data.humidity)}%</p>}
                    <p>Humidity</p>
                </div>
            </div>
            <div className="col">
                <img src="./img/wind.png" alt="img"/>
                <div className='sub-info-wrapper'>
                    {isFetching||!data ? <CircularProgress style={{color: '#3fc3e1', width: "35px", height: "35px"}} className="loading" /> : <p className="wind">{Math.round(data.wind)} km/h</p>}
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default memo(SubCard);
