const { body, param, query, validationResult, header } = require("express-validator");
const response = require('../response');

exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push(err.msg));

    return response.sender(res, 400, '400', 'Permintaan Tidak Sesuai', 'Bad Request', extractedErrors);

}

exports.getRoute = () => {
    return [
        query("start").exists().withMessage("start [query] is required").notEmpty().withMessage("start [query] cannot be empty").isLatLong().withMessage("username [query] must be a valid latitude and longitude"),
        query("end").exists().withMessage("end [query] is required").notEmpty().withMessage("end [query] cannot be empty".isLatLong).isLatLong().withMessage("password [query] must be a valid latitude and longitude"),
    ];
}