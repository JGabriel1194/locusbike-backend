'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bikes.init({
    bikeSerie: DataTypes.STRING,
    bikeSize: DataTypes.STRING,
    bileColor: DataTypes.STRING,
    bikeYear: DataTypes.DATE,
    bikeMaterial: DataTypes.STRING,
    brandId: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER,
    brakeId: DataTypes.INTEGER,
    brakebrandId: DataTypes.INTEGER,
    handlebarId: DataTypes.INTEGER,
    potencyId: DataTypes.INTEGER,
    transmisionId: DataTypes.INTEGER,
    pedalId: DataTypes.INTEGER,
    seatId: DataTypes.INTEGER,
    ringId: DataTypes.INTEGER,
    tireId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bikes',
  });
  return Bikes;
};