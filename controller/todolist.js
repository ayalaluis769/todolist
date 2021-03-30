var ToDo = require("../models/todolist");

exports.test = function (req, res) {
  res.send("Greetings from Test Controller");
};

exports.todo_details_all = function (req, res) {
  ToDo.find(function (err, todo) {
    if (err) {
      return err;
    }
    res.send(todo);
  });
};

exports.todo_details_by_id = function (req, res) {
  ToDo.findById(req.params.id, function (err, todo) {
    if (err) {
      return err;
    }
    res.send(todo);
  });
};

exports.todo_create = function (req, res) {
  console.log("Req Body:" + JSON.stringify(req.body));
  var todo = new ToDo({
    title: req.body.title,
    duebydate: req.body.duebydate,
    createdon: req.body.createdon,
    status: req.body.status,
    active: req.body.active,
    username: req.body.username,
  });

  todo.save(function (err, todo) {
    if (err) {
      return err;
    }
    res.send("To Do List Created..." + todo.id);
  });
};

exports.todo_details_update_by_id = function (req, res) {
  ToDo.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, todo) {
      if (err) {
        return err;
      }
      res.send("To do list updated:" + todo);
    }
  );
};
