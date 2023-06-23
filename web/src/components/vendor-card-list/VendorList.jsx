import React from 'react';
import { Link } from "react-router-dom";
import { RiHeartLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './vendorlist.css';

const VendorList = ({vendorImg, vendorName, vendorLoc, vendorRating, vendorReview, vendorDetail}) => {
    return (
        <div className='vendor-list'>
            <div className="list-img">
                <img src={vendorImg} alt="" />
                <i>
                    <RiHeartLine size={24} color='#f6f6f6' />
                </i>
            </div>
            <div className="list-body">
                <div className="list-body-heading">
                    <div className="body-heading-content">
                        <h1>{vendorName} <span>Class A</span></h1>
                        <div className="heading-address">
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                {vendorLoc}...
                            </p>
                            <i>Show on Map</i>
                        </div>
                    </div>
                    <div className="body-heading-rating">
                        <h4>{vendorRating}/5</h4>
                        <p>{vendorReview} reviews</p>
                    </div>
                </div>
                <div className="list-body-content">
                    <p>{vendorDetail}</p>
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
