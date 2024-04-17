const { Inventory } = require('../models/index');
const { describe } = require('../models/user');


const data = [
  {
    name: 'Cheese',
    stock: '13',
    description: '1lb block of chedder cheese.',
    picture: 'dairy-products.jpg',
  },
  {
    name: 'Frozen corn',
    stock: '10',
    description: '2lb bag of frozen corn.',
    picture: 'frozenfoods.png',
  },
  {
    name: 'Chicken',
    stock: '2',
    description: 'Whole frozen chicken.',
    picture: 'meats.jpg',
  },
  {
    name: 'Lettuce',
    stock: '6',
    description: 'Head of iceberg lettuce.',
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
