import React from 'react';
import './reviewarea.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SingleReview } from '../../components';
import Img from '../../assets/profile.jfif';

const ReviewArea = () => {
    return (
        <div className='review-area'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                <SingleReview  profileImg={Img} profileName={'Zeekay'} reviewDate={'Stayed 18 Nov, 2019'} reviewText={'It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. '}/>
                
                <SingleReview  profileImg={Img} profileName={'Zeekay'} reviewDate={'Stayed 18 Nov, 2019'} reviewText={'It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. '}/>

                <SingleReview  profileImg={Img} profileName={'Zeekay'} reviewDate={'Stayed 18 Nov, 2019'} reviewText={'It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. '}/>
                {/* Add more SingleReview components as needed */}
            </Carousel>
        </div>
    );
};

export default ReviewArea;
