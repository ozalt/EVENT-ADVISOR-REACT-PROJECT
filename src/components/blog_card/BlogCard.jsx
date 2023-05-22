import React from 'react';
import './blogcard.css';

const BlogCard = ({blogTitle, blogText, blogimg, blogName, blogDate}) => {
    return (
        <div className='blog-card'>
            <img src={blogimg} alt="" className='blog-card-img'/>
            <div className="blog-card-detail">
                <h1>{blogTitle}</h1>
                <h2>{blogText}</h2>
                <p>By <span className='blog-card-name'>{blogName}</span> / <span className='blog-card-date'>{blogDate}</span></p>
            </div>
        </div>
    )
}

export default BlogCard
