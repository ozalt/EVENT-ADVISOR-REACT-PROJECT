/* This code is setting up a basic Express server in JavaScript. */
const express = require("express");
require("./connect");
const app = express();
const port = 5000;
// const UserRoutes = require('./routes/AppRoutes')
const VendorRoutes = require("./routes/VendorRoutes");
const cors = require("cors");

// middle ware
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

// for user
// app.use("/api/user",UserRoutes)

// for Vendor
app.use("/api/vendor", VendorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
