'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      userEmail: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      userCedula: DataTypes.STRING,
      userPhone: DataTypes.STRING,
      userImage: DataTypes.STRING,
      userRol: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};