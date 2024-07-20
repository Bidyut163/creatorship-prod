const mongoose = require('mongoose');

const BusinessProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business',
    },

    website: {
        type: String,
    },

    email: {
        type: String,
    },

    phone: {
        type: String,
    },

    creatorReq: {
        type: String,
    },

    address: {
        type: String,
    },

    description: {
        type: String,
        required: true,
    },

    helpReq: {
        type: String,
        required: true,
    },

    social: {
        youtube: {
            type: String,
        },
        twitter: {
            type: String,
        },
        facebook: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        instagram: {
            type: String,
        },
    },
});

module.exports = mongoose.model('businessProfile', BusinessProfileSchema);
