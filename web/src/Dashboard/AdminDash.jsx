import React, { useState, useEffect } from 'react';
import './Admin.css';
import { AiFillProject, AiOutlineComment } from 'react-icons/ai';
import { MdLocalOffer } from 'react-icons/md';
import { IoInformationCircleSharp, IoRestaurant } from 'react-icons/io5';
import { GiFamilyHouse } from 'react-icons/gi';
import InformationMenuBlock from './InformationMenuBlock';
import { NavBar } from '../components'
import { Footer } from '../containers';
import VenueModalForm from './VenueModalForm'
import { useAuthContext } from "../hooks/useAuthContext";
import PackageModalForm from './PackageModal';
import MenuModalForm from './MenuModal';

const AdminDashboard = () => {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState({}); // State for storing user data
  const [selectedMenu, setMenu] = useState('information');
  const handleMenuClick = (menu) => {
    setMenu(menu);
  };

  // fetxh vendor id
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
            // const Data = data.users;
            setUserData(data.users);
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


  const [selectedImages, setSelectedImages] = useState([]);
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      selectedImages.forEach((image) => {
        formData.append('images', image);
      });

      const response = await fetch('/api/upload-images', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Images uploaded successfully:', data);
        // You may want to show a success message or do something else with the response
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading images:', error.message);
      // Handle the error (optional)
      // You may want to show an error message or do something else
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImages.push(URL.createObjectURL(file));
    }

    setSelectedImages([...selectedImages, ...newImages]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <div className="admin-dashboard">
        <nav className="nav-menu">
          <h3 style={{ textTransform: "capitalize" }}>HI, {user.user}</h3>
          <ul>
            <li onClick={() => handleMenuClick('information')}>
              <IoInformationCircleSharp className="icon" />
              Information
            </li>
            <li onClick={() => handleMenuClick('projects')}>
              <AiFillProject className="icon" />
              Projects
            </li>
            <li onClick={() => handleMenuClick('reviews')}>
              <AiOutlineComment className="icon" />
              Reviews
            </li>
            <li onClick={() => handleMenuClick('menus')}>
              <IoRestaurant className="icon" />
              Menus
            </li>
            <li onClick={() => handleMenuClick('package')}>
              <MdLocalOffer className="icon" />
              Package
            </li>
            <li onClick={() => handleMenuClick('banquets')}>
              <GiFamilyHouse className="icon" />
              Venue
            </li>
          </ul>
        </nav>
        {selectedMenu === 'information' && (

          <div className="menu-block">
            <InformationMenuBlock />
          </div>
        )
        }

        {selectedMenu === 'projects' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Projects</h2>
              <label className='add-project-image'>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                <span className="file-upload-label" >Add Images</span>
              </label>
              <button className="file-upload-label" onClick={handleImageUpload}>
                Upload Images to Server
              </button>
            </div>
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Selected ${index}`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ))}
          </div>
        )}

        {selectedMenu === 'reviews' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Reviews</h2>
            </div>
            {/* Add logic for displaying reviews here */}
          </div>
        )}

        {selectedMenu === 'menus' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Menus</h2>
              <button className="file-upload-label" onClick={openModal}>
                Add New
              </button>
            </div>
            <MenuModalForm isModalOpen={isModalOpen} closeModal={closeModal} vendorId={userData._id} />
          </div>
        )}

        {selectedMenu === 'package' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Package</h2>
              <button className="file-upload-label" onClick={openModal}>
                Add New
              </button>
            </div>
            <PackageModalForm isModalOpen={isModalOpen} closeModal={closeModal} vendorId={userData._id}/>
          </div>
        )}

        {selectedMenu === 'banquets' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Venue</h2>
              <button className="file-upload-label" onClick={openModal}>
                Add New
              </button>
            </div>
            <VenueModalForm isModalOpen={isModalOpen} closeModal={closeModal} />

          </div>
        )}

      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
