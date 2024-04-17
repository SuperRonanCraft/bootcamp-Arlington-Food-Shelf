const User = require('./User');
const Order = require('./Order');
const Inventory = require('./Inventory');
const OrderItem = require('./OrderItem');
const Category = require('./Category');
const Allergen = require('./Allergen');
const AllergenInventory = require('./AllergenInventory');
const CategoryInventory = require('./CategoryInventory');

// USER and ORDER
Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
});

// ORDERITEM and ORDER
OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

// INVENTORY and ORDERITEM
Inventory.belongsTo(OrderItem, {
  foreignKey: 'inventory_id',
});

OrderItem.hasOne(Inventory, {
  foreignKey: 'inventory_id',
});

// INVENTORY and CATEGORY
Inventory.belongsToMany(Category, {
  through: {
    model: CategoryInventory,
    unique: false,
  },
});

Category.belongsToMany(Inventory, {
  through: {
    model: CategoryInventory,
    unique: false,
  },
});

// INVENTORY and ALLERGEN
Inventory.belongsToMany(Allergen, {
  through: {
    model: AllergenInventory,
    unique: false,
  },
});

Allergen.belongsToMany(Inventory, {
  through: {
    model: AllergenInventory,
    unique: false,
  },
});

module.exports = {
  User,
  Order,
  Inventory,
  OrderItem,
  Category,
  Allergen,
  AllergenInventory,
  CategoryInventory,
};
