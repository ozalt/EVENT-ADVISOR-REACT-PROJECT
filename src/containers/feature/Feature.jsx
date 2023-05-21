import React from 'react';
import './feature.css';
import { VendorCard } from '../../components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Feature = () => {
    return (
        <div className='feature'>
            <div className="feature-heading">
                <h1>Destiny with Memorable Destinations</h1>
                <p>Top places where you can visit</p>
            </div>
            <div className="feature-card">
                <AliceCarousel
                    mouseTracking
                    items={[
                        <VendorCard key={1} />,
                        <VendorCard key={2} />,
                        <VendorCard key={3} />,
                        <VendorCard key={4} />,
                        <VendorCard key={5} />,
                    ]}
                    responsive={{
                        0: { items: 1 },
                        768: { items: 3 },
                    }}
                    buttonsDisabled={true} // Hide the navigation arrows
                    dotsDisabled={false} // Display the navigation dots
                    renderDotsItem={(currentItem, i) => (
                        <span className={`dot ${currentItem === i ? 'active' : ''}`} />
                    )}
                />
            </div>
        </div>
    )
}

export default Feature
