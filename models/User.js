const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (value) {
                    return isEmail(value);
                },
                message: 'You must give a valid email address'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]

    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// get total count fo user's frinds on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create User modwl using UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;