const express = require('express');
const router = express.Router();

// Models
const CreatorProfile = require('../../models/CreatorProfile');
const BusinessProfile = require('../../models/BusinessProfile');

// Middlwware
const isAuth = require('../../middleware/isAuth');
const isCreator = require('../../middleware/isCreator');
const isBusiness = require('../../middleware/isBusiness');

// @route   GET api/profiles/me
// @desc    Get current user profile
// @access  Private
router.get('/me', isAuth, async (req, res) => {
    try {
        let profile;

        if (req.user.type === 'CREATOR') {
            profile = await CreatorProfile.findOne({
                user: req.user.id,
            }).populate('user', ['fullname']);
        } else if (req.user.type === 'BUSINESS') {
            profile = await BusinessProfile.findOne({
                user: req.user.id,
            }).populate('user', ['fullname']);
        } else {
            throw err;
        }

        if (!profile) {
            return res
                .status(400)
                .json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/profiles/creator/:user_id
// @desc    Get creator profile by user ID
// @access  Public
router.get('/creator/:user_id', async (req, res) => {
    try {
        const profile = await CreatorProfile.findOne({
            user: req.params.user_id,
        }).populate('user', ['fullname']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server error');
    }
});

// @route   GET api/profiles/business/:user_id
// @desc    Get business profile by user ID
// @access  Public
router.get('/business/:user_id', async (req, res) => {
    try {
        const profile = await BusinessProfile.findOne({
            user: req.params.user_id,
        }).populate('user', ['fullname']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server error');
    }
});

// @route POST api/profiles/creator
// @desc Create/update Profile Creator
// @access Private

router.post('/creator', isCreator, async (req, res) => {
    // destructure the request
    const {
        company,
        website,
        email,
        phone,
        creatorType,
        address,
        selfDesc,
        helpDesc,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (email) profileFields.email = email;
    if (phone) profileFields.phone = phone;
    if (creatorType) profileFields.creatorType = creatorType;
    if (address) profileFields.address = address;
    if (selfDesc) profileFields.selfDesc = selfDesc;
    if (helpDesc) profileFields.helpDesc = helpDesc;

    // Build Social Object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        let profile = await CreatorProfile.findOne({ user: req.user.id });

        if (profile) {
            // Update
            profile = await CreatorProfile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        }

        // Create
        profile = new CreatorProfile(profileFields);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route POST api/profiles/business
// @desc Create/update Profile Business
// @access Private

router.post('/business', isBusiness, async (req, res) => {
    // destructure the request
    const {
        website,
        email,
        phone,
        creatorReq,
        address,
        description,
        helpReq,
        youtube,
        facebook,
        twitter,
        instagram,
        linkedin,
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (website) profileFields.website = website;
    if (email) profileFields.email = email;
    if (phone) profileFields.phone = phone;
    if (creatorReq) profileFields.creatorReq = creatorReq;
    if (address) profileFields.address = address;
    if (description) profileFields.description = description;
    if (helpReq) profileFields.helpReq = helpReq;

    // Build Social Object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
        let profile = await BusinessProfile.findOne({ user: req.user.id });

        if (profile) {
            // Update
            profile = await BusinessProfile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        }

        // Create
        profile = new BusinessProfile(profileFields);

        await profile.save();

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
