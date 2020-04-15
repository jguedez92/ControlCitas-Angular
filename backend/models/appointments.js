'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define('Appointments', {
    UserId: DataTypes.INTEGER,
    DateId: DataTypes.INTEGER,
    hours: DataTypes.STRING,
    status: DataTypes.STRING,
    observations: DataTypes.TEXT
  }, {});
  Appointments.associate = function(models) {
    // associations can be defined here
    Appointments.belongsTo(models.User);
    Appointments.belongsTo(models.Date);
  };
  return Appointments;
};