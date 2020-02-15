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
  queryAllSongs();

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
  let query = connection.query("INSERT INTO songs SET ?", {
    title: "Sexual Healing",
    artist: "Marvin Gaye",
    genre: "R&B",
    
  }, function (err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      createSong();
      connection.end()
  })
  console.log(query.sql);

}

// function updateSong() {
//   console.log("Updating a song... \n");
//   let query = connection.query("Update songs SET title WHERE title =?, ['Sexual Healing']", {
//     title: "Let's Get It On",
//     artist: "Marvin Gaye",
//     genre: "R&B"
//   }, function (err, res) {
//       console.log(res.affectedRows + " song inserted!\n");
//       createSong();
//   })
//   console.log(query.sql);

// }


