
import React, { useState } from 'react';
import './Admin.css';
import ModalForm from './Modal';
import { AiFillProject, AiOutlineComment } from 'react-icons/ai';
import { IoInformationCircleSharp, IoRestaurant } from 'react-icons/io5';
import { GiFamilyHouse } from 'react-icons/gi';
import InformationMenuBlock from './InformationMenuBlock';
import {NavBar} from '../components'

const AdminDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('information');
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const [selectedImages, setSelectedImages] = useState([]);

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
    <> <NavBar/>
    <div className="admin-dashboard">
      <nav className="nav-menu">
        <h3>HI, Ozal</h3>
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
          <li onClick={() => handleMenuClick('banquets')}>
            <GiFamilyHouse className="icon" />
            Banquets
          </li>
        </ul>
      </nav>
      <div className="menu-block">
        {selectedMenu === 'information' && 
            <InformationMenuBlock />
      }</div>
        {selectedMenu === 'projects' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Projects</h2>
              <label className="file-upload-label">
                <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                <span className="choose-file-button">Add Images</span>
              </label>
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
            <ModalForm isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        )}
        {selectedMenu === 'banquets' && (
          <div className="menu-block-other">
            <div className="heading-style">
              <h2>Banquets</h2>
              <button className="file-upload-label" onClick={openModal}>
                Add New
              </button>
            </div>
            <ModalForm isModalOpen={isModalOpen} closeModal={closeModal} />
          </div>
        )}
      
    </div>
    </>
  );
};

export default AdminDashboard;
