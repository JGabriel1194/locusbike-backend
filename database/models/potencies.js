'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Potencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Potencies.init({
    potencyName: DataTypes.STRING,
    potencyImage: DataTypes.STRING,
    potencyDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Potencies',
  });
  return Potencies;
};