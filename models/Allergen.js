// Importing Sequelize modules
const { Model, DataTypes } = require('sequelize');
// Importing the Sequelize instance created in the connection configuration
const sequelize = require('../config/connection');
// Defining a new class 'Allergen' that extends Sequelize's Model class
class Allergen extends Model {}
// Initializing the Allergen model with attribute definitions and model options
Allergen.init(
  {
    // Defining the 'id' attribute as an INTEGER, a primary key, and auto-incrementing
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Defining the 'name' attribute as a STRING, which cannot be null
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Passing the sequelize instance for database connection
    sequelize,
    // Disabling timestamps 
    timestamps: false,
    // Using 'allergen' as the table name
    freezeTableName: true,
    // Using underscored naming for columns
    underscored: true,
    // Defining the model name as 'allergen'
    modelName: 'allergen',
  },
);

module.exports = Allergen;
