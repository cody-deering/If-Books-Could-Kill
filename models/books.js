const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Book extends Model {}

Book.init({
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
   title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  genre: {
    type: DataTypes.STRING,
  },
  average_rating: {
    type: DataTypes.DECIMAL,
  },
  ratings_count: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
}, 
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Book', 
});

module.exports = Book;
