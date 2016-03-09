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

let makeRequestHeader = (request, headers) => {
    for(let key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
};

let makePostData = (postData) => {
    if(postData) {
        switch(typeof postData) {
            case 'string' :
                return postData;
                break;
            case 'object' :
                return JSON.stringify(postData);
                break;
        }
    }
};

export default (options) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        let method = options.httpMethod ? options.httpMethod : 'GET';

        //synchronous request types are deprecated
        request.open(method, makeURL(options.url, options.params), true);

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

            //default json headers
            if(!('content-type') in options.headers) {
                request.setRequestHeader('Content-Type', 'application/json');
            }

            if(!('Accept') in options.headers) {
                request.setRequestHeader('Accept', 'application/json');
            }

            makeRequestHeader(request, options.headers);
        }

        request.send(makePostData(options.postData));
    });
};
