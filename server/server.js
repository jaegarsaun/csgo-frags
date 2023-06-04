const express = require('express');
const userRoutes = require('./routes/users');



const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(res.path, req.method);
    next();
})



// routes
app.use('/api/users', userRoutes);

// listen for requests
app.listen(port, () => {
    console.log('Server is running on port ' + port + '...');

});