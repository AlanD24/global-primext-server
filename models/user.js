const { sequelize } = require('../database/config');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  paternal_surname: {
    type: DataTypes.STRING(35),
    allowNull: false
  },
  maternal_surname: {
    type: DataTypes.STRING(35),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(10),
    allowNull: false
  }
}, {
  tableName: 'users',  // Table name
  timestamps: false     // Add columns `createdAt` and `updatedAt`
});

module.exports = User;