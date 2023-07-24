import React from 'react';
import './feature.css';
import { VendorCard } from '../../components';

const Feature = () => {
    return (
        <div className='feature'>
            <div className="feature-heading">
                <h1>Destiny with Memorable Destinations</h1>
                <p>Top places where you can visit</p>
            </div>
            <div className="feature-card">
                <VendorCard />
                <VendorCard />
                <VendorCard />
                <VendorCard />
            </div>
        </div>
    )
}

export default Feature
