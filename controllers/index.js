const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', loginRoutes);
router.use('/api', apiRoutes);
router.use('/homepage', homeRoutes);

module.exports = router;