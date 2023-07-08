import React, { useState, useEffect } from 'react';
import './InformMB.css';

const InformationMenuBlock = () => {
  const [progress, setProgress] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({}); // State for storing user data

  useEffect(() => {
    // Simulating fetching user data from the server
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user'); // Assuming you have an API endpoint to fetch user data
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

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
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const updateUserInformation = async () => {
    try {
      const response = await fetch(`/api/user/${userData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Handle successful update
      } else {
        // Handle update failure
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderForm = () => {
    if (userData === null) {
      return <p>Loading...</p>; // Render a loading state or placeholder content
    }
    return (
      <form className="personal-info-form">
        <h3>Personal Information</h3>
        <div className="form-row">
          <label htmlFor="loginEmail">Login email ID</label>
          <input
            type="text"
            id="loginEmail"
            disabled={!editMode}
            defaultValue={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="brandName">Brand Name*</label>
          <input
            type="text"
            id="brandName"
            required
            disabled={!editMode}
            defaultValue={userData.brandName}
            onChange={(e) => setUserData({ ...userData, brandName: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="contactPerson">Contact person name</label>
          <input
            type="text"
            id="contactPerson"
            disabled={!editMode}
            defaultValue={userData.contactPerson}
            onChange={(e) => setUserData({ ...userData, contactPerson: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="additionalEmail">Additional email ID</label>
          <input
            type="text"
            id="additionalEmail"
            disabled={!editMode}
            defaultValue={userData.additionalEmail}
            onChange={(e) => setUserData({ ...userData, additionalEmail: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="contactNumber">Contact number*</label>
          <input
            type="text"
            id="contactNumber"
            required
            disabled={!editMode}
            defaultValue={userData.contactNumber}
            onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="websiteLink">Website link</label>
          <input
            type="text"
            id="websiteLink"
            disabled={!editMode}
            defaultValue={userData.websiteLink}
            onChange={(e) => setUserData({ ...userData, websiteLink: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="facebookUrl">Facebook url</label>
          <input
            type="text"
            id="facebookUrl"
            disabled={!editMode}
            defaultValue={userData.facebookUrl}
            onChange={(e) => setUserData({ ...userData, facebookUrl: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="instagramUrl">Instagram url</label>
          <input
            type="text"
            id="instagramUrl"
            disabled={!editMode}
            defaultValue={userData.instagramUrl}
            onChange={(e) => setUserData({ ...userData, instagramUrl: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="youtubeUrl">Youtube/Vimeo url</label>
          <input
            type="text"
            id="youtubeUrl"
            disabled={!editMode}
            defaultValue={userData.youtubeUrl}
            onChange={(e) => setUserData({ ...userData, youtubeUrl: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="additionalInfo">
            Additional Information <br></br>
            <small>
              (To update your description, please send a mail to vendors@wedmegood.com)
            </small>
          </label>
          <input
            type="text"
            id="additionalInfo"
            disabled={!editMode}
            defaultValue={userData.additionalInfo}
            onChange={(e) => setUserData({ ...userData, additionalInfo: e.target.value })}
          />
        </div>
        <div className="form-row">
          <label htmlFor="city">City*</label>
          <select
            id="city"
            disabled={!editMode}
            defaultValue={userData.city}
            onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          >
            <option value="">Choose your base city here</option>
            {/* Add options for cities here */}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            disabled={!editMode}
            defaultValue={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
          ></textarea>
        </div>
        {editMode ? (
          <button type="submit" className="file-upload-label" onClick={updateUserInformation}>
            Save
          </button>
        ) : (
          <button type="button" className="file-upload-label" onClick={toggleEditMode}>
            Edit
          </button>
        )}
      </form>
    );
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
      {renderForm()}
    </div>
  );
};

export default InformationMenuBlock;
