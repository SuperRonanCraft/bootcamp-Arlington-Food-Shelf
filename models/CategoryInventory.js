const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CategoryInventory extends Model {}

// Initialize the CategoryInventory model with attributes and options
CategoryInventory.init(
  {
     // Define attributes for the CategoryInventory model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    inventory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'inventory',
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize, // Pass the Sequelize connection
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'categoryInventory',
  },
);

module.exports = CategoryInventory;
