// Importing necessary classes from the Sequelize library.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AllergenInventory extends Model {}

// Initialize the AllergenInventory model with attributes and options
AllergenInventory.init(
  {
    // Define attributes for the AllergenInventory model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    allergen_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'allergen',
        key: 'id',
      },
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'inventory',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'allergenInventory',
  },
);

module.exports = AllergenInventory;
