const Shoppingcart = require('./shoppingcart');
const User = require('./user');
const Book = require('./books');
const Shoppingcart_Book = require('./shoppingcart_book');

User.hasOne(Shoppingcart, {
    foreignKey: 'user_id',
});

User.belongsToMany(Book, {
    through: Shoppingcart_Book,
    foreignKey: 'user_id',
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

Book.belongsToMany(Shoppingcart, {
    through: Shoppingcart_Book,
    foreignKey: 'book_id',
});

Shoppingcart.belongsToMany(Book, {
    through: Shoppingcart_Book,
    foreignKey: 'user_id',
});

Shoppingcart.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Book, Shoppingcart_Book, Shoppingcart }