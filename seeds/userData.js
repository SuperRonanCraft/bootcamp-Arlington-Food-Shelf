const { User } = require('../models/index');

const data = [
  {
    name: 'vitor',
    email: 'vitor',
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
