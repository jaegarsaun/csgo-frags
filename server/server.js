const express = require('express');
const userRoutes = require('./routes/users');
require('dotenv').config();


const mongoose = require('mongoose');

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(res.path, req.method);
    next();
})

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });


// routes
app.use('/api/users', userRoutes);


const uri = process.env.REACT_APP_MONGODB_URI;
// connect to mongodb
mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB...');
        // listen for requests
        app.listen(port, () => {
            console.log('Server is running on port ' + port + '...');

        });
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB...', err);
    })

