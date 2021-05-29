const {Thought, User} = require('../models');

const thougthController = {
    // get all thoughts
    getAllThought(req, res) {
        Thought.find({})
            .select('-__v')
            .sort({_id: -1})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
}