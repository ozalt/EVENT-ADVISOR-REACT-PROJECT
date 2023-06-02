import React from 'react';
import { Link } from "react-router-dom";
import { RiHeartLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './vendorlist.css';
import listImg from '../../assets/1.jpg';

const VendorList = () => {
    return (
        <div className='vendor-list'>
            <div className="list-img">
                <img src={listImg} alt="" />
                <i>
                    <RiHeartLine size={24} color='#f6f6f6' />
                </i>
            </div>
            <div className="list-body">
                <div className="list-body-heading">
                    <div className="body-heading-content">
                        <h1>Royal Palm Marquee <span>Class A</span></h1>
                        <div className="heading-address">
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                HONDA Showroom...
                            </p>
                            <i>Show on Map</i>
                        </div>
                    </div>
                    <div className="body-heading-rating">
                        <h4>4.5/5</h4>
                        <p>23 reviews</p>
                    </div>
                </div>
                <div className="list-body-content">
                    <p>Redwood Resorts, in Panchkula is situated amidst the serene backdrop of Morin town. A haven of tranquility where the only sounds being the wind...</p>
                    <Link to="/vendor-detail">
                        <div className="list-body-content-button">
                            <p>Contact Now</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VendorList
