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

// @route POST api/users/creators
// @desc Register as Creator
// @access Public
router.post('/creators', async (req, res) => {
    const { fullname, email, password, creatorType } = req.body;

    try {
        // see if creator exists
        let creator = await Creator.findOne({ email });

        if (creator) {
            return res.status(400).json({
                errors: [{ msg: 'Creator already exists' }],
            });
        }

        creator = new Creator({
            fullname,
            email,
            password,
            creatorType,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        creator.password = await bcrypt.hash(password, salt);

        await creator.save();

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
});

// @route POST api/users/businesses
// @desc Register as a Business
// @access Public
router.post('/businesses', async (req, res) => {
    const { fullname, email, password, industry } = req.body;

    try {
        // see if creator exists
        let business = await Business.findOne({ email });

        if (business) {
            return res.status(400).json({
                errors: [{ msg: 'Organization already exists' }],
            });
        }

        business = new Business({
            fullname,
            email,
            password,
            industry,
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        business.password = await bcrypt.hash(password, salt);

        await business.save();

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
});

// @route   GET api/users/creators
// @desc    Get all creators
// @access  Private
router.get('/creators', isAuth, async (req, res) => {
    try {
        const creators = await Creator.find();

        res.json(creators);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route   GET api/users/businesses
// @desc    Get all businesses
// @access  Private
router.get('/businesses', isAuth, async (req, res) => {
    try {
        const businesses = await Business.find();

        res.json(businesses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
