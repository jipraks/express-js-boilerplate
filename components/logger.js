const Axios = require('axios');
exports.log = async (level, job, log) => {

    let url = `${process.env.OPENOBSERVE_URL}/api/${process.env.OPENOBSERVE_ORGANIZATION}/${process.env.OPENOBSERVE_STREAM}/_json`;

    const data = [{ app: process.env.SERVICE_IDENTIFIER, environment: process.env.ENVIRONMENT, level: level.toUpperCase(), job: job.toUpperCase(), log }];

    const base64auth = Buffer.from(`${process.env.OPENOBSERVE_USERNAME}:${process.env.OPENOBSERVE_PASSWORD}`).toString('base64');

    const config = {
        headers: {
            'Authorization': `Basic ${base64auth}`
        }
    };

    await Axios.post(url, data, config);

}