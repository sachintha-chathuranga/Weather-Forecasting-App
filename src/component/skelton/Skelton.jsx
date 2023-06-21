import React from 'react';
import { memo } from 'react';
import './skelton.css'

function Skelton({type}) {
    return (
        <div className={`skelton ${type}`} >
            <div className="shimer"></div>    
        </div>
    )
}

export default memo(Skelton);