const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// can be used to define a GET API.   URI -> CB function.
router.get("/transactions/all", (request, response) => {
  database.connection.query("select * from transactions", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

// can be used to define a GET API.   URI -> CB function.
router.get("/transactions/agg", (request, response) => {
    database.connection.query("select security_type, security_name, sum(transaction_units * transaction_price) as total_amt from transactions, security where transactions.security_id = security.id group by security_type, security_name", (errors, results) => {  
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    });
  });

// defines an API which takes id in the request and return the record in response
router.get("/transactions/id", (request, response) => {
  database.connection.query(
    `select * from transactions where id = ${request.query.id}`,
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
router.post("/transactions/add", (request, response) => {
  database.connection.query(
    `insert into transactions (timestamp, user_id, security_id, transaction_type, transaction_units, transaction_price) values ('${request.body.timestamp}','${request.body.user_id}','${request.body.security_id}','${request.body.transaction_type}','${request.body.transaction_units}','${request.body.transaction_price}')`,
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
router.delete("/transactions/delete", (request, response) => {
  database.connection.query(
    `delete from transactions where id = '${request.query.id}'`,
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
