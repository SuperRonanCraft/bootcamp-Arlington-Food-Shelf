const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CategoryInventory extends Model {}

CategoryInventory.init(
  {
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
    catagory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'categoryInventory',
  },
);

module.exports = CategoryInventory;
