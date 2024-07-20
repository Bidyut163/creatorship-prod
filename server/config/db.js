const mongoose = require('mongoose');
const keys = require('./keys');

const db = keys.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(db);

        console.log('Mongodb connected');
    } catch (err) {
        console.error(err.message);

        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
