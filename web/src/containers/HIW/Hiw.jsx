import React from 'react';
import './hiw.css';
import { HiwText } from '../../components';
import HiwImg from '../../assets/how_it _work.png'
const Hiw = () => {
    return (
        <div className='how-it-work'>
            <div className="how-it-work-heading">
                How It Work?
                <div className="work-design"></div>
            </div>
            <div className="work-body">
                <div className="work-content">
                    <HiwText HiwHeading={'Create an Account'} HiwText={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'} />

                    <HiwText HiwHeading={'More Halp'} HiwText={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'} />

                    <HiwText HiwHeading={'Once More'} HiwText={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'} />
                </div>
                <img src={HiwImg} alt="" className='work-img' />
            </div>
        </div>
    )
}

export default Hiw
