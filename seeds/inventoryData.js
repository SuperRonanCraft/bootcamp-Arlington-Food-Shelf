const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Beans',
    picture: 'dairy-products.jpg',
  },
  {
    name: 'Potatoes',
    picture: 'frozenfoods.png',
  },
  {
    name: 'Lemon',
    picture: 'meats.jpg',
  },
  {
    name: 'Pizza',
    picture: 'produce.jpg',
  },
];

function seedInv() {
  return Inventory.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedInv };
