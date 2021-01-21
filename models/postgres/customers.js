'use strict';
const { Model } = require('sequelize');
const moment = require('moment')
const crypto = require('crypto')

module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customers.init({
    id: { 
      type: DataTypes.STRING(30),
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(255),
        unique: true
    },
    address: {
        type: DataTypes.STRING(255),
    },
    province: {
        type: DataTypes.STRING(100),
    },
    city: {
        type: DataTypes.STRING(100),
    },
    district: {
        type: DataTypes.STRING(100),
    },
    sub_district: {
        type: DataTypes.STRING(100),
    },
    zip_code: {
        type: DataTypes.INTEGER
    },
    is_verified: {
        type: DataTypes.INTEGER
    },
    created_at: {
        type: DataTypes.INTEGER,
    },
    updated_at: {
        type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
    modelName: 'customers',
    underscored: true,
    timestamps: false,
    
    hooks: {
      beforeCreate(customer, options){
        customer.created_at = customer.updated_at = moment().unix()
        customer.is_verified = 0
        customer.id = crypto.randomBytes(15).toString('hex')
      },
      beforeUpdate(customer, options) {
        customer.updated_at = moment().unix()
      }
    }
  });
  return Customers;
};