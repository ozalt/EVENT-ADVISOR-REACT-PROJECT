import React from 'react';
import './area.css';
import hallImg from '../../assets/indoor.png'

const Area = () => {
    return (
        <div className='area'>
            <img src={hallImg} alt="" />
            <div className="area-content">
                <h3>200 Seating  |  50 Extra</h3>
                <p>Hall 1</p>
            </div>
        </div>
    )
}

export default Area
