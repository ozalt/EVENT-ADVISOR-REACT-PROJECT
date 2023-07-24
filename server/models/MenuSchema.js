// menu.js (Mongoose schema file)

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        require: true
    },
    menuName: {
        type: String,
        required: true,
    },
    dishes: [
        {
            dishName: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        default: 0, // The initial value will be set to 0
    },
});

// Calculate the totalPrice before saving the menu record
menuSchema.pre('save', function (next) {
    const totalPrice = this.dishes.reduce((total, dish) => total + dish.price, 0);
    this.totalPrice = totalPrice;
    next();
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
