const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: process.env.DB_DISABLE_LOGGING === 'true' ? false : console.log,
    },
  );
}

module.exports = sequelize;
