'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(
     'Modelos',
     [
       {
         modelName: 'Montaña MTB',
         modelDetail:
           'Las bicicletas de montaña (también conocidas como MTB) están diseñadas para «fuera de ruta» por lo que son bastante resistentes. Están equipadas con llantas anchas con dibujos marcados para mejorar el agarre en terrenos sueltos. Regularmente usan manubrios rectos o de doble altura.',
         createdAt: new Date(),
       },
       {
         modelName: 'Ruta',
         modelDetail:
           'Las bicicletas de ruta (también conocidas como de carretera) están diseñadas para andar en el pavimento. Son muy ligeras y tienen llantas delgadas con poco dibujo para reducir la resistencia al rodar. Usualmente tienen manubrios curvos o de mariposa.',
         createdAt: new Date(),
       },
       {
         modelName: 'Hibrida',
         modelDetail:
           'Las bicicletas híbridas son una mezcla entre las bicicletas de montaña y las de ruta. Tienen llantas más anchas que las de ruta, pero más delgadas que las de montaña. Usualmente tienen manubrios rectos o de doble altura.',
         createdAt: new Date(),
       },
       {
         modelName: 'Urbana',
         modelDetail:
           'Las bicicletas urbanas están diseñadas para andar en la ciudad. Son muy ligeras y tienen llantas delgadas con poco dibujo para reducir la resistencia al rodar. Usualmente tienen manubrios curvos o de mariposa.',
         createdAt: new Date(),
       },
       {
         modelName: 'Cruisers',
         modelDetail:
           'Este tipo de bicicletas están diseñadas para trayectos cortos y sobre pavimento preferencialmente.',
         createdAt: new Date(),
       },
       {
         modelName: 'Touring',
         modelDetail:
           'Las bicicletas de touring están diseñadas para viajes largos. Son muy resistentes y tienen llantas anchas con dibujos marcados para mejorar el agarre en terrenos sueltos. Usualmente tienen manubrios rectos o de doble altura.',
         createdAt: new Date(),
       },
       {
         modelName: 'Bmx',
         modelDetail:
           'Las bicicletas BMX están diseñadas para hacer acrobacias y saltos. Son muy resistentes y tienen llantas anchas con dibujos marcados para mejorar el agarre en terrenos sueltos. Usualmente tienen manubrios rectos o de doble altura.',
         createdAt: new Date(),
       },
     ],
     {},
   );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
