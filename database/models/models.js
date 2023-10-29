'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modelos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Modelos.init({
    modelName: DataTypes.STRING,
    modelDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Modelos',
  });
  return Modelos;
};