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

    // get a thought by if
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
            .select('-__v')
            .then(dbThoughtData => {
                if(!dbThoughtData) {
                    res.status(404).json({message: 'No thought found with this id!'});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
}