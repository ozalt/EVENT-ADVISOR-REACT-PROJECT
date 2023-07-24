const express = require("express");
const router = express.Router();

const {
    loginUser,
    signupUser,
    updateProfile,
    getVendorRecord,
} = require("../controllers/VendorController");

// for create vendor

// User routes
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.post("/update-info/:id", updateProfile);
router.get("/get-vendor/:id", getVendorRecord);

module.exports = router;
