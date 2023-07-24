import React from 'react';
import './vendorpackage.css';
import { RiUser3Line, RiHome5Line } from 'react-icons/ri';
import { IoRestaurant } from 'react-icons/io5';

const VendorPackage = ({ packageData }) => {
    const { packageName, menuType, seatingCapacity, floationCapacity, hall, totalPrice, packageImageUrl } = packageData;
    return (
        <div className='vendor-package'>
            <img src={packageImageUrl} alt="" />
            <div className="package-content">
                <h1>{packageName}</h1>
                <div className="package-offer">
                    <p><IoRestaurant /> {menuType}</p>
                    <p><RiUser3Line /> {seatingCapacity} + {floationCapacity} x Guests</p>
                    <p><RiHome5Line /> {hall} x Room</p>
                </div>
                <div className="package-price">
                    <p>{totalPrice} Pkr/-</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default VendorPackage;
