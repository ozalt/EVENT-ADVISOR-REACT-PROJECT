/* The code is defining several functions related to user authentication and profile management. */
const Vendor = require("../models/VendorModel")
// create vendor collection or enter vendor data

/* The code is importing the `jsonwebtoken` library and defining a function called `createToken`. */
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, "sjvbsjdhbjavabvhaddabdfjaj", { expiresIn: "2d" });
};

// customerrr...

// login.....
/**
 * The loginUser function is an asynchronous function that handles user login by checking the user's
 * credentials and creating a token if the login is successful.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. It is typically
 * provided by the web framework or server handling the request.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 */
const loginUser = async (req, res) => {
    const { user, password } = req.body;

    try {
        const acc = await Vendor.login(user, password);
        // create token

        const token = createToken(acc._id);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// sign up.....
/**
 * The signupUser function is an asynchronous function that takes in user information from a request
 * body, attempts to create a new account using the Vendor.signup method, and returns the created
 * account or an error message.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes properties such as the request headers, request body,
 * request method, request URL, etc.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code, headers, and sending the response body.
 */
const signupUser = async (req, res) => {
    const { user, password, email, phone } = req.body;

    try {
        const acc = await Vendor.signup(user, password, email, phone);
        // create token

        res.status(200).json({ acc });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


/**
 * The function updates a user's profile information and returns the updated user object.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters. In this case, it is
 * used to extract the `id` parameter from the request URL.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data.
 * @returns a JSON response with the updated user object if the user is found and updated successfully.
 * If no user is found, it returns a JSON response with an error message.
 */
const updateProfile = async (req, res) => {
    const { id } = req.params;

    const user = await Vendor.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
    });

    if (!user) {
        return res.status(400).json({ error: "No record found!!!" });
    }

    res.status(200).json({ user });
};


// get single record
/**
 * The function `getVendorRecord` retrieves a vendor record based on the provided user ID and returns
 * it as a JSON response.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties that allow you to control the response, such as
 * setting the status code and sending JSON data.
 * @returns a JSON response with the user's record if it exists, or a JSON response with an error
 * message if no record is found.
 */
const getVendorRecord = async (req, res) => {
    const { id } = req.params;
    const users = await Vendor.findOne({ user: id });
    if (!users) {
        return res.status(400).json({ error: "no Record Found!!!" });
    }
    res.status(200).json({ users });
};

module.exports = {
    signupUser,
    loginUser,
    updateProfile,
    getVendorRecord
};
