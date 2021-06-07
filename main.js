const security = require("./security");
const transactions = require("./transactions");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(security.router);
app.use(transactions.router);

app.listen(3000);
