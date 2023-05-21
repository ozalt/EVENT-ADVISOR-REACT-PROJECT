import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NavBar } from '../../components';
import './hero.css';

const Hero = () => {
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
        <div className="hero">
            <NavBar />
            <div className="header section__padding" id="home">
                <div className="header-content">
                    <h1>Your Wedding Your Way</h1>
                    <p>Find the best wedding vendors
                        with thousand of trusted review </p>
                </div>
                {/* search area */}
                <div className="search-bar">
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

                        <button className="search-button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
