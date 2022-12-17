const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


//Checking the password to see if it matches. Used method from the mini project activity
class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

//Utilized the User constructor from the mini project activity
User.init(
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
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [10]
      }
    },
     registeredAt: {
      type: DataTypes.DATE,
      defaultValue: () => {
        return Date.now()
      }
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },  
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'User'
  }
);

module.exports = User;