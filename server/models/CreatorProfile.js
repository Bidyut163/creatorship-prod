const mongoose = require('mongoose');

const CreatorProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'creator',
    },
    company: {
        type: String,
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

    creatorType: {
        type: String,
    },

    address: {
        type: String,
    },

    selfDesc: {
        type: String,
        required: true,
    },

    helpDesc: {
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

module.exports = mongoose.model('creatorProfile', CreatorProfileSchema);
