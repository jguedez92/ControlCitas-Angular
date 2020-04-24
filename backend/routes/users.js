const router = require ('express').Router();
const UserController = require('../controllers/userController');

router.get('/',UserController.getAll);
router.post('/register',UserController.register);
router.post('/getOne',UserController.getOne);
router.post('/login',UserController.login);
router.post('/changePassword',UserController.changePassword);
router.post('/changePhone',UserController.changePhone);
router.post('/changeEmail',UserController.changeEmail);

module.exports=router;