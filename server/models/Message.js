const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'onModel',
        },
        onModel: {
            type: String,
            enum: ['creator', 'business'],
        },

        content: {
            type: String,
            trim: true,
        },

        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chat',
        },
    },
    { timestamps: true }
);

module.exports = Message = mongoose.model('message', MessageSchema);