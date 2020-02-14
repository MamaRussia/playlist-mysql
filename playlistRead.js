let mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  user: "root",
  password: "password",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;


  console.log("connected as id: " + connection.threadId);
});

connection.query("SELECT * FROM songs", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  {
    return;
  }
