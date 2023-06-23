const express = require("express");
const router = express.Router();
const {
    signupUser,
    loginUser
} = require('../controllers/AppController')


// user.............
// login....
router.post("/login", loginUser)

// signup
router.post("/signup", signupUser)

module.exports = router;
