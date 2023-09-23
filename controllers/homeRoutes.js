const router = require('express').Router();
const Book = require('../models/books');
//const Shoppingcart = require('../models/shoppingcart');
//const Shoppingcart_book = require('../models/shoppingcart_book');
const User = require('../models/user')
const Auth = require('../utils/auth');

router.get('/homepage', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const booksData = await Book.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
  
      // Serialize data so the template can read it
      const books = booksData.map((book) => book.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        books, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/homepage");
    } else {
      res.render('login');
    }
  });
  
router.get('/book/:id', async (req, res) => {
  try {
    const booksData = await Book.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });
    const book = booksData.get({ plain: true });
    res.render('book', {
      ...book,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/homepage', Auth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });
    const user = userData.get({ plain: true });
    res.render('homepage', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;