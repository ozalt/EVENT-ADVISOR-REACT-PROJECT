import React from 'react';
import './packagearea.css';
import {VendorPackage} from '../../components';
const PackageArea = () => {
    return (
        <div className='package-area'>
            <h2>Popular Packages</h2>
            <div className="package-row">
            <VendorPackage />
            <VendorPackage />
            <VendorPackage />
            </div>
            <div className="package-row">
            <VendorPackage />
            <VendorPackage />
            </div>
        </div>
    )
}

export default PackageArea
