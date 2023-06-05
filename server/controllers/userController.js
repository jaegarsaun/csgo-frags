const User = require('../models/usersModel');
const mongoose = require('mongoose');



// GET all users (read & return)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ createdAt: -1 });
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
// GET a user (read & return)
const getSingleUser = async (req, res) => {
    try {
        const id = req.params.userID; // Corrected code
        console.log(id);
        console.log(req.params)
        console.log(req.params.userID)
        const user = await User.find({ "userID": id });

        if (user.length === 0) { // Check the length of the user array
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


// POST a user (create)
const createUser = async (req, res) => {
    // send these to the request body
    const { userID, email, displayName, role } = req.body;
    try {
        // Add doc to the db
        const user = await User.create({ userID, email, displayName, role });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
// DELETE a user (delete)
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' });
        }
        const user = await User.findOneAndDelete({ _id: id});

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
// PATCH a user (update)
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' });
        }
        const user = await User.findOneAndUpdate({_id: id}, {
            ...req.body,
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser
}
