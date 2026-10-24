const router = require('express').Router();
const ctrl = require('../controllers/statsController');

router.get('/', ctrl.getStats);

module.exports = router;
