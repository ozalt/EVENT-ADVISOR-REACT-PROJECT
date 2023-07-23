import React, { useState, useEffect } from 'react';
import './vendordetail.css';
import { useParams } from 'react-router-dom';

// icon...
import { RiUser3Line, RiStarFill, RiHeartLine, RiHome5Line, RiQuillPenFill } from 'react-icons/ri';

import { NavBar, BreadCrumb } from '../../components';
import { NewsLetter, Footer, AreaAvailable, DetailProject, PackageArea, ReviewArea } from '../../containers';

const VendorDetail = () => {
    const [date, setDate] = useState('');
    const [vendorData, setVendorData] = useState({});
    const [venueHalls, setVenueHalls] = useState({});
    const { id } = useParams();
    const [selectedValueType, setSelectedValueType] = useState('');


    const handleRadioChangeType = (e) => {
        setSelectedValueType(e.target.value);
    };

    const [selectedValueTime, setSelectedValueTime] = useState('');

    const handleRadioChangeTime = (e) => {
        setSelectedValueTime(e.target.value);
    };

    // fetch single venue detaills
    useEffect(() => {
        const fetchVendorData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/vendor/venue-detail/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setVendorData(data.venue); // Update the state with the fetched vendor data
                } else {
                    console.log("Error:", response.status);
                }
            } catch (error) {
                console.log("Fetch error:", error);
            }
        };
        fetchVendorData();
    }, [id, vendorData]);

    // fetch all hall detaill's
    useEffect(()=>{
    const fetchVenueHalls = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/vendor/venue-hall/${id}`);
            if (response.ok) {
                const data = await response.json();
                setVenueHalls(data.hall && data.hall.length > 0 ? data.hall : []);
                // console.log(venueHalls)
            } else {
                console.log("Error:", response.status);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };
    fetchVenueHalls();
    },[id, venueHalls])


    return (
        <div>
            <NavBar color='#0A142F' />
            <BreadCrumb />
            {/* vendor titel */}
            <div className="vendor-title">
                <div className="vendor-title-name">
                    <div className="vendor-title-star">
                        <RiStarFill size={14} color='#F2994A' />
                        <RiStarFill size={14} color='#F2994A' />
                        <RiStarFill size={14} color='#F2994A' />
                        <RiStarFill size={14} color='#F2994A' />
                        <RiStarFill size={14} color='#F2994A' />
                    </div>
                    <h1>{vendorData.venueName}</h1>
                    <p>{vendorData.location}</p>
                </div>
                <div className="vendor-title-btn">
                    <div className="vendor-title-rating">
                        <h4>4.5/6</h4>
                        <p>69 Reviews</p>
                    </div>
                    <div className="vendor-title-wishlist">
                        <RiHeartLine size={24} color='#F04445' />
                        <p>wishlist</p>
                    </div>

                </div>
            </div>
            {/* vendor title end */}

            {/* vendor img detail */}
            <div className="single-vendor-detail">
                <img src={vendorData.venueImageUrl} alt="" />
                <div className="vendor-detail-sidebar">
                    <div className="sidebar-booking">
                        <h3>Price starts at</h3>
                        <div className="line"></div>
                        <div className="booking-detail">
                            <div className="booking-detail-price">
                                <div className="detail-price">
                                    <h3>Chicken</h3>
                                    <h1>Rs. 2050 </h1>
                                    <p>per head + taxes</p>
                                </div>
                                <div className="detail-price">
                                    <h3>Mutton</h3>
                                    <h1>Rs. 2200 </h1>
                                    <p>per head + taxes</p>
                                </div>
                            </div>
                            <div className="detail-hall">
                                <div className="hall-content">
                                    <RiUser3Line />
                                    <p>{vendorData.venueCapacity} Guests</p>
                                </div>
                                <div className="hall-content">
                                    <RiHome5Line />
                                    <p>{venueHalls ? venueHalls.length : 0}  Hall</p>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-detail-btn">
                            <button id='menu-btn'>View Menu</button>
                            <button id='review-btn'><RiQuillPenFill size={14} /> Write a Review</button>
                        </div>

                    </div>
                    <div className="sidebar-contact">
                        <h2>Get in Touch</h2>
                        <div className="line"></div>
                        <p>Hi, {vendorData.venueName}</p>
                        <form action="" method="post">
                            <div className="contact-row">
                                <input type="text" placeholder='Full Name *' />
                                <input type="text" placeholder='Phone Number' />
                            </div>
                            <div className="contact-row">
                                <input type="email" placeholder='Email *' />
                                <input placeholder='Function Date'
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="contact-row">
                                <input type="number" placeholder='No. of guest * (min 50)' />
                                <input type="number" placeholder='Number of Hall' />
                            </div>
                            {/* radio button */}
                            <div className="contact-checkbox">
                                <div className="contact-checkbox-col">
                                    <p>Function Type</p>
                                    <div className="checkbox-row">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="wedding"
                                                checked={selectedValueType === 'wedding'}
                                                onChange={handleRadioChangeType}
                                            />
                                            <span className="radio-text">Wedding</span>
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="pre-wedding"
                                                checked={selectedValueType === 'pre-wedding'}
                                                onChange={handleRadioChangeType}
                                            />
                                            <span className="radio-text">Pre-wedding</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="contact-checkbox-col">
                                    <p>Function Time</p>
                                    <div className="checkbox-row">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="Lunch"
                                                checked={selectedValueTime === 'Lunch'}
                                                onChange={handleRadioChangeTime}
                                            />
                                            <span className="radio-text">Lunch</span>
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                className="radio"
                                                value="Dinner"
                                                checked={selectedValueTime === 'Dinner'}
                                                onChange={handleRadioChangeTime}
                                            />
                                            <span className="radio-text">Dinner</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit">Get Response</button>
                        </form>

                    </div>

                </div>
            </div>
            {/* End vendor img area */}

            {/* sub-nav bar */}
            <div className="vendor-sub-navbar">
                <ul>
                    <li>Hotel Information</li>
                    <li>Area Available</li>
                    <li>Package Summery</li>
                    <li>Project’s</li>
                    <li>Reviews </li>
                </ul>
            </div>

            <AreaAvailable hallDetail={venueHalls} />
            <DetailProject projectImagesUrl={vendorData.projectImagesUrl} projectVideosUrl={vendorData.projectVideosUrl} />

            <PackageArea />

            <ReviewArea />

            <NewsLetter />
            <Footer />

        </div>
    )
}

export default VendorDetail
