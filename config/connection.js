// Importing the Sequelize library
const Sequelize = require('sequelize');
// Importing and configuring dotenv to load environment variables from a .env file
require('dotenv').config();

let sequelize; // Declaring a variable to hold the Sequelize instance
// Checking if the environment variable DB_URL is set
if (process.env.DB_URL) {
  // Creating a Sequelize instance using the provided database URL
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
      logging: process.env.DB_DISABLE_LOGGING === 'true' ? false : console.log,
    },
  );
}

module.exports = sequelize;
