const mongoose = require("mongoose");

const venueSchema = {
    vendorId: {
        type: String, // Assuming vendorId is of type number
        required: true, // Specify if this field is required or not
    },
    venueName: {
        type: String, // Venue name will be a string
        required: true,
    },
    description: {
        type: String, // Description will be a string
        required: false, // You can set it to true if description is always required
    },
    location: {
        type: String, // Location will be a string
        required: true,
    },
    venueCapacity: {
        type: Number, 
        required: true,
    },
    venueImage: { type: String },

	venueImageUrl: { type: String },
    
    projectImagesUrl: [{
        type: String, // Array of strings to store multiple image file names or URLs
    }],
    projectVideosUrl: [{
        type: String, // Array of strings to store multiple image file names or URLs
    }],
};

module.exports = mongoose.model("Venue", venueSchema);
