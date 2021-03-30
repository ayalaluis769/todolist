var express = require('express')
var router = express.Router();

var todo_controller = require('../controller/todolist')

router.get('/test',todo_controller.test);

router.get('/',todo_controller.todo_details_all);

router.get('/:id',todo_controller.todo_details_by_id);

router.post('/create',todo_controller.todo_create);

router.put('/update/:id',todo_controller.todo_details_update_by_id);

module.exports = router;