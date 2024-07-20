const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
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

    industry: {
        type: String,
        required: true,
    },
});

module.exports = Business = mongoose.model('business', BusinessSchema);
