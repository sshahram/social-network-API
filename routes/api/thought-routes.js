const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

module.exports = router;
