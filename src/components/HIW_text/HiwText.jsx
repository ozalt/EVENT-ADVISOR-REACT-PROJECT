import React from 'react';
import './hiwtext.css';
import icon from '../../assets/Work.png'

const HiwText = ({HiwHeading, HiwText}) => {
    return (
        <div className='how-work'>
            <img src={icon} alt="" />
            <div className="how-heading">
                <h1>{HiwHeading}</h1>
                <p>{HiwText}</p>
            </div>
        </div>
    )
}

export default HiwText
