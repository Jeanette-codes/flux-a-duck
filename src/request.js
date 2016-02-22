let makeParams = (obj) => {
    return Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
};

let makeRequest = (url, params, method) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let pURL = url + '?' + makeParams(params);

        request.open(method, pURL, true);


        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                return resolve(request.responseText);
            } else {
                return reject('We reached our target server, but it returned an error: ', request);
            }
        };

        request.onerror = () => {
            return reject('there was a connection error of some sort');
        };

        request.setRequestHeader('Api-User-Agent', 'this is a test');
        request.send();
    });
};

export default {
    get(url, params) {
        return makeRequest(url, params, 'GET');
    }
};

