const jwt = require('jsonwebtoken');
// const config = require('config');
const keys = require('../config/keys');

module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token , authorization denied' });
    }

    // Verify token
    try {
        // const decoded = jwt.verify(token, config.get('jwtSecret'));
        const decoded = jwt.verify(token, keys.jwtSecret);

        req.user = decoded.user;
        if (decoded.user.type != 'CREATOR') {
            return res.status(401).json({ msg: 'Not a Creator' });
        }
        next();
    } catch (err) {
        res.status(401).json({ msg: 'token not valid' });
    }
};
