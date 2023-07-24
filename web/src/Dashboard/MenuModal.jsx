import React, { useState, useEffect } from 'react';
import './ModalForm.css';
import { AiOutlineCloseCircle, AiOutlineEye } from 'react-icons/ai';
import { RiAddFill, RiCloseFill } from 'react-icons/ri';

const MenuModalForm = ({ isModalOpen, closeModal, vendorId }) => {
    const [menuName, setMenuName] = useState('');
    const [newDish, setNewDish] = useState({ dishName: '', price: '' });
    const [formMenuData, setFormMenuData] = useState([]); // Separate state for the form
    const [menuList, setMenuList] = useState([]); // Separate state for displaying menus

    const handleAddDish = () => {
        setFormMenuData([...formMenuData, newDish]);
        setNewDish({ dishName: '', price: '' });
    };

    const handleRemoveDish = (index) => {
        const updatedMenuData = [...formMenuData];
        updatedMenuData.splice(index, 1);
        setFormMenuData(updatedMenuData);
    };

    useEffect(() => {
        const fetchAllPackage = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/vendor/menu/${vendorId}`);
                if (response.ok) {
                    const data = await response.json();
                    setMenuList(data.menu);
                } else {
                    console.log("Error:", response.status);
                }
            } catch (error) {
                console.log("Fetch error:", error);
            }
        };
        fetchAllPackage();
    }, [vendorId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMenu = {
            vendorId,
            menuName,
            dishes: formMenuData,
        };

        try {
            const response = await fetch('http://localhost:5000/api/vendor/menu', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the appropriate content type for JSON data
                },
                body: JSON.stringify(newMenu), // Convert the JavaScript object to JSON string
            });

            if (response.ok) {
                const data = await response.json();
                setMenuList([...menuList, data]);
                closeModal();
                setMenuName('');
                setNewDish({ dishName: '', price: '' });
                setFormMenuData([]); // Clear the form menu data after submission
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    };

    if (!menuList || !menuList.length) {
        return <div>Loading...</div>; // Add a loading message or spinner when data is being fetched
    }

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
                                <div className="dishes-container">
                                    {formMenuData.map((dish, index) => (
                                        <div key={index} className="dish-item">
                                            <div className="row">
                                                <div className="form-group">
                                                    <label htmlFor={`dishName-${index}`}>Dish Name</label>
                                                    <input
                                                        type="text"
                                                        id={`dishName-${index}`}
                                                        className="form-control"
                                                        value={dish.dishName}
                                                        onChange={(e) => {
                                                            const updatedDishes = [...formMenuData];
                                                            updatedDishes[index].dishName = e.target.value;
                                                            setFormMenuData(updatedDishes);
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor={`price-${index}`}>Price</label>
                                                    <input
                                                        type="text"
                                                        id={`price-${index}`}
                                                        className="form-control"
                                                        value={dish.price}
                                                        onChange={(e) => {
                                                            const updatedDishes = [...formMenuData];
                                                            updatedDishes[index].price = e.target.value;
                                                            setFormMenuData(updatedDishes);
                                                        }}
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="dish-remove"
                                                    onClick={() => handleRemoveDish(index)}
                                                >
                                                    <RiCloseFill />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button type="button" className="menu-add-btn" onClick={handleAddDish}>
                                    <RiAddFill /> Add Dish
                                </button>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">
                                    Add Menu
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            <table className="menu-table">
                <thead>
                    <tr>
                        <th>Menu Name</th>
                        <th>Dish Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {menuList.map((menu, index) => (
                        <tr key={index}>
                            <td>{menu.menuName}</td>
                            <td>
                                <div className="dish-names">
                                    <AiOutlineEye className="eye-icon" size={34} color='#f6f6f6' />
                                    <div className="dish-list">
                                        {menu.dishes.map((dish, dishIndex) => (
                                            <div key={dishIndex} className='dish-data'>
                                                {dish.dishName} - {dish.price}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </td>
                            <td>{menu.totalPrice.toFixed(2)}</td>
                            <td>
                                {/* ... Action buttons if needed ... */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MenuModalForm;
