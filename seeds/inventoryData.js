const { Inventory } = require('../models');

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
  console.log('Seeding Inventory');
  console.log(data);
  return Inventory.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedInv };
