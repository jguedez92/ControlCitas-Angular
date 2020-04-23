const router = require ('express').Router();
const NewsController = require('../controllers/newsController');

router.get('/',NewsController.getAll);
router.get('/enabled', NewsController.getEnabled);
router.post('/register',NewsController.register);
router.post('/changeStatus', NewsController.changeStatus);

module.exports=router;