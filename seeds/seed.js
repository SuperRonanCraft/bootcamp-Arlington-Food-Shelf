const sequelize = require('../config/connection');
const { seedUser } = require('./userData');
const { seedInv } = require('./inventoryData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedInv();
  await seedUser();

  console.log('Seeded');

  process.exit(0);
};

seedDatabase();
