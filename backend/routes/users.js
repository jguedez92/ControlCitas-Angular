const router = require ('express').Router();
const UserController = require('../controllers/userController');

router.post('/register',UserController.register);
router.get('/',UserController.getAll);
router.post('/login',UserController.login);
router.post('/changePassword',UserController.changePassword);
router.post('/changePhone',UserController.changePhone);
router.post('/changeEmail',UserController.changeEmail);

module.exports=router;