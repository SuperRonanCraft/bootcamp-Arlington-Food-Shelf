// Importing Sequelize modules
const { Model, DataTypes } = require('sequelize');
// Importing the Sequelize instance created in the connection configuration
const sequelize = require('../config/connection');
// Defining a new class 'Allergen' that extends Sequelize's Model class
class Allergen extends Model {}
// Initializing the Allergen model with attribute definitions and model options
Allergen.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'allergen',
  },
);

module.exports = Allergen;
