const User = require('./user');
const Order = require('./order');
const Inventory = require('./inventory');
const OrderItem = require('./orderItem');
const Category = require('./category');
const Allergen = require('./allergen');
const Allergens = require('./allergens');

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
});

OrderItem.belongsTo(Order, {
  foreignKey: 'order_id',
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

Inventory.belongsTo(OrderItem, {
  foreignKey: 'inventory_id',
});

OrderItem.hasOne(Inventory, {
  foreignKey: 'inventory_id',
});

Inventory.belongsToMany(Category, {
  through: {
    model: 'categories',
    unique: false,
  },
});

Inventory.belongsToMany(Allergen, {
  through: {
    model: 'allergens',
    unique: false,
  },
});

Category.belongsToMany(Inventory, {
  through: {
    model: 'categories',
    unique: false,
  },
});

Allergen.belongsToMany(Inventory, {
  through: {
    model: 'allergens',
    unique: false,
  },
});

module.exports = { User, Order, Inventory, OrderItem, Category };
