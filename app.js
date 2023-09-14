const express = require("express");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const dbpath = path.join(__dirname, covid19India.db);
let db = null;

const initializeDBserver = async () => {
  try {
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("server is running is succesfully");
    });
  } catch (e) {
    console.log(`bd erroe ${e.mesaage}`);
    process.exit(1);
  }
};
initializeDBserver();
