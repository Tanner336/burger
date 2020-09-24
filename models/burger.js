const orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cb) {
    orm.insertOne(function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne(condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
