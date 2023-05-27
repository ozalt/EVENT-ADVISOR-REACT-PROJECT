import React from 'react';
import './areaavailable.css';
import { Area } from '../../components';

const AreaAvailable = () => {
    return (
        <div className='area-available'>
            <h2>Area Available</h2>
            <div className="line"></div>
            <div className="area-row">
                <Area />
                <Area />
            </div>
            <div className="area-row">
                <Area />
                <Area />
            </div>
            <div className="area-row">
                <Area />
            </div>
        </div>
    )
}

export default AreaAvailable
