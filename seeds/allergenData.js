const { Allergen } = require('../models/index');


// Define an array of objects containing data for allergens

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
