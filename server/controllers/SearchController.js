const Venue = require("../models/VenueSchema");
const Hall = require("../models/HallSchema");

const SearchRecord = async (req, res) => {
    const { date, time, capacity } = req.query;

    try {
        // Step 1: Find venues that match the search criteria (date and capacity)
        const venues = await Venue.aggregate([
            {
                $match: {
                    'availability.startDate': { $lte: new Date(date) },
                    'availability.endDate': { $gte: new Date(date) },
                    venueCapacity: { $gte: parseInt(capacity) },
                }
            },
        ]);

        // Step 2: Get the venueIds of the filtered venues
        const venueIds = venues.map(venue => venue._id);

        // Step 3: Find halls that match the search criteria (time and venueIds)
        const halls = await Hall.find({
            venueId: { $in: venueIds },
            [`timeSlot.${time}`]: true,
        });

        // Step 4: Return the search results as a response
        res.status(200).json({ venues, halls });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    SearchRecord
};
