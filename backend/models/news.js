'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  News.associate = function(models) {
    // associations can be defined here
    News.belongsTo(models.User);
  };
  return News;
};