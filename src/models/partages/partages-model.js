const { DataTypes } = require('sequelize');
const {sequelize} = require('../db')
const {Rencontres} = require('../Rencontres/rencontres-model')

exports.Partages = sequelize.define('PARTAGES', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4
  },
  rencontreId : {
    type: DataTypes.UUID,
    allowNull: false
  },
  eamilUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  infoPersonne: {
    type: DataTypes.JSON,
    allowNull: false
  },
  remarques: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    freezeTableName:true
});