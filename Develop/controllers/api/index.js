const router = require('express').Router();
const userRoutes = require('./userRoutes');
const loginRoutes = require('./loginRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/users', userRoutes);
router.use('/login', loginRoutes);
router.use('/checkout', checkoutRoutes);


module.exports = router;
