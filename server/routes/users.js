const express = require('express');
const router = express.Router();

//import controllers
const { 
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser
} = require('../controllers/userController');


// GET all users (read & return)
router.get('/', getAllUsers);

// GET a user (read & return)
router.get('/:id', getSingleUser);

// POST a user (create)
router.post('/', createUser);

// DELETE a user (delete)
router.delete('/:id', deleteUser);

// PATCH a user (update)
router.patch('/:id', updateUser);




module.exports = router;