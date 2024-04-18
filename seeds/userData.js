const { User } = require('../models');


// Define an array of objects containing data for user accounts

const data = [
  {
    name: 'vitor',
    email: 'vitor@email.com',
    password: 'password',
  },
  {
    name: 'pema',
    email: 'pema@email.com',
    password: 'password',
  },
  {
    name: 'william',
    email: 'william@email.com',
    password: 'password',
  },
  {
    name: 'nora',
    email: 'nora@email.com',
    password: 'password',
  },
  {
    name: 'alain',
    email: 'alain@email.com',
    password: 'password',
  },
];

function seedUser() {
  console.log('Seeding User');
  console.log(data);
  return User.bulkCreate(data, {
    individualHooks: true,
  });
}

module.exports = { seedUser };
