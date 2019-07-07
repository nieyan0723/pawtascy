'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chatroom', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
        notEmpty: true,
        },
        references: {
          model: {
            tableName: 'event'
          },
          key: 'id'
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        notEmpty: true,
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE chatroom ADD CONSTRAINT chatroom_event FOREIGN KEY (event_id) REFERENCES event (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('chatroom');
  }
};