"use strict";module.exports = {

  up: async (queryInterface) => queryInterface.renameColumn('users', 'nome', 'name'),

  down: async (queryInterface) => queryInterface.renameColumn('Users', 'name', 'nome'),
};
