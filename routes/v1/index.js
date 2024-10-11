const express = require("express");
const response = require("@components/response");
const router = express.Router();

const index = function (req, res, next) {
    response.sender(res, 404, '404', 'Data tidak ditemukan', 'Data not found');
};

const Route = require('./route');
router.use("/route", Route);

router.all("*", index);

module.exports = router;