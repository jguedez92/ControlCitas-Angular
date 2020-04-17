const router = require ('express').Router();
const UserController = require('../controllers/userController');

router.post('/register',UserController.register);
router.get('/getUsers',UserController.getAll);
router.post('/login',UserController.login);

module.exports=router;