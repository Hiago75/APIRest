module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.changeColumn('alunos', 'curso', {
      type: Sequelize.STRING,
      defaultValue: '',
    });
    queryInterface.changeColumn('alunos', 'turma', {
      type: Sequelize.STRING,
      defaultValue: '',
    });
  },

  down: async () => { },
};
