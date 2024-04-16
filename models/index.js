const User = require('./user');
const Order = require('./order');
const Inventory = require('./inventory');
const OrderItem = require('./orderItem');
const Category = require('./category');
const Allergen = require('./allergen');

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

Inventory.hasMany(OrderItem, {
  foreignKey: 'inventory_id',
});

Inventory.belongsToMany(OrderItem, {
  through: 'inventory_id',
});

Inventory.hasOne(Category, {
  foreignKey: 'category_id',
});

Inventory.hasOne(Allergen, {
  foreignKey: 'allergen_id',
});

module.exports = { User };
