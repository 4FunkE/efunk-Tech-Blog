// Import Dependencies and Models
const sequelize = require('../config/connection');
const { User, Blogpost } = require('../models');
// Import Sample Data
const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); //drops and recreates the tables in the database, effectively resetting it
  // user creation
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  // blog post creation
  for (const blogPost of blogPostData) {
    await Blogpost.create({
      ...blogPost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
// exit script
  process.exit(0);
};
// call the function to start database seeding process
seedDatabase();
