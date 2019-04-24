"use strict";
// console.log("inside knex.js");
const config = require("../knexfile.js");
module.exports = require("knex")(config);
