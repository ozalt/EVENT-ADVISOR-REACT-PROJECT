const Venue = require("../models/VenueSchema");
const path = require("path");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with your cloud_name, api_key, and api_secret
cloudinary.config({
    cloud_name: "dzmw7vdta",
    api_key: "662373592339258",
    api_secret: "P1kW9Xzmb0tBpcq8HTB4awSpTzQ",
});

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../images/venue"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

// Set up multer upload
const upload = multer({ storage: storage }).single("venueImage");

const createVenueRecord = async (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to upload venue image" });
        }

        const { vendorId, venueName, description, location, venueCapacity, availability } = req.body;
        const venueImage = req.file ? req.file.path : null; // Get the path of the uploaded image

        try {
            // Upload image to Cloudinary
            let venueImageUrl = null;
            if (venueImage) {
                const cloudinaryUploadResult = await cloudinary.uploader.upload(venueImage, {
                    folder: "venue",
                    use_filename: true, // Use the original filename
                });
                venueImageUrl = cloudinaryUploadResult.secure_url;
            }

            // Process the availability data before storing it in the database
            const processedAvailability = JSON.parse(availability);

            // Create the venue record
            const venue = await Venue.create({
                vendorId,
                venueName,
                description,
                location,
                venueCapacity,
                venueImage: venueImage,
                venueImageUrl: venueImageUrl,
                availability: processedAvailability,
            });

            res.status(200).json(venue); // Respond with the created venue record
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle any errors that occurred during the database operation
        }
    });
};

const getAllVenueRecord = async (req, res) => {
    const venues = await Venue.find({});
    res.status(200).json(venues);
};
const getVenueRecord = async (req, res) => {
    const { id } = req.params;
    try {
        const venue = await Venue.find({ vendorId: id });
        res.status(200).json({ venue });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch venue for the given venueId" });
    }
};

const getSingleVenue = async (req, res) => {
    const { id } = req.params;
    try {
        const venue = await Venue.findById(id);
        if (!venue) {
            return res.status(400).json({ error: "No Record Found!!!" });
        }
        res.status(200).json({ venue });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ error: "Invalid ID format" });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// to upload images and videosss
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../images/project-image"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../images/project-video"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const imageUpload = multer({ storage: imageStorage }).array("projectImages");
const videoUpload = multer({ storage: videoStorage }).array("projectVideos");

const createVenueImage = async (req, res) => {
    imageUpload(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to upload venue image" });
        }

        const { id } = req.params;

        try {
            // Loop through all uploaded files and upload them to Cloudinary
            const projectImagesUrl = [];
            for (const file of req.files) {
                const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
                    folder: "portfolio-images",
                    use_filename: true,
                });
                projectImagesUrl.push(cloudinaryUploadResult.secure_url);
            }

            // Save the image paths and Cloudinary URLs to the database
            const updatedVenue = await Venue.findByIdAndUpdate(
                { _id: id },
                { $push: { projectImagesUrl: projectImagesUrl } },
                { new: true }
            );

            res.status(200).json(updatedVenue); // Respond with the updated venue record
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle any errors that occurred during the database operation
        }
    });
};


const createVenueVideo = async (req, res) => {
    videoUpload(req, res, async function (err) {
        if (err) {
            return res.status(500).json({ error: "Failed to upload venue video" });
        }

        const { id } = req.params;

        try {
            // Loop through all uploaded files and upload them to Cloudinary
            const projectVideosUrl = [];
            for (const file of req.files) {
                const cloudinaryUploadResult = await cloudinary.uploader.upload(file.path, {
                    resource_type: "video",
                    folder: "portfolio-videos",
                    use_filename: true,
                });
                projectVideosUrl.push(cloudinaryUploadResult.secure_url);
            }

            // Save the video paths and Cloudinary URLs to the database
            const updatedVenue = await Venue.findByIdAndUpdate(
                { _id: id },
                { $push: { projectVideosUrl: projectVideosUrl } },
                { new: true }
            );

            res.status(200).json(updatedVenue); // Respond with the updated venue record
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle any errors that occurred during the database operation
        }
    });
};



module.exports = {
    createVenueRecord,
    getVenueRecord,
    getSingleVenue,
    createVenueImage,
    createVenueVideo,
    getAllVenueRecord
};
