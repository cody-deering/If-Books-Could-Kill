const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shoppingcart_Book extends Model {}

Shoppingcart_Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    shoppingcart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Shoppingcart_Book',
  }
);

module.exports = Shoppingcart_Book;