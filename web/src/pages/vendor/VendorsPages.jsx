import React, { useState } from 'react';
import './vendor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NavBar, BreadCrumb, Filter, VendorList } from '../../components';
import { NewsLetter, Footer } from '../../containers';
import listImg from '../../assets/1.jpg';


const Vendors = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');

    const handleSearch = () => {
        // Perform search logic here based on the selected date, time, and capacity
        console.log('Search:', date, time, capacity);
    };

    const timeOptions = [
        'Lunch',
        'Dinner',

    ];
    return (
        <div className='vendor-page'>
            <NavBar color='#0A142F' />
            {/* search bar */}
            <div className="vendor-search">
                <form action="" method="post">
                    <div className="search-input">
                        <FontAwesomeIcon icon={faCalendar} />
                        <div className="column">
                            <label htmlFor="date">Date:</label>
                            <input
                                id="date"
                                type="date"
                                placeholder="Select Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="divider" />
                        <FontAwesomeIcon icon={faClock} />
                        <div className="column">
                            <label htmlFor="time">Time:</label>
                            <select
                                id="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">Time</option>
                                {timeOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="divider" />
                        <FontAwesomeIcon icon={faUsers} />
                        <div className="column">
                            <label htmlFor="capacity">Capacity</label>
                            <input
                                id="capacity"
                                type="number"
                                placeholder="Capacity"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                            />
                        </div>
                        <button className="search-button" type="submit" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </form>
            </div>
            {/* end search bar */}

            <BreadCrumb />
            <Filter />
            {/* vendor listss */}
            <div className="vendor-page-lists">
                <VendorList vendorImg={listImg} vendorName={'Grand palm hotel'} vendorLoc={'Honda Showroom'} vendorRating={'4.1'} vendorReview={'55'} vendorDetail={'Redwood Resorts, in Panchkula is situated amidst the serene backdrop of Morin town. A haven of tranquility where the only sounds being the wind...'} />
                <VendorList vendorImg={listImg} vendorName={'Grand palm hotel'} vendorLoc={'Honda Showroom'} vendorRating={'4.1'} vendorReview={'55'} vendorDetail={'Redwood Resorts, in Panchkula is situated amidst the serene backdrop of Morin town. A haven of tranquility where the only sounds being the wind...'} />
                <VendorList vendorImg={listImg} vendorName={'Grand palm hotel'} vendorLoc={'Honda Showroom'} vendorRating={'4.1'} vendorReview={'55'} vendorDetail={'Redwood Resorts, in Panchkula is situated amidst the serene backdrop of Morin town. A haven of tranquility where the only sounds being the wind...'} />
                <VendorList vendorImg={listImg} vendorName={'Grand palm hotel'} vendorLoc={'Honda Showroom'} vendorRating={'4.1'} vendorReview={'55'} vendorDetail={'Redwood Resorts, in Panchkula is situated amidst the serene backdrop of Morin town. A haven of tranquility where the only sounds being the wind...'} />
            </div>
            {/* end vendor listss */}
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Vendors
