import React from 'react';
import './newsletter.css';
// import newsletter_img from '../../assets/Newsletter.png'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            {/* <img src={newsletter_img} alt="" /> */}
            <div className="newsletter-heading">
                <h1>let  us send you our</h1>
                <p>Suggestions</p>
            </div>
            <div className="newsletter-input">
                <form action="" method="post">
                    <input type="text" placeholder='Your email address'/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter
