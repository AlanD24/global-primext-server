const { Sequelize } = require('sequelize');

const dbCredentials = "mysql://admin:admin@127.0.0.1:3306/gptx_test"; // Tried to be hidden in .env but didn't work

const sequelize = new Sequelize(dbCredentials, {
    dialect: 'mysql',
    logging: false,  // This disables log of SQL in console
});

const dbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error(error);
        // throw new Error('Error trying to connect to DB');
    }
}

const syncronizeDB = () => {
    sequelize.sync({ force: false })
        .then(() => {
            console.log('DB and tables synchronized');
        })
        .catch(error => {
            console.error('Error while synchronizing DB:', error);
        });
} 

module.exports = {
    sequelize,
    dbConnection, 
    syncronizeDB
}