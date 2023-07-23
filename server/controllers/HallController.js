const Hall = require("../models/HallSchema")

// for create function
const createHallRecord = async (req, res) => {
    const { venueId, hallName, capacity, lunchChecked, dinnerChecked,floatCapacity } = req.body;

    try {
        // Use the create method to create a new Hall record
        const hall = await Hall.create({
            venueId,
            hallName,
            capacity,
            floatCapacity,
            timeSlot: {
                lunch: lunchChecked,
                dinner: dinnerChecked,
            },
        });

        res.status(200).json(hall);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getHallsForVenue = async (req, res) => {
    const { id } = req.params;
    try {
        const hall = await Hall.find({ venueId: id });
        res.status(200).json({ hall });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch halls for the given venueId" });
    }
};


module.exports = {
    createHallRecord,
    getHallsForVenue
};