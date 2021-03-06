'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        references: {
            model: {
            tableName: 'user'
          },
          key: 'id'
        },
      },
      event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      role: {
        type: Sequelize.STRING,
        allowNull: true,
        // validate: {
        //     notEmpty: true,
        // }
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
        `ALTER TABLE user_event ADD CONSTRAINT user_event_event_id FOREIGN KEY (event_id) REFERENCES event (id);`
      )
    }).then(function() {
      return queryInterface.sequelize.query(
        `ALTER TABLE user_event ADD CONSTRAINT user_event_user_id FOREIGN KEY (user_id) REFERENCES user (id);`
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_event');
  }
};