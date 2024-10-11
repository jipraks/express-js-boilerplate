const response = require("@components/response");
const express = require("express");
const router = express.Router();
const { body, param, query, validationResult } = require("express-validator");
const validator = require("@components/validators/route");
const controller = require("@controllers/route");
const Auth = require('@components/auth');

const index = function (req, res, next) {
    return response.sender(res, 404, '404', 'Data tidak ditemukan', 'Data not found');
};

router.route("/").post(validator.getRoute(), Auth.checkToken(), validator.validate, (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return response.sender(res, 400, '400', 'Permintaan tidak valid', 'Invalid request', errors.array());
    } else {

        const execRoute = controller.getRoute(req, res);

    }

});

router.all("*", index);

module.exports = router;