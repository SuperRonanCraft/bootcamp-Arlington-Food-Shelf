const { Inventory } = require('../models/index');

const data = [
  {
    name: 'Beans',
    description: 'Canned beans',
    picture: 'beans.jpg',
  },
  {
    name: 'Potato',
    description: 'Fresh Idaho potatoes',
    picture: 'potato.jpg',
  },
  {
    name: 'Lemon',
    description: 'Fresh picked and bagged',
    picture: 'lemon.jpg',
  },
  {
    name: 'Chedder Cheese',
    stock: '13',
    description: '1lb block of chedder cheese.',
    picture: 'chedder.jpg',
  },
  {
    name: 'Corn on the Cob',
    stock: '10',
    description: '2lb bag of frozen',
    picture: 'corn.webp',
  },
  {
    name: 'Chicken',
    stock: '2',
    description: 'Whole 1lb frozen chicken',
    picture: 'chicken.jpg',
  },
  {
    name: 'Lettuce',
    stock: '6',
    description: 'Head of iceberg lettuce',
    picture: 'lettace_.jpg',
  },
  {
    name: 'Banana',
    stock: '6',
    description: 'Packed in bundles of 5 or more',
    picture: 'banana.png',
  },
  {
    name: 'Tomato',
    stock: '6',
    description: 'Locally picked and fresh 1lb bag',
    picture: 'tomatoe.png',
  },
  {
    name: 'Bread',
    stock: '6',
    description: 'Sliced white sandwich bread',
    picture: 'bread.png',
  },
  {
    name: 'Ham',
    stock: '6',
    description: 'Freshly packed from the deli',
    picture: 'ham.png',
  },
  {
    name: 'Spaghetti',
    stock: '6',
    description: 'Packets of 16oz boxes',
    picture: 'spaghetti.png',
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
