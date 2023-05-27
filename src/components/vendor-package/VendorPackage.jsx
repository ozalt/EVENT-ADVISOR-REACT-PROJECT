import React from 'react';
import './vendorpackage.css';


import { RiMapPinLine } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';
import { RiHome5Line } from 'react-icons/ri';

import packageImg from '../../assets/vendor-1.jpg'

const VendorProject = () => {
    return (
        <div className='vendor-package'>
            <img src={packageImg} alt="" />
            <div className="package-content">
                <h1>package Name</h1>
                <div className="package-offer">
                    <p><RiMapPinLine/> 1749 Wheeler Ridge  Delaware</p>
                    <p><RiUser3Line /> 500 x Guests</p>
                    <p><RiHome5Line /> 1 x Room</p>
                </div>
                <div className="package-price">
                    <p>$ 8,500</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default VendorProject
