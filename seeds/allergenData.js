const { Allergen } = require('../models/index');

const data = [
  {
    name: 'peanuts',
  },
  {
    name: 'Tree nuts',
  },
  {
    name: 'Milk',
  },
  {
    name: 'Egg',
  },
  {
    name: 'Soy',
  },
  {
    name: 'Wheat',
  },
  {
    name: 'Fish',
  },
  {
    name: 'Shellfish',
  },
];

function seedAllergen() {
  return Allergen.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedAllergen };
