const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize'); 


class User extends Model {};

User.init({
 id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
 }
});
