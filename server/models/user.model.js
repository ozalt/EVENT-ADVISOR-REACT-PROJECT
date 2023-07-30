const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = new mongoose.Schema({
	user: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	phone: { type: String, required: true },
});


User.statics.signup = async function (user, password, email, phone) {
	const exists = await this.findOne({ user });
	if (exists) {
		throw Error("Username Already in use!!!");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user_ = await this.create({ user, password: hash, email, phone });

	return user_;
};

User.statics.login = async function (user, password) {
	const login_user = await this.findOne({ user });
	if (!login_user) {
		throw Error("Username Incorrect!!!");
	}

	const match = await bcrypt.compare(password, login_user.password);
	if (!match) {
		throw Error("Incorrect password");
	}
	return login_user;
};




module.exports = mongoose.model("UserData", User);
