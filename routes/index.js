const router = require('express').Router();

// import all of the API routes from /api/index.js
const apiRoutes = require('./api');

// add prefix of `api` to all of the api routes
router.use('/api', apiRoutes);


// if route does not exist, return status 404
router.use((req, res) => {
    res.status(404).send('the route does not exist!');
});

module.exports = router;