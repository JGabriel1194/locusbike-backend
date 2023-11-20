'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Images', [
      {
        userId: null,
        bikeId: 1,
        imageType: 'example imageType here with string type',
        imageUrl: 'example imageUrl here with string type',
      },
      {
        userId: null,
        bikeId: 1,
        imageType: 'example imageType here with string type',
        imageUrl: 'example imageUrl here with string type',
      },
      {
        userId: null,
        bikeId: 1,
        imageType: 'example imageType here with string type',
        imageUrl: 'example imageUrl here with string type',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
