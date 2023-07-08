const express = require("express");
const router = express.Router();
const {
    signupUser,
    loginUser,
    updateUserInfo,
    fetchUserData
} = require('../controllers/AppController')

// User routes
router.post("/login", loginUser);
router.post("/signup", signupUser);
router.put("/user/:userId", updateUserInfo);
router.get("/use/:userId",fetchUserData);

module.exports = router;
