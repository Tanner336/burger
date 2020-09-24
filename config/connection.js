  // Set up MySQL connection.
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "burgers_db"
  });

  // Make connection.


  module.exports = connection;
