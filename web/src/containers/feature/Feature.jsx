import React from 'react';
import './feature.css';
import { VendorCard } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Feature = () => {
    return (
        <div className='feature'>
            <div className="feature-heading">
                <h1>Destiny with Memorable Destinations</h1>
                <p>Top places where you can visit</p>
            </div>
            <div className="feature-card">
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={true}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={23}
                    emulateTouch={true}
                    swipeable={true}
                    renderIndicator={(clickHandler, isSelected, index, label) => {
                        if (isSelected) {
                            return (
                                <li
                                    className="dot active"
                                    aria-label={`Slide ${label} active`}
                                    title={`Slide ${label}`}
                                    onClick={clickHandler}
                                    key={index}
                                />
                            );
                        }
                        return (
                            <li
                                className="dot"
                                aria-label={`Slide ${label}`}
                                title={`Slide ${label}`}
                                onClick={clickHandler}
                                key={index}
                            />
                        );
                    }}
                >
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                    <VendorCard />
                </Carousel>
            </div>
        </div>
    )
}

export default Feature
