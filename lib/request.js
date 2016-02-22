'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeParams = function makeParams(obj) {
    return Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
};

var makeRequest = function makeRequest(url, params, method) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var pURL = url + '?' + makeParams(params);

        request.open(method, pURL, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                return resolve(request.responseText);
            } else {
                return reject('We reached our target server, but it returned an error: ', request);
            }
        };

        request.onerror = function () {
            return reject('there was a connection error of some sort');
        };

        request.setRequestHeader('Api-User-Agent', 'this is a test');
        request.send();
    });
};

exports.default = {
    get: function get(url, params) {
        return makeRequest(url, params, 'GET');
    }
};