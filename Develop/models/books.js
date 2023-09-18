module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      description: DataTypes.TEXT,
      genres: DataTypes.STRING,
      average_rating: DataTypes.DECIMAL,
      ratings_count: DataTypes.INTEGER,
    });
  
    return Book;
};  