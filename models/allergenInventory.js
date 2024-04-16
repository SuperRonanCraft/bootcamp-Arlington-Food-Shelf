const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AllergenInventory extends Model {}

AllergenInventory.init(
  {
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
