import React from 'react';
import { Hero, Location, Feature, Hiw, Blog,NewsLetter, Footer } from '../containers';
const Home = () => {
    return (
        <div>
            <Hero />
            <Location />
            <Feature />
            <Hiw />
            <Blog />
            <NewsLetter/>
            <Footer />
        </div>
    )
}

export default Home
