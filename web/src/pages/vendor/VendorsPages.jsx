import React, { useState, useEffect } from 'react';
import './vendor.css';
import { NavBar, BreadCrumb, Filter, VendorList, SearchBar } from '../../components';
import { NewsLetter, Footer } from '../../containers';

const Vendors = () => {
    const [venueData, setVenueData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllVenues = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/vendor/venue');
                if (response.ok) {
                    const data = await response.json();
                    setVenueData(data);
                } else {
                    setError('Failed to fetch data from the server.');
                }
            } catch (error) {
                setError('Failed to fetch data from the server.');
            } finally {
                setLoading(false);
            }
        };
        fetchAllVenues();
    }, []);

    
    const handleSearchResults = async (results) => {
        if (results && Array.isArray(results.venues)) {
            setSearchResults(results.venues);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className='vendor-page'>
            <NavBar color='#0A142F' />
            <BreadCrumb />
            <SearchBar onSearch={handleSearchResults} />
            <Filter />
            {/* vendor listss */}
            <div className="vendor-page-lists">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : searchResults.length > 0 ? (
                    searchResults.map((venue) => (
                        <VendorList
                            key={venue._id}
                            vendorImg={venue.venueImageUrl}
                            vendorName={venue.venueName}
                            vendorLoc={venue.location}
                            vendorRating={"4.1"}
                            vendorReview={venue.review}
                            vendorDetail={venue.description}
                            vendorId={venue._id}
                        />
                    ))
                ) : (
                    venueData.map((venue) => (
                        <VendorList
                            key={venue._id}
                            vendorImg={venue.venueImageUrl}
                            vendorName={venue.venueName}
                            vendorLoc={venue.location}
                            vendorRating={"4.1"}
                            vendorReview={venue.review}
                            vendorDetail={venue.description}
                            vendorId={venue._id}
                        />
                    ))
                )}
            </div>

            {/* end vendor listss */}
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Vendors;
