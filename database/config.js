const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect( process.env.DB_DEV_STRING );
    } catch (error) {
        console.error(error);
        throw new Error('Error in DB');
    }
}

module.exports = {
    dbConnection
}