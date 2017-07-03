'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Todos', [
        {
        title: 'John Doe',
        complete: false,
        UserId:123,
        createdAt:'2017-05-01 12:01:50.009+05:30',
        updatedAt:'2017-05-01 12:01:50.009+05:30'
      }, {
        title: 'Rohit',
        complete: false,
        UserId:123,
        createdAt:'2017-05-01 12:01:50.009+05:30',
        updatedAt:'2017-05-01 12:01:50.009+05:30'
      }, {
        title: 'Vikram',
        complete: false,
        UserId:565,
        createdAt:'2017-05-01 12:01:50.009+05:30',
        updatedAt:'2017-05-01 12:01:50.009+05:30'
      }, {
        title: 'Anup',
        complete: false,
        UserId:1230,
        createdAt:'2017-05-01 12:01:50.009+05:30',
        updatedAt:'2017-05-01 12:01:50.009+05:30'
      }, {
        title: 'Sarita',
        complete: false,
        UserId:1236,
        createdAt:'2017-05-01 12:01:50.009+05:30',
        updatedAt:'2017-05-01 12:01:50.009+05:30'
      }
      ], {});
    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Todos', null, {});
  
  }
};
