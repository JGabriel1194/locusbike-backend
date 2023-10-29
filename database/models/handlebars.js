'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Handlebars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Handlebars.init({
    handlebarName: DataTypes.STRING,
    handlebarImage: DataTypes.STRING,
    handlebarDetail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Handlebars',
  });
  return Handlebars;
};