const sequelize = require('../config/connection');
const { seedUser } = require('./userData');
const { seedInv } = require('./inventoryData');
const { seedCategory } = require('./categoryData');
const { seedAllergen } = require('./allergenData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedInv();

  await seedCategory();
  await seedAllergen();
  await seedUser();


  console.log('Seeded');

  process.exit(0);
};

seedDatabase();
