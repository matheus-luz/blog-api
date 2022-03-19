module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('BlogPosts');
  },
};