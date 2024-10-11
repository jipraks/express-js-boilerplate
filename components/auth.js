const response = require("@components/response");
const NodeCache = require('node-cache');
const Cache = new NodeCache({ stdTTL: 15, checkperiod: 600 });

exports.checkToken = (requiredRoles = []) => async (req, res, next) => {

    const authorization = req.headers?.authorization || null;

    if (!authorization) {
        return response.sender(res, 401, '401', 'Token tidak valid', 'Invalid token');
    }

    let requestUserId = null;
    let userData = null;

    if (Cache.has(`userData:${requestUserId}`)) {
        userData = Cache.get(`userData:${requestUserId}`);
        Cache.set(`userData:${requestUserId}`, userData, 15);
    } else {
        userData = await users.findOne({ where: { user_id: requestUserId } });
        Cache.set(`userData:${requestUserId}`, userData, 15);
    }

    next();

}