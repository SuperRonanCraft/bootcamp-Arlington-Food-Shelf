const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Beans',
    picture: 'beans.jpg',
  },
  {
    name: 'Potatoes',
    picture: 'potatoes.jpg',
  },
  {
    name: 'Lemon',
    picture: 'lemon.jpg',
  },
  {
    name: 'Pizza',
    picture: 'pizza.webp',
  },
];

function seedInv() {
  return Inventory.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedInv };
