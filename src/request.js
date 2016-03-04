let makeParams = (obj) => {
    return Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
};

let makeURL = (url, params) => {
    if(params) {
        return url + '?' + makeParams(params);
    } else {
        return url;
    }
};

let makeRequestHeader = (request, headersArr) => {
    return headersArr.map((header) => {
        for(let key in header) {
            return request.setRequestHeader(key, header[key]);
        }
    });
};

let makeRequest = (options) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        //synchronous request types are deprecated
        request.open(options.method, makeURL(options.url, options.params), true);

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

        if(options.headers) {
            makeRequestHeader(request, options.headers);
        }

        request.send();
    });
};

export default {
    get(options) {
        options.method = 'GET';
        return makeRequest(options);
    }
};

