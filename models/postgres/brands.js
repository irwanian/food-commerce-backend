'use strict';
const { Model } = require('sequelize');
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Brands.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    logo: DataTypes.STRING(500),
    parent_id: DataTypes.INTEGER,
    created_at: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'brands',
    underscored: true,
    timestamps: false,
    
    hooks: {
      beforeCreate(brand, options){
        brand.created_at = moment().unix()
        brand.updated_at = moment().unix()
      },
      beforeUpdate(brand, options) {
        brand.updated_at = moment().unix()
      }
    }
  });
  return Brands;
};