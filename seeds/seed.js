const sequelize = require('../config/connection');
const { seedUser } = require('./userData');
const { seedInv } = require('./inventoryData');
const { seedCategory } = require('./categoryData');
const { seedAllergen } = require('./allerginData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedInv();
  await seedCategory();
  await seedAllergen();

  console.log('Seeded');

  process.exit(0);
};

seedDatabase();
