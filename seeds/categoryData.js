const { Category } = require('../models/index');

const data = [
  {
    name: 'produce',
  },
  {
    name: 'meat',
  },
  {
    name: 'dairy',
  },
  {
    name: 'bread',
  },
  {
    name: 'canned goods',
  },
  {
    name: 'snacks',
  },
];

function seedCategory() {
  return Category.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedCategory };
