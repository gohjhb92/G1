// This file will contain the queries to the customer table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
router.get("/security/all", (request, response) => {
  database.connection.query("select * from security", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

// defines an API which takes id in the request and return the record in response
router.get("/security/id", (request, response) => {
  database.connection.query(
    `select * from security where id = ${request.query.id}`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

// a POST API to store the record received in the request
router.post("/security/add", (request, response) => {
  database.connection.query(
    `insert into security (security_type, security_name, security_price) values ('${request.body.security_type}','${request.body.security_name}','${request.body.security_price}')`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record saved successfully!");
      }
    }
  );
});

// POST + PUT = Body, GET + DELETE = Query
router.delete("/security/delete", (request, response) => {
  database.connection.query(
    `delete from security where id = '${request.query.id}'`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record deleted successfully!");
      }
    }
  );
});

module.exports = {
  router,
};
