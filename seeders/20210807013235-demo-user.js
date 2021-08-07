'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
      {
        userName:'John2021',
        name: 'John Doe',
        email: 'john@email.com',
        uuid:'35cf1b89-56d3-433c-9f43-4198eb3725de',
        role: 'admin',
        createdAt: '2020-11-01T16:30:07.592Z',
        updatedAt: '2020-11-01T16:30:07.592Z',
      },
      {
        userName:'Jane2021',
        name: 'Jane Doe',
        email: 'jane@email.com',
        uuid:'e7cf1b89-56d3-433c-9f43-41edeb3725de',
        role: 'admin',
        createdAt: '2020-11-01T16:30:07.592Z',
        updatedAt: '2020-11-01T16:30:07.592Z',
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
