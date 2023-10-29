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
      brandId: {
        type: Sequelize.INTEGER
      },
      modelId: {
        type: Sequelize.INTEGER
      },
      brakeId: {
        type: Sequelize.INTEGER
      },
      brakebrandId: {
        type: Sequelize.INTEGER
      },
      handlebarId: {
        type: Sequelize.INTEGER
      },
      potencyId: {
        type: Sequelize.INTEGER
      },
      transmisionId: {
        type: Sequelize.INTEGER
      },
      pedalId: {
        type: Sequelize.INTEGER
      },
      seatId: {
        type: Sequelize.INTEGER
      },
      ringId: {
        type: Sequelize.INTEGER
      },
      tireId: {
        type: Sequelize.INTEGER
      },
      stateId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
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