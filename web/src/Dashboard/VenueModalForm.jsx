import React, { useState, useEffect } from 'react';
import './ModalForm.css';
import { AiOutlineCloseCircle, AiOutlineEye } from 'react-icons/ai';
import { RiAddLine, RiImageAddFill, RiVideoLine } from 'react-icons/ri';
import { useAuthContext } from "../hooks/useAuthContext";

const MAX_IMAGES = 5; // Maximum number of images allowed
const MAX_IMAGE_SIZE_MB = 5; // Maximum image file size in MB
const MAX_VIDEO_SIZE_MB = 50; // Maximum video file size in MB

const VenueModalForm = ({ isModalOpen, closeModal }) => {
    const { user } = useAuthContext();

    const [vendorId, setVendorId] = useState('');
    const [venueName, setVenueName] = useState('');
    const [description, setdescription] = useState('');
    const [location, setLocation] = useState('');
    const [venueData, setVenueData] = useState([]);
    const [venueCapacity, setVenueCapacity] = useState('');
    const [availability, setAvailability] = useState([]);


    const [venueId, setVenueId] = useState('');
    const [hallName, setHallName] = useState('');
    const [capacity, setCapacity] = useState('');
    const [lunchChecked, setLunchChecked] = useState(false);
    const [dinnerChecked, setDinnerChecked] = useState(false);
    const [hallData, setHallData] = useState([]);
    const [floatCapacity, setFloatCapacity] = useState([]);

    // State variables for images and videos
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [previewImageUrls, setPreviewImageUrls] = useState([]);
    const [previewVideoUrls, setPreviewVideoUrls] = useState([]);

    const [isHallModalOpen, setIsHallModalOpen] = useState(false);

    const [showHallTable, setShowHallTable] = useState(false);
    const [selectedVenueId, setSelectedVenueId] = useState(null);
    const [selectedVenueHalls, setSelectedVenueHalls] = useState([]);
    const [venueImage, setVenueImage] = useState(null);

    const [imageError, setImageError] = useState('');
    const [videoError, setVideoError] = useState('');
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [previewImageUrl, setPreviewImageUrl] = useState('');

    // ... (existing code)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setVenueImage(file);

        // Create a temporary URL for the selected file and set it as the preview image URL
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviewImageUrl(previewUrl);
        } else {
            setPreviewImageUrl('');
        }
    };

    const handleAddImageClick = (id) => {
        setVenueId(id)
        setIsImageModalOpen(true);
    };

    const handleAddVideoClick = (id) => {
        setVenueId(id)
        setIsVideoModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    const handleProjectImageChange = (e) => {
        const files = e.target.files;
        const newImages = [];
        const newPreviewImageUrls = [];

        const imageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (files.length + images.length > MAX_IMAGES) {
            setImageError(`You can only upload up to ${MAX_IMAGES} images.`);
            return;
        }
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!imageTypes.includes(file.type)) {
                setImageError('Invalid image type. Supported types are JPEG, PNG, and GIF.');
                return;
            }
            if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
                setImageError(`Image size exceeds ${MAX_IMAGE_SIZE_MB}MB.`);
                return;
            }
            newImages.push(file);
            newPreviewImageUrls.push(URL.createObjectURL(file));
        }

        setImageError('');
        setImages([...images, ...newImages]);
        setPreviewImageUrls([...previewImageUrls, ...newPreviewImageUrls]);
    };


    const submitImages = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append all images to the formData
        images.forEach((image) => {
            formData.append('projectImages', image);
        });

        // formData.append('venueId', venueId); // Include the venueId associated with the portfolio data

        // console.log(venueId)
        try {
            const response = await fetch(`http://localhost:5000/api/vendor/venue/images/${venueId}`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                // Handle successful submission of images, if needed
                // For example, clear the images state
                setImages([]);
                setPreviewImageUrls([]);
                setIsImageModalOpen(false)
            } else {
                console.log("Error--:", response.status);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };


    const handleVideoChange = (e) => {
        const files = e.target.files;
        const newVideos = [];
        const newPreviewVideoUrls = [];

        const videoTypes = ['video/mp4', 'video/webm', 'video/ogg'];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!videoTypes.includes(file.type)) {
                setVideoError('Invalid video type. Supported types are MP4, WebM, and OGG.');
                return;
            }
            if (file.size > MAX_VIDEO_SIZE_MB * 1024 * 1024) {
                setVideoError(`Video size exceeds ${MAX_VIDEO_SIZE_MB}MB.`);
                return;
            }
            newVideos.push(file);
            newPreviewVideoUrls.push(URL.createObjectURL(file));
        }

        setVideoError('');
        setVideos([...videos, ...newVideos]);
        setPreviewVideoUrls([...previewVideoUrls, ...newPreviewVideoUrls]);
    };

    // Separate function to handle the submission of portfolio videos
    const submitVideos = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append all videos to the formData
        videos.forEach((video) => {
            formData.append('projectVideos', video);
        });


        try {
            const response = await fetch(`http://localhost:5000/api/vendor/venue/videos/${venueId}`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                setIsVideoModalOpen(false)
                setVideos([]);
                setPreviewVideoUrls([]);
            } else {
                console.log("Error hmm:", response.status);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };
    


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (user && user.user) {
                    const response = await fetch(`http://localhost:5000/api/vendor/get-vendor/${user.user}`);
                    if (response.ok) {
                        const data = await response.json();
                        setVendorId(data.users._id);
                    } else {
                        console.log("Error:", response.status);
                    }
                }
            } catch (error) {
                console.log("Fetch error:", error);
            }
        };

        fetchUserData();
    }, [user]);

    useEffect(() => {
        const fetchAllVenues = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/vendor/venue/${vendorId}`);
                if (response.ok) {
                    const data = await response.json();
                    setVenueData(data.venue);
                }
            } catch (error) {
                console.log("Fetch error:", error);
            }
        };
        fetchAllVenues();
    }, [vendorId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('vendorId', vendorId);
        formData.append('venueName', venueName);
        formData.append('description', description);
        formData.append('location', location);
        formData.append('venueCapacity', venueCapacity);
        formData.append('venueImage', venueImage);
        formData.append('availability', JSON.stringify(availability));

        try {
            const response = await fetch('http://localhost:5000/api/vendor/venue', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setVenueData([...venueData, data]);
                closeModal();
                setVenueName('');
                setdescription('');
                setLocation('');
                setVenueImage(null);
                setAvailability([]);
                setCapacity('');
            } else {
                console.log("Error:", response.status);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    const handleHallSubmit = async (e) => {
        e.preventDefault();
        const newHall = {
            venueId: venueId,
            hallName,
            capacity,
            floatCapacity,
            lunchChecked,
            dinnerChecked
        };

        try {
            const response = await fetch('http://localhost:5000/api/vendor/hall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newHall),
            });

            if (response.ok) {
                const data = await response.json();
                setHallData([...hallData, data]);
                closeModal();
                setHallName('');
                setCapacity('');
                setFloatCapacity('')
                setLunchChecked(false);
                setDinnerChecked(false);
                setIsHallModalOpen(false);
            } else {
                console.log('Error:', response.status);
            }
        } catch (error) {
            console.log('Fetch error:', error);
        }
    };

    const handleAddHallClick = (venue) => {
        setVenueId(venue)
        setHallName('');
        setCapacity('');
        setLunchChecked(true);
        setDinnerChecked(true);
        setIsHallModalOpen(true);
    };

    const fetchVenueHalls = async (venueId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/vendor/venue-hall/${venueId}`);
            if (response.ok) {
                const data = await response.json();
                setSelectedVenueHalls(data.hall && data.hall.length > 0 ? data.hall : []);
            } else {
                console.log("Error:", response.status);
            }
        } catch (error) {
            console.log("Fetch error:", error);
        }
    };

    const handleEyeIconClick = async (venueId) => {
        if (showHallTable && venueId === selectedVenueId) {
            setShowHallTable(false);
            setSelectedVenueId(null);
            setSelectedVenueHalls([]);
        } else {
            setSelectedVenueHalls([]);
            await fetchVenueHalls(venueId);
            setSelectedVenueId(venueId);
            setShowHallTable(true);
        }
    };

    const closeHallModal = () => {
        setIsHallModalOpen(false);
    };

    const handleAddAvailability = () => {
        const newAvailability = {
            startDate: '', // Set the start date here (you can use a date picker to get the value)
            endDate: '', // Set the end date here (you can use a date picker to get the value)
            available: true, // Set the initial value to true for availability, and the vendor can change it later
        };

        setAvailability([...availability, newAvailability]);
    };

    const handleAvailabilityChange = (index, field, value) => {
        const updatedAvailability = [...availability];
        updatedAvailability[index][field] = value;
        setAvailability(updatedAvailability);
    };

    const handleRemoveAvailability = (index) => {
        const updatedAvailability = [...availability];
        updatedAvailability.splice(index, 1);
        setAvailability(updatedAvailability);
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
                                {previewImageUrl && (
                                    <img src={previewImageUrl} alt="Preview" style={{ Width: '100%', marginTop: '10px', borderRadius: '50%', }} />
                                )}
                                <div className="form-group">
                                    <label htmlFor="imageFile">Venue Images</label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                            className="form-control"
                                        accept="image/jpeg, image/png, image/gif"
                                        multiple
                                        onChange={handleImageChange}
                                    />
                                    {imageError && <div className="error-message">{imageError}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="venueName">Venue Name</label>
                                    <input
                                        type="text"
                                        id="venueName"
                                        className="form-control"
                                        value={venueName}
                                        onChange={(e) => setVenueName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">description</label>
                                    <textarea
                                        id="description"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setdescription(e.target.value)}
                                        placeholder="Text Here..."
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input
                                        type="text"
                                        id="location"
                                        className="form-control"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="capacity">Venue Capacity</label>
                                    <input
                                        type="number"
                                        id="capacity"
                                        className="form-control"
                                        value={venueCapacity}
                                        onChange={(e) => setVenueCapacity(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Availability</label>
                                    {availability.map((av, index) => (
                                        <div key={index} className="availability-row">
                                            <input
                                                type="date"
                                                value={av.startDate}
                                                onChange={(e) => handleAvailabilityChange(index, 'startDate', e.target.value)}
                                            />
                                            <span>-</span>
                                            <input
                                                type="date"
                                                value={av.endDate}
                                                onChange={(e) => handleAvailabilityChange(index, 'endDate', e.target.value)}
                                            />
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={av.available}
                                                    onChange={(e) => handleAvailabilityChange(index, 'available', e.target.checked)}
                                                />
                                                Available
                                            </label>
                                            <button type="button" onClick={() => handleRemoveAvailability(index)}>Remove</button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={handleAddAvailability}>Add Availability</button>
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
                        <th>Venue Cover Image</th>
                        <th>Venue Name</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Hall's</th>
                        <th>portfolio</th>
                    </tr>
                </thead>
                <tbody>
                    {venueData && venueData.map((venue, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td><img src={venue.venueImageUrl} alt="cover Pic" style={{ borderRadius: "50%", width: "75px", height: "75px" }} /></td>
                                <td data-full={venue.venueName}>
                                    <span className="truncate-text">
                                        {venue.venueName.length > 15 ? venue.venueName.substring(0, 12) + "..." : venue.venueName}
                                    </span>
                                </td>
                                <td data-full={venue.location}>
                                    <span className="truncate-text">
                                        {venue.location.length > 10 ? venue.location.substring(0, 10) + '...' : venue.location}
                                    </span>
                                </td>
                                <td>{venue.venueCapacity}</td>
                                <td className='hall-btn'>
                                    <button
                                        onClick={() => handleAddHallClick(venue._id)}
                                        className="file-upload-label"
                                    >
                                        <RiAddLine />
                                    </button>
                                    <button
                                        onClick={() => handleEyeIconClick(venue._id)}
                                        className="file-upload-label view-btn"
                                    // id='view-btn'
                                    >
                                        <AiOutlineEye />
                                    </button>
                                </td>
                                <td className='hall-btn' >
                                    <button
                                        onClick={() => handleAddImageClick(venue._id)} // Wrap the function call in an arrow function to pass it as a callback
                                        className="file-upload-label"
                                    >
                                        <RiImageAddFill />
                                    </button>

                                    <button
                                        onClick={() => handleAddVideoClick(venue._id)} // Wrap the function call in an arrow function to pass it as a callback
                                        className="file-upload-label view-btn"
                                    >
                                        <RiVideoLine />
                                    </button>
                                </td>
                            </tr>
                            {showHallTable && venue._id === selectedVenueId && (
                                <>
                                    {selectedVenueHalls.length > 0 ? (
                                        <tr className="hall-table-row">
                                            <td colSpan="4">
                                                <div className="hall-dropdown">
                                                    <h3>Hall    s for selected venue</h3>
                                                    <table className="hall-table menu-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Hall Name</th>
                                                                <th>Seating Capacity</th>
                                                                <th>Float Capacity</th>
                                                                <th>Lunch</th>
                                                                <th>Dinner</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {selectedVenueHalls.map((hall, index) => (
                                                                <tr key={index}>
                                                                    <td>{hall.hallName}</td>
                                                                    <td>{hall.capacity}</td>
                                                                    <td>{hall.floatCapacity}</td>
                                                                    <td>{hall.timeSlot && hall.timeSlot.lunch ? 'Yes' : 'No'}</td>
                                                                    <td>{hall.timeSlot && hall.timeSlot.dinner ? 'Yes' : 'No'}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <button className="file-upload-label close-btn"
                                                        onClick={() => setShowHallTable(false)}
                                                    >


                                                        Close
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <tr className="hall-table-row">
                                            <td colSpan="4">
                                                <div className="hall-dropdown">
                                                    <h3>No halls available for selected venue</h3>
                                                    <button className="file-upload-label close-btn" onClick={() => setShowHallTable(false)}>
                                                        Close
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

            {isHallModalOpen && (
                <div className="modal">
                    <form className="modal-dialog" onSubmit={handleHallSubmit}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Hall Detail</h3>
                                <button type="button" className="close" onClick={closeHallModal}>
                                    <AiOutlineCloseCircle />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="hallName">Hall Name</label>
                                    <input
                                        type="text"
                                        id="hallName"
                                        className="form-control"
                                        value={hallName}
                                        onChange={(e) => setHallName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="capacity">Capacity</label>
                                    <input
                                        type="number"
                                        id="capacity"
                                        className="form-control"
                                        value={capacity}
                                        onChange={(e) => setCapacity(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="floatCapacity">Floating Capacity</label>
                                    <input
                                        type="number"
                                        id="floatCapacity"
                                        className="form-control"
                                        value={floatCapacity}
                                        onChange={(e) => setFloatCapacity(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lunch">Lunch</label>
                                    <input
                                        type="checkbox"
                                        id="lunch"
                                        checked={lunchChecked}
                                        onChange={(e) => setLunchChecked(e.target.checked)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dinner">Dinner</label>
                                    <input
                                        type="checkbox"
                                        id="dinner"
                                        checked={dinnerChecked}
                                        onChange={(e) => setDinnerChecked(e.target.checked)}
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

            {isImageModalOpen && (
                <div className="modal">
                    <form className="modal-dialog" onSubmit={submitImages}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Add Portfolio</h3>
                                <button type="button" className="close" onClick={closeImageModal}>
                                    <AiOutlineCloseCircle />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="imageFiles">Images</label>
                                    <input
                                        type="file"
                                        id="imageFiles"
                                        className="form-control"
                                        accept="image/jpeg, image/png, image/gif"
                                        multiple
                                        onChange={handleProjectImageChange}
                                    />
                                    {imageError && <div className="error-message">{imageError}</div>}
                                    {previewImageUrls.map((imageUrl, index) => (
                                        <img key={index} src={imageUrl} alt={`Pic ${index + 1}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
                                    ))}
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

            {isVideoModalOpen && (
                <div className="modal">
                    <form className="modal-dialog" onSubmit={submitVideos}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Add Portfolio</h3>
                                <button type="button" className="close" onClick={closeVideoModal}>
                                    <AiOutlineCloseCircle />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="videoFiles">Videos</label>
                                    <input
                                        type="file"
                                        id="videoFiles"
                                        className="form-control"
                                        accept="video/mp4, video/webm, video/ogg"
                                        multiple
                                        onChange={handleVideoChange}
                                    />
                                    {videoError && <div className="error-message">{videoError}</div>}
                                    {previewVideoUrls.map((videoUrl, index) => (
                                        <video key={index} src={videoUrl} controls style={{ width: '100px', height: '100px', margin: '5px' }}></video>
                                    ))}
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

        </div>
    );
};

export default VenueModalForm;
