/* This code is setting up a basic Express server in JavaScript. */
const express = require("express");
require("./connect");
const app = express();
const port = 5000;
// const UserRoutes = require('./routes/AppRoutes')
const VendorRoutes = require("./routes/VendorRoutes");
const cors = require("cors");

// middle ware

app.use(express.json());

app.use(cors());

// for user
// app.use("/api/user",UserRoutes)

// for Vendor
app.use("/api/vendor", VendorRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
