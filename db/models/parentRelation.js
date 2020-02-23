'use strict';


module.exports = (Sequelize, sequelize) => {
  var ParentRelation = sequelize.define('ParentRelation', {
    idRelation: Sequelize.INTEGER,
    typeRelation: Sequelize.STRING
  });

  

  return ParentRelation;
};