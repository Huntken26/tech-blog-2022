const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      userID: users[Math.floor(Math.random() * users.length)].id,
      format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
      }
    });
   
  }
  const seedComments = () => Comment.bulkCreate(commentData);
  seedComments();
  process.exit(0);
};


seedDatabase();