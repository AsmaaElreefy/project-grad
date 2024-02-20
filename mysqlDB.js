var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port:"3306",
  password:"",
  database:'quran',

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});