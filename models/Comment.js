const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//Utilize the Project.init from the 28-mini project and customize to match COMMENT
class comment extends Model {}

comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    postID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: false,
    modelName: 'comment'
  }
);

module.exports = comment;