import React, { useState } from 'react';
import './filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };
    return (
        <div className='filter-area'>
            <div className='filter'>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>No. of Guest</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>Price per Head</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>Vendor Type</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>Space</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>Category</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>
                <div className="filter-label" onClick={handleToggleForm}>
                    <p>Rating</p>
                    <i>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </i>
                </div>

            </div>

            {/* form */}
            {showForm && (
                <div className="drop-down-area">
                    <form action="" method="post">
                        <div className="filter-drop-down">
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="dropdown-content">
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="500"
                                        // checked={guestCount === '500'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        500
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value="300"
                                        // checked={guestCount === '300'}
                                        // onChange={handleGuestCountChange}
                                        />
                                        300
                                    </label>
                                    {/* Add more options */}
                                </div>
                            </div>
                        </div>
                        <button type="reset" className='filter-btn'>Reset</button>
                    </form>
                </div>

            )}
        </div>
    )
}

export default Filter
