import React from 'react';
import './singlereview.css';
import profileImg from '../../assets/profile.jfif';
import { RiStarFill } from 'react-icons/ri';



const SingleReview = () => {
    return (
        <div className='review-content'>
            <div className="review-profile">
                <img src={profileImg} alt="" />
                <h3>Megan Fox</h3>
                <h4>Stayed 18 Nov, 2019</h4>
                <div className="vendor-title-star">
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                    <RiStarFill size={14} color='#F2994A' />
                </div>

            </div>
            <p>It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. </p>
        </div>
    )
}

export default SingleReview
