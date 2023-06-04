const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');

// GET all users (read & return)
router.get('/', (req, res) => {
    res.json({
        message: 'GET all users'
    })
})

// GET a user (read & return)
router.get('/:id', (req, res) => {
    res.json({
        message: 'GET a user'
    })
})

// POST a user (create)
router.post('/', async (req, res) => {
    // send these to the request body
    const { userID, email, displayName, role } = req.body;
    try{
        // Create a new user
        const user = await User.create({userID, email, displayName, role});
        res.status(200).json(user);
    }catch(err){
        res.status(400).json({error: err.message})
    }
    
})

// DELETE a user (delete)
router.delete('/:id', (req, res) => {
    res.json({
        message: 'DELETE a user'
    })
})

// PATCH a user (update)
router.patch('/:id', (req, res) => {
    res.json({
        message: 'PATCH a user'
    })
})




module.exports = router;