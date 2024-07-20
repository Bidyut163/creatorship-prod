const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// Models
const Creator = require('../../models/Creator');
const Business = require('../../models/Business');

// Middleware
const isAuth = require('../../middleware/isAuth');

// @route   GET api/auth
// @desc    GET current user
// @access  Public
router.get('/', isAuth, async (req, res) => {
    try {
        if (req.user.type === 'CREATOR') {
            const user = await Creator.findById(req.user.id).select(
                '-password'
            );
            res.json(user);
        } else if (req.user.type === 'BUSINESS') {
            const user = await Business.findById(req.user.id).select(
                '-password'
            );
            res.json(user);
        } else {
            throw err;
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/auth/creator
// @desc    Authenticate creator & get token
// @access  Public

router.post(
    '/creator',

    async (req, res) => {
        const { email, password } = req.body;

        try {
            // see if user exits
            let creator = await Creator.findOne({ email });

            if (!creator) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            const isMatch = await bcrypt.compare(password, creator.password);

            if (!isMatch) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: creator.id,
                    type: 'CREATOR',
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 3600000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

// @route   GET api/auth/business
// @desc    Authenticate business & get token
// @access  Public

router.post(
    '/business',

    async (req, res) => {
        const { email, password } = req.body;

        try {
            // see if user exits
            let business = await Business.findOne({ email });

            if (!business) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            const isMatch = await bcrypt.compare(password, business.password);

            if (!isMatch) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }],
                });
            }

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: business.id,
                    type: 'BUSINESS',
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 3600000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
