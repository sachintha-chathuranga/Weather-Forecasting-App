import React, { useState } from 'react';

export default function Card({data}) {
    
    return (
        <div className="card">
            <h4>{data.dt && new Date(data.dt).toLocaleDateString(undefined, {weekday: "short"})}</h4>
            <img src={"./img/"+data.weather[0].main+".png"} alt="img"/>
            <p>{data.temp.day+"°C"}</p>
         </div>
    )
}
