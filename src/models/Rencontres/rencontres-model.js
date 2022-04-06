
const { DataTypes } = require('sequelize');
const {sequelize} = require('../db')

exports.Personnes = sequelize.define('RENCONTRES', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4
  },
  user : {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue : 0
  },
  commentaire : {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
    freezeTableName:true
});

