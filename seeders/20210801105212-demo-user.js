'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        userName: 'user 1',
        name: 'user 1',
        email: 'user1@test.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        userName: 'user 2',
        name: 'user 2',
        email: 'user2@test.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        userName: 'user 3',
        name: 'user 3',
        email: 'user3@test.com',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('Post', [
      {
        title: 'title 1',
        message: 'message 1',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'title 2',
        message: 'message 2',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'title 3',
        message: 'message 2',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
