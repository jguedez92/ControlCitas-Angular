const router = require('express').Router();
const appointmentsController = require ('../controllers/appointmentsController');

router.get('/',appointmentsController.getAll);
router.post('/getOne',appointmentsController.getOne);
router.post('/register',appointmentsController.register);
router.post('/update',appointmentsController.update);

module.exports = router;
