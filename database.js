const mysql = require("mysql");

var properties = {
  host: "fintechsg08.mysql.database.azure.com",
  port: 3306,
  user: "fintechlab@fintechsg08",
  password: "FinTechSG2021",
  database: "sgsu4b9g1",
};

var connection = mysql.createConnection(properties);

connection.connect((errors) => {
  if (errors) {
    console.log("Couldn't connect to the MySQL Server. Error: " + errors);
  } else {
    console.log("Connected to MySQL successfully!");
  }
});   

setInterval(() => {
  connection.query("select 1");
}, 60 * 1000);

module.exports = { connection };
