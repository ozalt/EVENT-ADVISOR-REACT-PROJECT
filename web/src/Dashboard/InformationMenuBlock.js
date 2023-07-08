/**
 * The above code is a React component that renders an information menu block with user data, a
 * progress bar, and a form for editing and saving user information.
 * @returns The code is returning a JSX element that represents the InformationMenuBlock component.
 */
import React, { useState, useEffect } from 'react';
import './InformMB.css';
import { useAuthContext } from "../hooks/useAuthContext";
const InformationMenuBlock = () => {
  const { user } = useAuthContext();
  const [progress, setProgress] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({}); // State for storing user data

/* The `useEffect` hook is used to perform side effects in functional components. In this case, the
effect is fetching user data from an API endpoint when the `user` state changes. */
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && user.user) {
          // Add null check for user.user
          const response = await fetch(
            `http://localhost:5000/api/vendor/get-vendor/${user.user}`
          );
          if (response.ok) {
            const data = await response.json();
            const Data = data.users;
            setUserData(Data);
          } else {
            console.log("Error:", response.status);
          }
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchUserData();
  }, [user]); // Add user as a dependency

/* The `useEffect` hook in the provided code is used to update the progress bar in the component. */
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

/**
 * The function toggleEditMode toggles the edit mode by updating the state variable prevEditMode.
 */
  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

/**
 * The function `updateUserInformation` sends a POST request to update user information to a specified
 * API endpoint.
 */
  const updateUserInformation = async (e) => {
    try {
        e.preventDefault();
      const response = await fetch(
        `http://localhost:5000/api/vendor/update-info/${userData._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        setEditMode(false)
        // Handle successful update
      } else {
        // Handle update failure
      }
    } catch (error) {
      console.log(error);
    }
  };

/**
 * The function `renderForm` renders a form with input fields for personal information, allowing the
 * user to edit and save their data.
 * @returns The function `renderForm` returns a JSX form element with various input fields and labels.
 * It also includes conditional rendering based on the `editMode` and `userData` variables. If
 * `userData` is falsy, it displays a loading message. If `editMode` is true, it displays a "Save"
 * button, otherwise it displays an "Edit" button.
 */
  const renderForm = () => {
    if (!userData) {
      return <p>Loading...</p>;
    }
    return (
      <form className="personal-info-form">
        <h3>Personal Information</h3>
        {/* <div className="form-row">
          <label htmlFor="loginEmail">Login email ID</label>
          <input
            type="text"
            id="loginEmail"
            disabled={!editMode}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div> */}
        <div className="form-row">
          <label htmlFor="brandName">Brand Name*</label>
          <input
            type="text"
            id="brandName"
            required
            disabled={!editMode}
            value={userData.brandName}
            onChange={(e) =>
              setUserData({ ...userData, brandName: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="contactPerson">Contact person name</label>
          <input
            type="text"
            id="contactPerson"
            disabled={!editMode}
            value={userData.contactPerson}
            onChange={(e) =>
              setUserData({ ...userData, contactPerson: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="additionalEmail">Additional email ID</label>
          <input
            type="text"
            id="additionalEmail"
            disabled={!editMode}
            value={userData.additionalEmail}
            onChange={(e) =>
              setUserData({ ...userData, additionalEmail: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="contactNumber">Contact number*</label>
          <input
            type="text"
            id="contactNumber"
            required
            disabled={!editMode}
            value={userData.contactNumber}
            onChange={(e) =>
              setUserData({ ...userData, contactNumber: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="websiteLink">Website link</label>
          <input
            type="text"
            id="websiteLink"
            disabled={!editMode}
            value={userData.websiteLink}
            onChange={(e) =>
              setUserData({ ...userData, websiteLink: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="facebookUrl">Facebook url</label>
          <input
            type="text"
            id="facebookUrl"
            disabled={!editMode}
            value={userData.facebookUrl}
            onChange={(e) =>
              setUserData({ ...userData, facebookUrl: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="instagramUrl">Instagram url</label>
          <input
            type="text"
            id="instagramUrl"
            disabled={!editMode}
            value={userData.instagramUrl}
            onChange={(e) =>
              setUserData({ ...userData, instagramUrl: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="youtubeUrl">Youtube/Vimeo url</label>
          <input
            type="text"
            id="youtubeUrl"
            disabled={!editMode}
            value={userData.youtubeUrl}
            onChange={(e) =>
              setUserData({ ...userData, youtubeUrl: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="additionalInfo">
            Additional Information <br></br>
            <small>
              (To update your description, please send a mail to
              vendors@wedmegood.com)
            </small>
          </label>
          <input
            type="text"
            id="additionalInfo"
            disabled={!editMode}
            value={userData.additionalInfo}
            onChange={(e) =>
              setUserData({ ...userData, additionalInfo: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="city">City*</label>
          <select
            id="city"
            disabled={!editMode}
            value={userData.city}
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
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          ></textarea>
        </div>
        {editMode ? (
          <button
            type="button"
            className="file-upload-label"
            onClick={updateUserInformation}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="file-upload-label"
            onClick={toggleEditMode}
          >
            Edit
          </button>
        )}
      </form>
    );
  };

/* The code is returning a JSX element that represents the InformationMenuBlock component. */
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
