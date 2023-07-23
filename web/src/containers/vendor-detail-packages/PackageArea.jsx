import React, { useEffect, useState } from 'react';
import './packagearea.css';
import {VendorPackage} from '../../components';
const PackageArea = ({vendorId}) => {

    const [menuData, setMenuData] = useState([]);


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

    return (
        <div className='package-area'>
            <h2>Popular Packages</h2>
            <div className="package-row">
                {menuData.map((packageData) => (
                    <VendorPackage key={packageData._id} packageData={packageData} />
                ))}
            </div>
        </div>
    )
}

export default PackageArea
