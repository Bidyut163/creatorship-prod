const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true,
        },

        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                refPath: 'onModel',
            },
        ],

        onModel: {
            type: String,
            enum: ['creator', 'business'],
        },

        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'message',
        },
    },
    { timestamps: true }
);

module.exports = Chat = mongoose.model('chat', ChatSchema);
