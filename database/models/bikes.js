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
      Bikes.hasMany(Image, {as:'images',foreignKey: 'bikeId', sourceKey: 'id'})
    }
  }
  Bikes.init(
    {
      bikeSerie: DataTypes.STRING,
      bikeType: DataTypes.STRING,
      bikeBrand: DataTypes.STRING,
      bikeModel: DataTypes.STRING,
      bikeDate: DataTypes.DATE,
      bikeSize: DataTypes.STRING,
      bikeColor: DataTypes.STRING,
      bikeMaterial: DataTypes.STRING,
      bikeBrakeBrand: DataTypes.STRING,
      bikeBrake: DataTypes.STRING,
      bikeRing: DataTypes.STRING,
      bikeTire: DataTypes.STRING,
      bikeTransmission: DataTypes.STRING,
      bikeDesviador: DataTypes.STRING,
      bikeBiela: DataTypes.STRING,
      bikeFrontSuspension: DataTypes.STRING,
      bikeBackSuspension: DataTypes.STRING,
      bikeSeat: DataTypes.STRING,
      bikeHandlebar: DataTypes.STRING,
      bikePedal: DataTypes.STRING,
      bikeState: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Bikes',
    },
  );
  return Bikes;
};