const { DataTypes } = require('sequelize');
const {sequelize} = require('./db')

exports.User = sequelize.define('USER', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roles: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    freezeTableName:true
});

