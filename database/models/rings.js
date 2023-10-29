'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rings.init({
    ringName: DataTypes.STRING,
    ringSize: DataTypes.STRING,
    ringDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rings',
  });
  return Rings;
};