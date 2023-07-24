import React, { useState } from 'react';
import styles from "./FrameComponent.module.css";
import NavBar from '../components/navbar/NavBar';
import Footer from '../containers/footer/Footer';

const FrameComponent = () => {
  const [photoPreviews, setPhotoPreviews] = useState([]);
  const [vendorRating, setVendorRating] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const previews = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = () => {
        previews.push(reader.result);
        
        if (previews.length === files.length) {
          setPhotoPreviews(previews);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleVendorRatingChange = (rating) => {
    setVendorRating((prevRatings) => {
      if (prevRatings.includes(rating)) {
        return prevRatings.filter((prevRating) => prevRating !== rating);
      } else {
        return [...prevRatings, rating];
      }
    });
  };

  return (
    <>
      <NavBar />
      <form className={styles.frameParent}>
        <div className={styles.selectAVendorParent}>
          <label className={styles.selectAVendor}>Select a Vendor*</label>
          <input className={styles.frameChild} type="text" maxLength={100} minLength={0} />
        </div>
        <div className={styles.rateVendorParent}>
          <label className={styles.selectAVendor}>Rate Vendor*</label>
          <div className={styles.frameGroup}>
            {[...Array(5)].map((_, index) => (
              <label key={index} className={styles.starLabel}>
                <input
                  type="checkbox"
                  className={styles.starCheckbox}
                  value={index + 1}
                  checked={vendorRating.includes(index + 1)}
                  onChange={() => handleVendorRatingChange(index + 1)}
                />
                <span className={styles.starIcon} role="img" aria-label={`${index + 1} star rating`}>
                  ⭐️
                </span>
              </label>
            ))}
          </div>
          <div className={styles.ratingIndicator}>
            {vendorRating.length > 0 && `${vendorRating.length}/5`}
          </div>
        </div>
        <textarea
          className={styles.frameTextarea}
          placeholder="Tell us about your experience*"
        />
        <input
          className={styles.frameChild6}
          type="text"
          placeholder="How much did you spend on this wedding?"
          maxLength={100}
          minLength={0}
        />
        <div className={styles.frameContainer}>
          <label htmlFor="photoInput" className={styles.addPhotosWrapper}>
            <span className={styles.addPhotos}>Add Photos</span>
            <input
              id="photoInput"
              className={styles.hiddenInput}
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
            />
          </label>
          <button className={styles.submitWrapper}>
            <span className={styles.addPhotos}>Submit</span>
          </button>
        </div>
        <div className={styles.photoPreviewContainer}>
          {photoPreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index + 1}`}
              className={styles.photoPreview}
            />
          ))}
        </div>
      </form>
      <Footer />
    </>
  );
};

export default FrameComponent;
