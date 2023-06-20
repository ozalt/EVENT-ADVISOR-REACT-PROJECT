
import React, { useState } from 'react';
import './ModalForm.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ModalForm = ({ isModalOpen, closeModal }) => {
  const [menuName, setMenuName] = useState('');
  const [menuType, setMenuType] = useState('');
  const [pricePlate, setPricePlate] = useState('');
  const [menuData, setMenuData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMenu = {
      menuName,
      menuType,
      pricePlate,
    };
    setMenuData([...menuData, newMenu]);
    closeModal();
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <form className="modal-dialog" onSubmit={handleSubmit}>
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Menu Style</h3>
                <button type="button" className="close" onClick={closeModal}>
                  <AiOutlineCloseCircle />
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="menuName">Menu Name</label>
                  <input
                    type="text"
                    id="menuName"
                    className="form-control"
                    value={menuName}
                    onChange={(e) => setMenuName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="menuType">Menu Type</label>
                  <select
                    id="menuType"
                    className="form-control"
                    value={menuType}
                    onChange={(e) => setMenuType(e.target.value)}
                  >
                    <option value="">Select Menu Type</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pricePlate">Price/Plate</label>
                  <input
                    type="text"
                    id="pricePlate"
                    className="form-control"
                    value={pricePlate}
                    onChange={(e) => setPricePlate(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <table className="menu-table">
        <thead>
          <tr>
            <th>Menu</th>
            <th>Menu Type</th>
            <th>Price per Plate</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((menu, index) => (
            <tr key={index}>
              <td>{menu.menuName}</td>
              <td>{menu.menuType}</td>
              <td>{menu.pricePlate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModalForm;
