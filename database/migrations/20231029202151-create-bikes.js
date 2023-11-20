'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bikeSerie: {
        type: Sequelize.STRING,
      },
      bikeType: {
        type: Sequelize.STRING,
      },
      bikeBrand: {
        type: Sequelize.STRING,
      },
      bikeModel: {
        type: Sequelize.STRING,
      },
      bikeDate: {
        type: Sequelize.DATE,
      },
      bikeSize: {
        type: Sequelize.STRING,
      },
      bikeColor: {
        type: Sequelize.STRING,
      },
      bikeMaterial: {
        type: Sequelize.STRING,
      },
      bikeBrakeBrand: {
        type: Sequelize.STRING,
      },
      bikeBrake: {
        type: Sequelize.STRING,
      },
      bikeRing: {
        type: Sequelize.STRING,
      },
      bikeTire: {
        type: Sequelize.STRING,
      },
      bikeTransmission: {
        type: Sequelize.STRING,
      },
      bikeDesviador: {
        type: Sequelize.STRING,
      },
      bikeBiela: {
        type: Sequelize.STRING,
      },
      bikeFrontSuspension: {
        type: Sequelize.STRING,
      },
      bikeBackSuspension: {
        type: Sequelize.STRING,
      },
      bikeSeat: {
        type: Sequelize.STRING,
      },
      bikeHandlebar: {
        type: Sequelize.STRING,
      },
      bikePedal: {
        type: Sequelize.STRING,
      },
      bikeState: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bikes');
  }
};