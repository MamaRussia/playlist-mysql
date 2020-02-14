DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
id INTEGER(10) AUTO_INCREMENT NOT NULL,
title VARCHAR(75),
artist VARCHAR(45),
genre VARCHAR(45),
PRIMARY KEY(id)
);

INSERT INTO songs(title, artist, genre) VALUES ("Help", "The Beatles", "Pop");
INSERT INTO songs(title, artist, genre) VALUES ("Helter Skelter", "The Beatles", "Pop");
INSERT INTO songs(title, artist, genre) VALUES ("Cry Me a River", "Justin Timberlake", "Pop");
INSERT INTO songs(title, artist, genre) VALUES ("Crazy", "Aerosmith", "Rock");
INSERT INTO songs(title, artist, genre) VALUES ("Candy Shop", "50 Cent", "Rap");
INSERT INTO songs(title, artist, genre) VALUES ("Right Thurr", "Chingy", "Rap");
INSERT INTO songs(title, artist, genre) VALUES ("Hot In Herre", "Nelly", "Rap");
