import React, { useState } from 'react';
import './detailproject.css';

import { RiImage2Fill, RiVideoFill } from "react-icons/ri";
const DetailProject = ({ projectImagesUrl, projectVideosUrl }) => {
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
                        Portfolio ({projectImagesUrl ? projectImagesUrl.length : 0})
                    </li>

                    <li
                        className={activeTab === 'videos' ? 'active' : ''}
                        onClick={() => handleTabClick('videos')}
                    >
                        VIDEOS ({projectVideosUrl ? projectVideosUrl.length : 0})
                    </li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="project-area">
                {activeTab === 'portfolio' && (
                    <div className="project-item">
                        {projectImagesUrl && projectImagesUrl.length > 0 ? (
                            <div className="img-row">
                                {projectImagesUrl.map((imageUrl) => (
                                    <img src={imageUrl} alt={imageUrl} key={imageUrl} />
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="project-error">
                                    <div className="project-error-msg">
                                        <RiImage2Fill 
                                        size={75}
                                                color='#F04445'
                                        />
                                        <p>Image display Here...</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {activeTab === 'videos' && (
                    <div className="project-item">
                        {projectVideosUrl && projectVideosUrl.length > 0 ? (
                            <div className="img-row">
                                {projectVideosUrl.map((videoUrl) => (
                                    <video src={videoUrl} key={videoUrl} controls></video>
                                ))}
                            </div>
                        ) : (
                            <>
                                    <div className="project-error">
                                        <div className="project-error-msg">
                                            <RiVideoFill
                                                size={75}
                                                color='#0a142f'
                                            />
                                            <p>Video's display Here...</p>
                                        </div>
                                    </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetailProject;
