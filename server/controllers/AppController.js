const User = require("../models/user.model.js");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "sjvbsjdhbjavabvhaddabdfjaj", { expiresIn: "2d" });
};

// customerrr...

// login.....
const loginUser = async (req, res) => {
  const { user, password } = req.body;

  try {
    const acc = await User.login(user, password);
    // create token

    const token = createToken(acc._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// sign up.....
const signupUser = async (req, res) => {
  const { user, password, email, phone } = req.body;

  try {
    const acc = await User.signup(user, password, email, phone);
    // create token

    res.status(200).json({ acc });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
  signupUser,
  loginUser,
};