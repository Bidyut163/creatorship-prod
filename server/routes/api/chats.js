const express = require('express');
const router = express.Router();

// Models
const Chat = require('../../models/Chat');
const Business = require('../../models/Business');
const Creator = require('../../models/Creator');

// Middleware
const isAuth = require('../../middleware/isAuth');

// @route   GET api/chats/
// @desc    Get all chats
// @access  Private

// @route   POST api/chats/
// @desc    Create a chat
// @access  Private
router.post('/', isAuth, async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log('UserId param is not sent with request');
        return res.status(400);
    }

    let isChat = await Chat.find({
        $and: [
            { users: { $elemMatch: { $eq: req.user.id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ],
    })
        .populate('users', '-password')
        .populate('latestMessage');

    if (req.user.type === 'CREATOR') {
        isChat = await Creator.populate(isChat, {
            path: 'latestMessage.sender',
            select: 'fullname email',
        });
    } else if (req.user.type === 'BUSINESS') {
        isChat = await Business.populate(isChat, {
            path: 'latestMessage.sender',
            select: 'fullname email',
        });
    } else {
        throw new Error();
    }

    if (isChat.length > 0) {
        return res.json(isChat[0]);
    }

    let chatData = {
        chatName: 'sender',
        users: [req.user.id, userId],
    };

    try {
        const createdChat = await Chat.create(chatData);

        const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
            'users',
            '-password'
        );

        res.status(200).json(fullChat);
    } catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});

module.exports = router;
