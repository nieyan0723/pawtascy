'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   user_id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    reference: {
      model: 'user',
      key: 'id',
      as: 'user_id'
    }
  },
   title: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
        notEmpty: true,
     }
   },
   is_private: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
     validate: {
       notEmpty: true,
     }
   },
  }, {
    timestamps: true,
    underscored: true,
    // paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  post.associate = function(models) {
    models.post.belongsTo(models.user, {foreignKey: 'user_id', targetKey: 'id'})
  };
  return post;
};