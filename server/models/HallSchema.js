const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
    venueId: {
        type: String,
        required: true,
    },
    hallName: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    floatCapacity: {
        type: Number, 
        required: true,
    },
    timeSlot: {
        lunch: {
            type: Boolean,
            default: false,
        },
        dinner: {
            type: Boolean,
            default: false,
        },
    },
});

module.exports = mongoose.model("Hall", hallSchema);
