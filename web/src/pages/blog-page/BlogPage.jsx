import React from "react";
import './blogpage.css';
import { Link } from "react-router-dom";

import { NavBar, BreadCrumb, BlogCard } from "../../components";
import { NewsLetter, Footer } from "../../containers";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RiArrowRightLine } from 'react-icons/ri';

import blog1 from '../../assets/blog 1.jpg';
import blog2 from '../../assets/blog 2.webp';
import blog3 from '../../assets/blog 3.webp';


const BlogPage = () => {
    return (
        <div>
            <NavBar />
            <BreadCrumb />
            {/* main context */}
            <div className="blog-context">
                <div className="blog-page-body">
                    <h1 id="blog-page-heading">Blog Listing</h1>
                    <div className="blog-body-row">
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Decor'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog1} blogName={'fenix'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Event'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog2} blogName={'Jala'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Location'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog3} blogName={'Zeekay'} blogDate={'May 12, 2021'} />
                        </Link>
                    </div>
                    <div className="blog-body-row">
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Decor'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog1} blogName={'fenix'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Event'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog2} blogName={'Jala'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Location'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog3} blogName={'Zeekay'} blogDate={'May 12, 2021'} />
                        </Link>
                    </div>
                    <div className="blog-body-row">
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Decor'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog1} blogName={'fenix'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Wedding Event'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog2} blogName={'Jala'} blogDate={'May 12, 2021'} />
                        </Link>
                        <Link to='/single-blog'>
                            <BlogCard blogTitle={'Location'} blogText={'Excepteur sint occaecat cupidatat non proident, sunt in culpa'} blogimg={blog3} blogName={'Zeekay'} blogDate={'May 12, 2021'} />
                        </Link>
                    </div>
                </div>
                <div className="blog-page-sidebar">
                    <div className="sidebar-search">
                        <form action="" method="post">
                            <input
                                type="text"
                                placeholder="Search Here..."
                            />
                            <FontAwesomeIcon icon={faSearch} className="blog-sidebar-search-icon" />
                        </form>
                    </div>
                    <div className="blog-sidebar-detail">
                        <h2>Recent Posts</h2>
                        <p>Stunning Wedding Idea for an outdoor ceremony</p>
                        <p>Stunning Wedding Idea for an outdoor ceremony</p>
                        <p>Stunning Wedding Idea for an outdoor ceremony</p>
                    </div>
                    <div className="blog-sidebar-detail ">
                        <h2>Categories</h2>
                        <p><RiArrowRightLine /> Wedding Décor</p>
                        <p><RiArrowRightLine /> Wedding Décor</p>
                        <p><RiArrowRightLine /> Wedding Décor</p>
                    </div>
                    <div className="sidebar-tag">
                        <h2>Tags</h2>
                        <div className="sidebar-tag-row">
                            <p>wedding</p>
                            <p>wedding</p>
                            <p>wedding</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end main context */}
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default BlogPage;
