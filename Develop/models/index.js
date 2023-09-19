const Shoppingcart = require('./shoppingcart');
const User = require('./user');
const Book = require('./book');

User.hasMany(Shoppingcart, {
    foreignKey: 'user_id',
});

User.BelongsToMany(Book, {
    foreignKey: 'user_id',
});

Book.belongTo(User, {
    foreignKey: 'user_id'
});

Book.belongToMany(Shoppingcart, {
    through: Shoopingcart_Book,
    foreignKey: 'book_id',
});

Shoppingcart.BelongsToMany(Book, {
    through: Shoopingcart_Book,
    foreignKey: 'user_id',
});

Shoppingcart.belongTo(User, {
    foreignKey: 'user_id'
});