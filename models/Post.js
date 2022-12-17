const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


//Utilize the Project.init from the 28-mini project and customize to match POST
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.STRING,
    },
      createdAt: {
      type: DataTypes.DATE,
      
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'Post'
  }
)

module.exports = Post;