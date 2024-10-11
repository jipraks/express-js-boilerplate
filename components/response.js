"use strict";

exports.sender = function (res, statusCode = 200, responseCode = '200', responseMessageId = null, responseMessageEn = null, responseData = {}) {

    const reqAcceptLanguage = res?.req?.headers['accept-language'] || 'id';

    let msgId = responseMessageId;
    let msgEn = responseMessageEn;

    if (!msgId) {

        if (statusCode === 200) {
            msgId = 'Berhasil mendapatkan data'
        }

        if (statusCode === 400) {
            msgId = 'Permintaan Tidak Sesuai'
        }

        if (statusCode === 404) {
            msgId = 'Data tidak ditemukan'
        }

        if (statusCode === 500) {
            msgId = 'Oops! Terjadi kesalahan. Silahkan coba lagi atau hubungi customer support'
        }

    }

    if (!msgEn) {

        if (statusCode === 200) {
            msgEn = 'Success fetching data'
        }

        if (statusCode === 400) {
            msgEn = 'Bad Request'
        }

        if (statusCode === 404) {
            msgEn = 'Data not found'
        }

        if (statusCode === 500) {
            msgId = 'Oops! Something went wrong. Please try again or contact customer support'
        }

    }

    var data = {
        responseCode,
        responseMessage: reqAcceptLanguage === 'id' ? msgId : msgEn,
        responseData
    };

    res.status(statusCode);
    res.json(data);
    res.end();

};