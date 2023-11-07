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
  Bikes.init(
    {
      bikeSerie: DataTypes.STRING,
      bikeBrand: DataTypes.STRING,
      bikeModel: DataTypes.STRING,
      bikeSize: DataTypes.STRING,
      bileColor: DataTypes.STRING,
      bikeYear: DataTypes.DATE,
      bikeMaterial: DataTypes.STRING,
      bikeBrake: DataTypes.STRING,
      bikeBrakeBrand: DataTypes.STRING,
      bikeHandlebar: DataTypes.STRING,
      bikePotency: DataTypes.STRING,
      bikeTransmission: DataTypes.STRING,
      bikePedal: DataTypes.STRING,
      bikeSeat: DataTypes.STRING,
      bikeRing: DataTypes.STRING,
      bikeTire: DataTypes.STRING,
      bikeState: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bikes',
    },
  );
  return Bikes;
};