const express = require('express');
const response = require('@components/response');
const router = express.Router();

const index = function (req, res, next) {

    response.sender(res, 404, '404', 'Data tidak ditemukan', 'Data not found');

}

router.use('/v1', function (req, res, next) { next(); }, require('./v1'));

router.all('/', index);
router.all('*', index);

module.exports = router;