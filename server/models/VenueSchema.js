const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    available: {
        type: Boolean,
        default: true, // Set default value to true (available), but the vendor can change it to false (unavailable)
    },
});

const venueSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        required: true,
    },
    venueName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    venueCapacity: {
        type: Number,
        required: true,
    },
    venueImage: {
        type: String,
    },
    venueImageUrl: {
        type: String,
    },
    projectImagesUrl: [
        {
            type: String,
        },
    ],
    projectVideosUrl: [
        {
            type: String,
        },
    ],
    availability: [availabilitySchema], // Array of availability objects
});

module.exports = mongoose.model("Venue", venueSchema);
