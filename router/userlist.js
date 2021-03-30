var express = require('express')
var router = express.Router();

var user_controller = require('../controller/userlist')

router.get('/test',user_controller.test);

router.get('/',user_controller.user_details_all);

router.get('/:id',user_controller.user_details_by_id);

router.post('/create',user_controller.user_create);

router.put('/update/:id',user_controller.user_details_update_by_id);

module.exports = router;