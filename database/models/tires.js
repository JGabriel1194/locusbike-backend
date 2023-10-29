'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tires extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tires.init({
    tireName: DataTypes.STRING,
    tireImage: DataTypes.STRING,
    tireDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tires',
  });
  return Tires;
};