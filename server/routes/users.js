const express = require('express');
const router = express.Router();


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
router.post('/', (req, res) => {
    res.json({
        message: 'POST a user'
    })
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