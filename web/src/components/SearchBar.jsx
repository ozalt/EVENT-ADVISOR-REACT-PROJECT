import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');
    const [results, setResults] = useState(null);

    const timeOptions = ['lunch', 'dinner'];

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/vendor/search?date=${date}&time=${time}&capacity=${capacity}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data);
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    };

    // Call the onSearch function whenever the results state changes
    useEffect(() => {
        if (results !== null) {
            onSearch(results);
            setDate('');
            setTime('');
            setCapacity('');
            setResults(null); // Change this to setResults(null) to reset the state properly
        }
    }, [results, onSearch]);


    return (
        <div className="vendor-search">
            <form action="" onSubmit={handleSearch}>
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
                                <option key={option} value={option}>
                                    {option}
                                </option>
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
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
