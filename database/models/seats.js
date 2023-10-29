'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seats.init({
    seatName: DataTypes.STRING,
    seatImage: DataTypes.STRING,
    seatDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};