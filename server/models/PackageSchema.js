const mongoose = require("mongoose");

// Create a new Mongoose schema for the package
const packageSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        require: true
    },
    packageImage: {
        type: String,
    },
    packageImageUrl: {
        type: String,
        required: true,
    },
    packageName: {
        type: String,
        required: true,
    },
    menuType: {
        type: String,
        required: true,
    },
    hall: {
        type: Number,
        required: true,
    },
    seatingCapacity: {
        type: Number,
        required: true,
    },
    floatingCapacity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
});

// Create a Mongoose model using the schema
const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
