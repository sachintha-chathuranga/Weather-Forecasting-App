import { memo } from "react"
import Skelton from "../skelton/Skelton"

function Card({data, isFetching}) {
    return (
        <div className="card">
            {(isFetching || !data) ? <Skelton type="day" /> : <h4>{data.day && new Date(data.day * 1000).toLocaleDateString(undefined, {weekday: "short"})}</h4>}
            {(isFetching || !data) ? <Skelton type="fore-img" /> : (data.mood>9 ? <img src={"./img/"+Math.floor(data.mood/10)+".png"} alt="img"/> :
            <img src={"./img/"+data.mood+".png"} alt="img"/>)}
            {(isFetching || !data) ? <Skelton type="fore-temp" /> : <p>{data.temp+"°C"}</p>}
         </div>
    )
}

export default memo(Card);
