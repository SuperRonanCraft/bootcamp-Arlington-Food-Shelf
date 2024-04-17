const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Bean',
    picture: 'beans.jpg',
  },
  {
    name: 'Potato',
    picture: 'potato.jpg',
  },
  {
    name: 'Lemon',
    picture: 'lemon.jpg',
  },
  {
    name: 'Pizza',
    stock: '13',
    description: '1lb block of chedder cheese.',
    picture: 'pizza.webp',
  },
  {
    name: 'Frozen corn',
    stock: '10',
    description: '2lb bag of frozen corn.',
    picture: 'corn.webp',
  },
  {
    name: 'Chicken',
    stock: '2',
    description: 'Whole frozen chicken.',
    picture: 'chicken.jpg',
  },
  {
    name: 'Lettuce',
    stock: '6',
    description: 'Head of iceberg lettuce.',
    picture: 'lettace_.jpg',
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
