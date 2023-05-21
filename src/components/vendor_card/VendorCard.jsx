import React from 'react';
import './vendorcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import wishlist from '../../assets/wishlist.png';
import img from '../../assets/vendor-1.jpg';


const VendorCard = () => {
    return (
        <div className='vendor-card'>
            <img src={img} alt="" />
            <div className="vendor-detail">
                <div className="vendor-heading">
                    <h1>Wedding Venue Title Name</h1>
                    <div className="vendor-loc">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>HONDA Showroom...</p>
                    </div>
                </div>
                <button>
                    <img src={wishlist} alt="" />
                </button>
            </div>
            <div className="vendor-footer">
                <div className="vendor-footer-text">
                    <h1>PKr 200/-</h1>
                    <p>Starting</p>
                </div>
                <div className="vendor-footer-text">
                    <h1>250</h1>
                    <p>Guest</p>
                </div>
                <div className="vendor-footer-text">
                    <h1>4.1/5</h1>
                    <p>233 reviews</p>
                </div>
            </div>
        </div>
    )
}

export default VendorCard
