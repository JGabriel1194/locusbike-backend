'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brakes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Brakes.init({
    brakeName: DataTypes.STRING,
    brakeDetail: DataTypes.STRING,
    brakeImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brakes',
  });
  return Brakes;
};