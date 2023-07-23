const Menu = require("../models/MenuSchema");


const createMenuRecord =  async (req, res) => {
    const { vendorId, menuName, dishes } = req.body;

    try {
        // Use the create method to create a new Menu record
        const menu = await Menu.create({ vendorId, menuName, dishes });
        res.status(201).json(menu);
    } catch (error) {
        console.error('Error creating menu:', error);
        res.status(500).json({ error: 'Failed to create menu' });
    }
};

const getMenuForVendor = async (req, res) => {
    const { id } = req.params;
    try {
        const menu = await Menu.find({ vendorId: id });
        res.status(200).json({ menu });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch menu for the given venueId" });
    }
};

module.exports = {
    createMenuRecord,
    getMenuForVendor
};