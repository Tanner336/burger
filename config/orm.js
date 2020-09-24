const connection = require("../config/connection.js");

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

let orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      
      cb(result);
    });
  },

  insertOne: (burger_name, cb) => {
    connection.query(`INSERT INTO burgers SET ?`, {
      burger_name: burger_name,
      devoured: false
    }, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: (id, cb) => {
    connection.query(`UPDATE burgers SET ? WHERE ?`, [{devoured: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
}

module.exports = orm;