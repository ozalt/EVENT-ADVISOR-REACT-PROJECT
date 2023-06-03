import React from 'react';
import './singleblog.css';

import { NavBar, BreadCrumb } from "../../components";
import {NewsLetter, Footer}   from "../../containers"

import blog1 from '../../assets/single-blog.jpeg';
import blog2 from '../../assets/blog 1.jpg';
import blog3 from '../../assets/blog 2.webp';
import blog4 from '../../assets/blog 3.webp';
import reply from '../../assets/reply.png';
import c1 from '../../assets/profile.jfif';
import c2 from '../../assets/c2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RiSendPlane2Fill } from 'react-icons/ri';



const SingleBlog = () => {
    return (
        <div>
            <NavBar />
            <BreadCrumb />

            <div className="single-blog-context">
                <div className="single-blog-body">
                    <h1>Blog</h1>
                    <img src={blog1} alt="" />
                    <div className="single-blog-body-detail">
                        <h2>This Wedding Idea Costs Nothing But Will Help Get All Your Photos!</h2>
                        <h3>August 22, 2020 | Wedding Décor | 15 Comments</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                </div>
                <div className="single-blog-sidebar">
                    <h1>Search Blog</h1>
                    <div className="sidebar-search">
                        <form action="" method="post">
                            <input
                                type="text"
                                placeholder="Search Here..."
                            />
                            <FontAwesomeIcon icon={faSearch} className="blog-sidebar-search-icon" />
                        </form>
                    </div>
                    <h1>Popular Posts</h1>
                    <div className="sidebar-popular-post">
                        <div className="sidebar-post">
                            <img src={blog2} alt="" />
                            <div className="post-heading">
                                <h4>New wedding dress</h4>
                                <p>June 23, 2020</p>
                            </div>

                        </div>

                        <div className="sidebar-line"></div>

                        <div className="sidebar-post">
                            <img src={blog3} alt="" />
                            <div className="post-heading">
                                <h4>New wedding dress</h4>
                                <p>June 23, 2020</p>
                            </div>
                        </div>

                        <div className="sidebar-line"></div>

                        <div className="sidebar-post">
                            <img src={blog4} alt="" />
                            <div className="post-heading">
                                <h4>New wedding dress</h4>
                                <p>June 23, 2020</p>
                            </div>

                        </div>
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

            <div className="single-blog-comment">
                <h2>15 Comments</h2>
                <div className="comment-reply">
                    <img src={reply} alt="" />
                    <form action="" method="post">
                        <input type="text" name="" id="" placeholder='Add a Comment' />
                        <button type="submit"><RiSendPlane2Fill size={24} color='#FFB400' /></button>
                    </form>
                </div>
                <div className="comment-line"></div>
                <div className="single-blog-comments">
                    <div className="single-comment">
                        <img src={c1} alt="" />
                        <div className="single-comment-detail">
                            <h3>Fenix</h3>
                            <h4>Feb 04, 2022</h4>
                            <p>Fire in the whole...</p>
                        </div>

                    </div>
                    <div className="single-comment">
                        <img src={c2} alt="" />
                        <div className="single-comment-detail">
                            <h3>Fenix</h3>
                            <h4>Feb 04, 2022</h4>
                            <p>Fire in the whole...</p>
                        </div>

                    </div>
                </div>

            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default SingleBlog
