import React, { useEffect, useState } from 'react';
import './ModalForm.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const PackageModalForm = ({ isModalOpen, closeModal, vendorId }) => {
    const [packageImage, setPackageImage] = useState('');
    const [packageName, setPackageName] = useState('');
    const [menuType, setMenuType] = useState([]);
    const [hall, setHall] = useState('');
    const [seatingCapacity, setSeatingCapacity] = useState('');
    const [floatingCapacity, setFloatingCapacity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [menuData, setMenuData] = useState([]);
    const [menuList, setMenuList] = useState([]); // Updated state name to selectedMenu


    useEffect(() => {
        const fetchAllMenus = async () => {
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
        fetchAllMenus();
    }, [vendorId]);

    useEffect(() => {
        const fetchAllPackage = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/vendor/package/${vendorId}`);
                if (response.ok) {
                    const data = await response.json();
                    setMenuData(data.package);
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
        const formData = new FormData();
        formData.append('vendorId', vendorId);
        formData.append('packageImage', packageImage);
        formData.append('packageName', packageName);
        formData.append('menuType', menuType);
        formData.append('hall', hall);
        formData.append('seatingCapacity', seatingCapacity);
        formData.append('floatingCapacity', floatingCapacity);
        formData.append('totalPrice', totalPrice);


        try {
            const response = await fetch('http://localhost:5000/api/vendor/package', {
                method: 'POST',
                body: formData, // Use the FormData object directly
            });
            if (response.ok) {
                const createdPackage = await response.json();
                setMenuData([...menuData, createdPackage]);
                setPackageName('')
                setPackageImage('')
                setMenuType('')
                setSeatingCapacity('')
                setFloatingCapacity('')
                setTotalPrice('')

                closeModal();
            } else {
                console.log("Error:", response.status);
            }


        } catch (error) {
            // Handle any error that occurred during the API request
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            {isModalOpen && (
                <div className="modal">
                    <form className="modal-dialog" onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Package Style</h3>
                                <button type="button" className="close" onClick={closeModal}>
                                    <AiOutlineCloseCircle />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="PackageImage">Package Image</label>
                                    <input
                                        type="file"
                                        id="PackageImage"
                                        accept="image/*"
                                        className="form-control"
                                        onChange={(e) =>
                                            setPackageImage(e.target.files[0])
                                        }
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="packageName">Package Name</label>
                                    <input
                                        type="text"
                                        id="packageName"
                                        className="form-control"
                                        value={packageName}
                                        onChange={(e) => setPackageName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="menu-type">Menu</label>
                                    <select
                                        id="menutype"
                                        className="form-control"
                                        value={menuType}
                                        onChange={(e) => setMenuType(e.target.value)} // Store the selected menu ID

                                    >
                                        <option value="">Select Menu</option>
                                        {menuList.map((menu) => (
                                            <option key={menu._id} value={menu.menuName}>
                                                {menu.menuName}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="hall">Number of Hall</label>
                                    <input
                                        type="text"
                                        id="hall"
                                        className="form-control"
                                        value={hall}
                                        onChange={(e) => setHall(e.target.value)}
                                    />
                                </div>
                                <div className="row">

                                    <div className="form-group">
                                        <label htmlFor="seatingCapacity">Seating Capacity</label>
                                        <input
                                            type="number"
                                            id="seatingCapacity"
                                            className="form-control"
                                            value={seatingCapacity}
                                            onChange={(e) => setSeatingCapacity(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="floatingCapacity">Floating Capacity</label>
                                        <input
                                            type="number"
                                            id="floatingCapacity"
                                            className="form-control"
                                            value={floatingCapacity}
                                            onChange={(e) => setFloatingCapacity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="totalPrice">Total Price</label>
                                    <input
                                        type="number"
                                        id="totalPrice"
                                        className="form-control"
                                        value={totalPrice}
                                        onChange={(e) => setTotalPrice(e.target.value)}
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
                        <th>Package Image</th>
                        <th>Package Name</th>
                        <th>Menu Type</th>
                        <th>Hall's</th>
                        <th>Total Capacity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(menuData) && menuData.map((menu, index) => (
                        <tr key={index}>
                            <td>
                                {menu.packageImageUrl && (
                                    <img src={menu.packageImageUrl} alt="Preview" className="preview-image" />
                                )}
                            </td>
                            <td>{menu.packageName}</td>
                            <td>{menu.menuType}</td>
                            <td>{menu.hall}</td>
                            <td>{menu.seatingCapacity} + {menu.floatingCapacity}</td>
                            <td>{menu.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default PackageModalForm;
