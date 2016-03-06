'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var makeParams = function makeParams(obj) {
    return Object.keys(obj).map(function (key) {
        return key + '=' + obj[key];
    }).join('&');
};

var makeURL = function makeURL(url, params) {
    if (params) {
        return url + '?' + makeParams(params);
    } else {
        return url;
    }
};

var makeRequestHeader = function makeRequestHeader(request, headers) {
    for (var key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
};

var makeRequest = function makeRequest(options) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();

        //synchronous request types are deprecated
        request.open(options.method, makeURL(options.url, options.params), true);

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

        if (options.headers) {
            makeRequestHeader(request, options.headers);
        }

        request.send(options.postData);
    });
};

exports.default = {
    get: function get(options) {
        options.method = 'GET';
        return makeRequest(options);
    },
    post: function post(options) {
        options.method = 'POST';
        return makeRequest(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLGFBQWEsU0FBYixVQUFhLENBQUMsR0FBRCxFQUFTO0FBQ3RCLFdBQU8sT0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixHQUFqQixDQUFxQixVQUFVLEdBQVYsRUFBZTtBQUN2QyxlQUFPLE1BQU0sR0FBTixHQUFZLElBQUksR0FBSixDQUFaLENBRGdDO0tBQWYsQ0FBckIsQ0FFSixJQUZJLENBRUMsR0FGRCxDQUFQLENBRHNCO0NBQVQ7O0FBTWpCLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBQyxHQUFELEVBQU0sTUFBTixFQUFpQjtBQUMzQixRQUFHLE1BQUgsRUFBVztBQUNQLGVBQU8sTUFBTSxHQUFOLEdBQVksV0FBVyxNQUFYLENBQVosQ0FEQTtLQUFYLE1BRU87QUFDSCxlQUFPLEdBQVAsQ0FERztLQUZQO0NBRFU7O0FBUWQsSUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBc0I7QUFDMUMsU0FBSSxJQUFJLEdBQUosSUFBVyxPQUFmLEVBQXdCO0FBQ3BCLGdCQUFRLGdCQUFSLENBQXlCLEdBQXpCLEVBQThCLFFBQVEsR0FBUixDQUE5QixFQURvQjtLQUF4QjtDQURvQjs7QUFNeEIsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLE9BQUQsRUFBYTtBQUMzQixXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDcEMsWUFBSSxVQUFVLElBQUksY0FBSixFQUFWOzs7QUFEZ0MsZUFJcEMsQ0FBUSxJQUFSLENBQWEsUUFBUSxNQUFSLEVBQWdCLFFBQVEsUUFBUSxHQUFSLEVBQWEsUUFBUSxNQUFSLENBQWxELEVBQW1FLElBQW5FLEVBSm9DOztBQU1wQyxnQkFBUSxNQUFSLEdBQWlCLFlBQU07QUFDbkIsZ0JBQUksUUFBUSxNQUFSLElBQWtCLEdBQWxCLElBQXlCLFFBQVEsTUFBUixHQUFpQixHQUFqQixFQUFzQjtBQUMvQyx1QkFBTyxRQUFRLFFBQVEsWUFBUixDQUFmLENBRCtDO2FBQW5ELE1BRU87QUFDSCx1QkFBTyxPQUFPLDBEQUFQLEVBQW1FLE9BQW5FLENBQVAsQ0FERzthQUZQO1NBRGEsQ0FObUI7O0FBY3BDLGdCQUFRLE9BQVIsR0FBa0IsWUFBTTtBQUNwQixtQkFBTyxPQUFPLDJDQUFQLENBQVAsQ0FEb0I7U0FBTixDQWRrQjs7QUFrQnBDLFlBQUcsUUFBUSxPQUFSLEVBQWlCO0FBQ2hCLDhCQUFrQixPQUFsQixFQUEyQixRQUFRLE9BQVIsQ0FBM0IsQ0FEZ0I7U0FBcEI7O0FBSUEsZ0JBQVEsSUFBUixDQUFhLFFBQVEsUUFBUixDQUFiLENBdEJvQztLQUFyQixDQUFuQixDQUQyQjtDQUFiOztrQkEyQkg7QUFDWCxzQkFBSSxTQUFTO0FBQ1QsZ0JBQVEsTUFBUixHQUFpQixLQUFqQixDQURTO0FBRVQsZUFBTyxZQUFZLE9BQVosQ0FBUCxDQUZTO0tBREY7QUFNWCx3QkFBSyxTQUFTO0FBQ1YsZ0JBQVEsTUFBUixHQUFpQixNQUFqQixDQURVO0FBRVYsZUFBTyxZQUFZLE9BQVosQ0FBUCxDQUZVO0tBTkgiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBtYWtlUGFyYW1zID0gKG9iaikgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBvYmpba2V5XTtcbiAgICB9KS5qb2luKCcmJyk7XG59O1xuXG5sZXQgbWFrZVVSTCA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgIGlmKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdXJsICsgJz8nICsgbWFrZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufTtcblxubGV0IG1ha2VSZXF1ZXN0SGVhZGVyID0gKHJlcXVlc3QsIGhlYWRlcnMpID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgfVxufTtcblxubGV0IG1ha2VSZXF1ZXN0ID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIC8vc3luY2hyb25vdXMgcmVxdWVzdCB0eXBlcyBhcmUgZGVwcmVjYXRlZFxuICAgICAgICByZXF1ZXN0Lm9wZW4ob3B0aW9ucy5tZXRob2QsIG1ha2VVUkwob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zKSwgdHJ1ZSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3I6ICcsIHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3RoZXJlIHdhcyBhIGNvbm5lY3Rpb24gZXJyb3Igb2Ygc29tZSBzb3J0Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBtYWtlUmVxdWVzdEhlYWRlcihyZXF1ZXN0LCBvcHRpb25zLmhlYWRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKG9wdGlvbnMucG9zdERhdGEpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdChvcHRpb25zKTtcbiAgICB9LFxuXG4gICAgcG9zdChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxufTtcblxuIl19
