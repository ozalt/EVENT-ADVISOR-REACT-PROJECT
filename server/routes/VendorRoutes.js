const express = require("express");
const router = express.Router();

const {
  loginUser,
  signupUser,
  updateProfile,
  getVendorRecord,
} = require("../controllers/VendorController");

// for venue
const {
  createVenueRecord,
  getVenueRecord,
  getSingleVenue,
  createVenueImage,
  createVenueVideo,
  getAllVenueRecord,
} = require("../controllers/VenueController");

// for hall
const {
  createHallRecord,
  getHallsForVenue,
} = require("../controllers/HallController");

// for package
const {
  createPackageRecord,
  getPackageForVendor,
} = require("../controllers/PackageController");

const {
  createMenuRecord,
  getMenuForVendor,
} = require("../controllers/MenuController");

const { SearchRecord } = require("../controllers/SearchController");

// for create vendor

router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/update-info/:id", updateProfile);
router.get("/get-vendor/:id", getVendorRecord);

// for venue
router.post("/venue", createVenueRecord);
router.get("/venue/:id", getVenueRecord);
router.get("/venue", getAllVenueRecord);
router.get("/venue-detail/:id", getSingleVenue);
router.put("/venue/images/:id", createVenueImage);
router.put("/venue/videos/:id", createVenueVideo);

// for hall's
router.post("/hall", createHallRecord);
router.get("/venue-hall/:id", getHallsForVenue);

// for package/offer
router.post("/package", createPackageRecord);
router.get("/package/:id", getPackageForVendor);

// for menu

router.post("/menu", createMenuRecord);
router.get("/menu/:id", getMenuForVendor);

// for search function

router.get("/search", SearchRecord);

module.exports = router;
