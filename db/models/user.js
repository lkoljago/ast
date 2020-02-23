'use strict';


module.exports = (Sequelize, sequelize) => {
  var User = sequelize.define('User', {
    UserLogin: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    nameUser: Sequelize.STRING,
    
  });

  

  return User;
};