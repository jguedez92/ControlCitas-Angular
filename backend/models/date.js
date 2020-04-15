'use strict';
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    date: DataTypes.DATEONLY,
    status: DataTypes.STRING
  }, {});
  Date.associate = function(models) {
    // associations can be defined here
    Date.hasMany(models.Appointments);
  };
  return Date;
};