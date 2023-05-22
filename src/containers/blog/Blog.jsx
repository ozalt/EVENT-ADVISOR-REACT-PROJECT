import React from 'react'
import './blog.css';
import { BlogCard } from '../../components';
import blog1 from '../../assets/blog 1.jpg';
import blog2 from '../../assets/blog 2.webp';
import blog3 from '../../assets/blog 3.webp';
import blog4 from '../../assets/blog 4.jpg';

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-heading">
                <h1>Idea and tips.</h1>
                <p>Get the latest Blog about</p>
            </div>
            <div className="blog-body">
                <BlogCard blogTitle={'Wedding Decor'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog1} blogName={'fenix'} blogDate={'May 12, 2021'} />
                <BlogCard blogTitle={'Wedding Event'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog2} blogName={'Jala'} blogDate={'May 12, 2021'} />
                <BlogCard blogTitle={'Location'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog3} blogName={'Zeekay'} blogDate={'May 12, 2021'} />
                <BlogCard blogTitle={'More'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog4} blogName={'Saad'} blogDate={'May 12, 2021'} />
            </div>
        </div>
    )
}

export default Blog
