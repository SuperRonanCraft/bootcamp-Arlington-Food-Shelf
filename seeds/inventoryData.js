const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Bean',
    picture: 'beans.jpg',
  },
  {
    name: 'Potato',
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
