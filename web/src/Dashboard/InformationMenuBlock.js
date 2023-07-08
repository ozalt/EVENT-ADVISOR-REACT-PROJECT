import React, { useState, useEffect } from 'react';
import './InformMB.css';

const InformationMenuBlock = () => {
  const [progress, setProgress] = useState(0);
  const [editMode, setEditMode] = useState(false); // State for edit mode

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress <= 40 ? newProgress : 40;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode)
  };

  return (
    <div className="menu-block-information">
      <div className="heading">
        <h2>Information</h2>
      </div>
      <div className="row-mb">
        <div className="column-mb">
          <p>Leads</p>
        </div>
        <div className="column-mb">
          <p>Love Count</p>
        </div>
        <div className="column-mb">
          <p>Page View</p>
        </div>
      </div>
      <div className="loading-bar">
        <div className="filled-area" style={{ width: `${progress}%` }}></div>
        <div className="loading-bar-text">{`${progress}% complete`}</div>
      </div>

      <div className="bordered-text">
        <p>Complete your profile by:</p>
        <ul>
          <li>Answering your FAQs</li>
          <li>Linking your profile to your Facebook page/website</li>
          <li>Adding images to your portfolio</li>
          <li>
            Get featured in a Real Wedding. Email your work to
            submissions@wedmegood.com
          </li>
          <li>
            Upload your first album to get visibility on our inspiration gallery
            and social media handles
          </li>
          <li>Invite clients to review your work</li>
        </ul>
      </div>

      <form className="personal-info-form">
        <h3>Personal Information</h3>
        <div className="form-row">
          <label htmlFor="loginEmail">Login email ID</label>
          <input type="text" id="loginEmail" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="brandName">Brand Name*</label>
          <input type="text" id="brandName" required disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="contactPerson">Contact person name</label>
          <input type="text" id="contactPerson" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="additionalEmail">Additional email ID</label>
          <input type="text" id="additionalEmail" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="contactNumber">Contact number*</label>
          <input type="text" id="contactNumber" required disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="websiteLink">Website link</label>
          <input type="text" id="websiteLink" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="facebookUrl">Facebook url</label>
          <input type="text" id="facebookUrl" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="instagramUrl">Instagram url</label>
          <input type="text" id="instagramUrl" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="youtubeUrl">Youtube/Vimeo url</label>
          <input type="text" id="youtubeUrl" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="additionalInfo">
            Additional Information <br></br>
            <small>
              (To update your description, please send a mail to
              vendors@wedmegood.com)
            </small>
          </label>
          <input type="text" id="additionalInfo" disabled={!editMode} />
        </div>
        <div className="form-row">
          <label htmlFor="city">City*</label>
          <select id="city" required disabled={!editMode}>
            <option value="">Choose your base city here</option>
            {/* Add options for cities here */}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="address">Address</label>
          <textarea id="address" disabled={!editMode}></textarea>
        </div>
        {editMode ? (
          <button type="submit" className="file-upload-label" onClick={toggleEditMode}>
            Save
          </button>
        ) : (
          <button type="button" className="file-upload-label" onClick={toggleEditMode}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default InformationMenuBlock;
