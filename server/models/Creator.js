const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    creatorType: {
        type: String,
        required: true,
    },
});

module.exports = Creator = mongoose.model('creator', CreatorSchema);
