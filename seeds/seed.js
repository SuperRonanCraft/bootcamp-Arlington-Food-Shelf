// Import the Sequelize connection instance from '../config/connection'
const sequelize = require('../config/connection');
const { seedUser } = require('./userData');
const { seedInv } = require('./inventoryData');
const { seedCategory } = require('./categoryData');
const { seedAllergen } = require('./allergenData');


// Define an asynchronous function to seed the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedInv();

  await seedCategory();
  await seedAllergen();
  await seedUser();


  console.log('Seeded');

  process.exit(0);
};
// Call the seedDatabase function to start the seeding process
seedDatabase();
