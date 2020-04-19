const router = require('express').Router();
const DateController = require ('../controllers/dateController');

router.get('/', DateController.getAll);
router.get('/enabled', DateController.getEnabled);
router.post('/register', DateController.register);
router.post('/changeStatus', DateController.changeStatus);

module.exports = router;