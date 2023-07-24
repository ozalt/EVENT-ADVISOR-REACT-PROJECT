import React from 'react';
import { NavBar } from '../../components';
import './hero.css';

const Hero = () => {

    return (
        <>
            <div className="hero">
                <NavBar color="#f6f6f6" />
                <div className="header section__padding" id="home">
                    <div className="header-content">
                        <h1>Your Wedding Your Way</h1>
                        <p>Find the best wedding vendors with thousands of trusted reviews</p>
                    </div>
                </div>

            </div>
            {/* <SearchBar /> */}
        </>
    );
};

export default Hero;
