import React from 'react';
import './areaavailable.css';
import hallImg from '../../assets/indoor.png';

const AreaAvailable = ({ hallDetail }) => {
    // Ensure hallDetail is an array and not empty
    if (!Array.isArray(hallDetail) || hallDetail.length === 0) {
        return (<div className='area-available'>
            <h2>Area Available</h2>
            <div className="line"></div>

            <div className="area-error">
                <div className="area-error-msg">
                    <img src={hallImg} alt="" />
                    <p>Image display Here...</p>
                </div>
            </div>

        </div>)
    }

    return (
        <div className='area-available'>
            <h2>Area Available</h2>
            <div className="line"></div>

            <div className="area-row">
                {hallDetail.map((hall) => (
                    <div className='area' key={hall._id}>
                        <img src={hallImg} alt="" />
                        <div className="area-content">
                            <h3>{hall.capacity} Seating  |  {hall.floatCapacity} Extra</h3>
                            <p>{hall.hallName}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AreaAvailable;
