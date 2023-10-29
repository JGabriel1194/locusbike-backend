'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transmisions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transmisions.init({
    transmisionName: DataTypes.STRING,
    transmisionImage: DataTypes.STRING,
    transmisionDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transmisions',
  });
  return Transmisions;
};