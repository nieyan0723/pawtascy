'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_image = sequelize.define('post_image', {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     field: 'id',
     unique: true
   },
   post_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     validate: {
       notEmpty: true,
     },
     reference: {
      model: 'post',
      key: 'id',
      as: 'post_id'
    }
   },
   image_link: {
     type: DataTypes.STRING,
     allowNull: true,
   },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,  // 虚拟删除。启用该配置后，数据不会真实删除，而是添加一个deletedAt属性
    createdAt: 'created_at',
    updatedAt: 'updated_at',    
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  post_image.associate = function(models) {
    models.post_image.belongsTo(models.post, {foreignKey: 'post_id', targetKey: 'id'})
  };
  return post_image;
};