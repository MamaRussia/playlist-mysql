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
  // queryAllSongs();
  // queryRapSongs();
  // queryRockSongs();
  createSong();
  // queryAllSongs();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, result) {
    for (let i = 0; i < result.length; i++) {
      console.log(
        result[i].id +
          " | " +
          result[i].title +
          " | " +
          result[i].artist +
          " | " +
          result[i].genre
      );
    }
    console.log("---------------------------------------");
    connection.end();
  });
}

function queryRapSongs() {
  let query = connection.query(
    "SELECT * FROM songs WHERE genre=?",
    ["Rap"],
    function(err, result) {
      for (let i = 0; i < result.length; i++) {
        console.log(
          result[i].id +
            " | " +
            result[i].title +
            " | " +
            result[i].artist +
            " | " +
            result[i].genre
        );
      }
      console.log(query.sql);
    }
  );
}

function queryRockSongs() {
  let query = connection.query(
    "SELECT * FROM songs WHERE genre=?",
    ["Rock"],
    function(err, result) {
      for (let i = 0; i < result.length; i++) {
        console.log(
          result[i].id +
            " | " +
            result[i].title +
            " | " +
            result[i].artist +
            " | " +
            result[i].genre
        );
      }
      console.log(query.sql);
    }
  );
}

function createSong() {
  console.log("Inserting a new song... \n");
  let query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Sexual Healing",
      artist: "Marvin Gaye",
      genre: "R&B"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      updateSong();
    }
  );
  console.log(query.sql);
}

function updateSong() {
  console.log("Updating 1 song by Aerosmith... \n");
  let query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        artist: "Aerosmith"
      },
      {
        genre: "Acoustic"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      deleteSong();
      // queryAllSongs();
    }
  );
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all rap songs. Instruments Only! ...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      genre: "Rap"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      queryAllSongs();
    }
  );
}
