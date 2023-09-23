const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).render('login', { loggedIn: req.session.loggedIn });
});

router.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('homepage');
});

router.get('/homepage', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/homepage');
    return;
  }
  res.render('homepage');
});

module.exports = router;