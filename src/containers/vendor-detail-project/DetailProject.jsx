import React, { useState } from 'react';
import './detailproject.css';

import projectImg1 from '../../assets/Barat-Stage-Decoration-ideas-9.jpg';
import projectImg2 from '../../assets/b045b0400bdc5721d1148ece1d17046c.jpg';

const DetailProject = () => {
    const [activeTab, setActiveTab] = useState('portfolio');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="vendor-project">
            <div className="vendor-sub-navbar">
                <ul>
                    <li
                        className={activeTab === 'portfolio' ? 'active' : ''}
                        onClick={() => handleTabClick('portfolio')}
                    >
                        Portfolio (19)
                    </li>
                    <li
                        className={activeTab === 'albums' ? 'active' : ''}
                        onClick={() => handleTabClick('albums')}
                    >
                        ALBUMS (2)
                    </li>
                    <li
                        className={activeTab === 'videos' ? 'active' : ''}
                        onClick={() => handleTabClick('videos')}
                    >
                        VIDEOS (0)
                    </li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="project-area">

                {activeTab === 'portfolio' && (
                    <div className="project-item">
                        <div className="img-row">
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="img-row">
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="img-row">
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                            <img src={projectImg1} alt="" />
                            <img src={projectImg2} alt="" />
                        </div>
                    </div>
                )}

                {activeTab === 'albums' && (
                    <div className="project-item">
                        <div className="img-row">
                            <img src={projectImg1} alt="" />

                        </div>
                    </div>
                )}
                {activeTab === 'videos' && (
                    <div className="project-item">
                        <div className="img-row">
                            <img src={projectImg2} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DetailProject
