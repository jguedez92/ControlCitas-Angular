const router = require('express').Router();
const appointmentsController = require ('../controllers/appointmentsController');

router.get('/',appointmentsController.getAll);
router.post('/register',appointmentsController.register);
router.post('/getUserApp',appointmentsController.getUserApp);
router.post('/update',appointmentsController.update);

module.exports = router;
