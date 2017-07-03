'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.renameTable('Todos', 'todos')
  },

  down: function (queryInterface, Sequelize) {
      queryInterface.renameTable('todos', 'Todos')
  }
};
