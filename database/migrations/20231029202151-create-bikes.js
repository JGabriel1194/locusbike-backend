'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bikeSerie: {
        type: Sequelize.STRING
      },
      bikeBrand: {
        type: Sequelize.STRING
      },
      bikeModel: {
        type: Sequelize.STRING
      },
      bikeSize: {
        type: Sequelize.STRING
      },
      bileColor: {
        type: Sequelize.STRING
      },
      bikeYear: {
        type: Sequelize.DATE
      },
      bikeMaterial: {
        type: Sequelize.STRING
      },
      bikeBrake: {
        type: Sequelize.STRING
      },
      bikeBrakeBrand: {
        type: Sequelize.STRING
      },
      bikeHandlebar: {
        type: Sequelize.STRING
      },
      bikePotency: {
        type: Sequelize.STRING
      },
      bikeTransmission: {
        type: Sequelize.STRING
      },
      bikePedal: {
        type: Sequelize.STRING
      },
      bikeSeat: {
        type: Sequelize.STRING
      },
      bikeRing: {
        type: Sequelize.STRING
      },
      bikeTire: {
        type: Sequelize.STRING
      },
      bikeState: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bikes');
  }
};