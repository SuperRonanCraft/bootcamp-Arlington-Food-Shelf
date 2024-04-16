const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Beans',
  },
  {
    name: 'Potatoes',
  },
  {
    name: 'Lemon',
  },
  {
    name: 'Pizza',
  },
];

function seedInv() {
  return Inventory.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedInv };
