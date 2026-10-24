const router = require('express').Router();
const ctrl = require('../controllers/directorController');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);
router.get('/:id/movies', ctrl.getMovies);

module.exports = router;
