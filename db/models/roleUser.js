'use strict';
module.exports = (sequelize, DataTypes) => {
  var RoleInfo = sequelize.define('RoleInfo', {
    
  });

  RoleInfo.associate = function(models) {
    models.RoleInfo.hasMany(models.User);
  };

  return RoleInfo;
};