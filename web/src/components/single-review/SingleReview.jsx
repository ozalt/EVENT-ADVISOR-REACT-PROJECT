import React from 'react';
import './singlereview.css';
// import profileImg from '../../assets/profile.jfif';
import { RiStarFill } from 'react-icons/ri';



const SingleReview = ({profileImg, profileName, reviewDate, reviewText} ) => {
    return (
        <div className='review-content'>
            <div className="review-profile">
                <img src={profileImg} alt="" />
                <h3>{profileName}</h3>
                <h4>{reviewDate}</h4>
                <div className="vendor-title-star">
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                </div>

            </div>
            <p>{reviewText}</p>
        </div>
    )
}

export default SingleReview
