var User = require("../models/userlist");

exports.test = function (req, res) {
  res.send("Greetings from Test Controller");
};

exports.user_details_all = function (req, res) {
  User.find(function (err, user) {
    if (err) {
      return err;
    }
    res.send(user);
  });
};

exports.user_details_by_id = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return err;
    }
    res.send(user);
  });
};

exports.user_create = function (req, res) {
  console.log("Req Body:" + JSON.stringify(req.body));
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    userid: req.body.userid
  });

  user.save(function (err, user) {
    if (err) {
      return err;
    }
    res.send("User Information Created..." + user.id);
  });
};

exports.user_details_update_by_id = function (req, res) {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, user) {
      if (err) {
        return err;
      }
      res.send("User information updated:" + user);
    }
  );
};