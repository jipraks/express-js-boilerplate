const models = require("./init-models");
const db = require("@components/maindb");

module.exports = models(db);