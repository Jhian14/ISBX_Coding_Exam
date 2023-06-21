const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;

db.users = require("./users")(mongoose)
db.orders = require("./orders")(mongoose)

module.exports = db