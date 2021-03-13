const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'João dodo',
          email: 'testedecontato74@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Joe',
          email: 'testedecontato73@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async () => { },
};
