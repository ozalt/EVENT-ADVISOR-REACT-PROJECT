const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require("path");
const Package = require('../models/PackageSchema');
require('dotenv').config();

// Configure Cloudinary with your cloud_name, api_key, and api_secret
cloudinary.config({
    cloud_name: "dzmw7vdta",
    api_key: "662373592339258",
    api_secret: "P1kW9Xzmb0tBpcq8HTB4awSpTzQ",
});


// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../images/package-image"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

// Set up multer upload
const upload = multer({ storage: storage }).single('packageImage');


const createPackageRecord = (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: 'Failed to upload package image' });
        }

        const {
            vendorId,
            packageName,
            menuType,
            hall,
            seatingCapacity,
            floatingCapacity,
            totalPrice,
        } = req.body;
        const packageImage = req.file ? req.file.path : null; // Get the path of the uploaded image

        try {
            // Upload image to Cloudinary
            let packageImageUrl = null;
            if (packageImage) {
                const cloudinaryUploadResult = await cloudinary.uploader.upload(packageImage, {
                    folder: 'venue',
                    use_filename: true,
                });


                packageImageUrl = cloudinaryUploadResult.secure_url;
            }

            // Create the package record
            const packageData = await Package.create({
                vendorId,
                packageName,
                menuType,
                hall,
                seatingCapacity,
                floatingCapacity,
                totalPrice,
                packageImageUrl: packageImageUrl// Provide a default value if packageImageUrl is not available
            });

            res.status(200).json(packageData); // Respond with the created package record
        } catch (error) {
            console.error('Cloudinary Error:', error); // Log the Cloudinary error for debugging
            return res.status(500).json({ error: 'Failed to upload package image' });
        }
    });
};

const getPackageForVendor = async (req, res) => {
    const { id } = req.params;
    try {
        const package = await Package.find({vendorId: id });
        res.status(200).json({ package });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch package for the given venueId" });
    }
};




module.exports = { 
    createPackageRecord,
    getPackageForVendor
};
