import React from 'react';
import './location.css';
import { Place } from '../../components';
// import image
import fsd from '../../assets/Faisalabad.png';
import skardu from '../../assets/skardu.png';
import hunza from '../../assets/Hunza.png';
import banjosa from '../../assets/Banjosa.png';
import karachi from '../../assets/Karachi.png';
import isl from '../../assets/Islamabad.png';

const Location = () => {

    return (
        <div className='location'>
            <div className="location-heading">
                <h1>Destiny with Memorable Destinations</h1>
                <p>Top place where u can visit</p>
            </div>
            <div className="location-container">

                <Place imgUrl={fsd} imgHeight="530px" text="Faisalabad" textPosition="50px" className="loc-place"/>
                <div className="column">
                    <Place imgUrl={skardu} imgHeight="178px" text="Skardu" textPosition="45px" className="loc-place"/>
                    <Place imgUrl={hunza} imgHeight="344px" text="Hunza" textPosition="300px" className="loc-place"/>
                </div>
                <div className="column">
                    <Place imgUrl={banjosa} imgHeight="264px" text="Banjosa" textPosition="203px" className="loc-place"/>
                    <Place imgUrl={karachi} imgHeight="255px" text="Karachi" textPosition="203px" className="loc-place"/>
                </div>
                <Place imgUrl={isl} imgHeight="530px" text="Islamabad" textPosition="50px" className="loc-place"/>
            </div>
        </div>
    )
}

export default Location
