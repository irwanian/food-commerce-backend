'use strict';
const { Model } = require('sequelize');
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categories.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    parent_id: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.INTEGER
  },
    updated_at: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    modelName: 'categories',
    underscored: true,
    timestamps: false,
  });

  Categories.beforeCreate(category => {
    category.created_at = category.updated_at = moment().unix()
  })

  Categories.beforeUpdate(category => {
    category.updated_at = moment().unix()
  })
  
  return Categories;
};