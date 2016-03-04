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

var makeRequestHeader = function makeRequestHeader(request, headersArr) {
    return headersArr.map(function (header) {
        for (var key in header) {
            return request.setRequestHeader(key, header[key]);
        }
    });
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

        request.send();
    });
};

exports.default = {
    get: function get(options) {
        options.method = 'GET';
        return makeRequest(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLGFBQWEsU0FBYixVQUFhLENBQUMsR0FBRCxFQUFTO0FBQ3RCLFdBQU8sT0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixHQUFqQixDQUFxQixVQUFVLEdBQVYsRUFBZTtBQUN2QyxlQUFPLE1BQU0sR0FBTixHQUFZLElBQUksR0FBSixDQUFaLENBRGdDO0tBQWYsQ0FBckIsQ0FFSixJQUZJLENBRUMsR0FGRCxDQUFQLENBRHNCO0NBQVQ7O0FBTWpCLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBQyxHQUFELEVBQU0sTUFBTixFQUFpQjtBQUMzQixRQUFHLE1BQUgsRUFBVztBQUNQLGVBQU8sTUFBTSxHQUFOLEdBQVksV0FBVyxNQUFYLENBQVosQ0FEQTtLQUFYLE1BRU87QUFDSCxlQUFPLEdBQVAsQ0FERztLQUZQO0NBRFU7O0FBUWQsSUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBeUI7QUFDN0MsV0FBTyxXQUFXLEdBQVgsQ0FBZSxVQUFDLE1BQUQsRUFBWTtBQUM5QixhQUFJLElBQUksR0FBSixJQUFXLE1BQWYsRUFBdUI7QUFDbkIsbUJBQU8sUUFBUSxnQkFBUixDQUF5QixHQUF6QixFQUE4QixPQUFPLEdBQVAsQ0FBOUIsQ0FBUCxDQURtQjtTQUF2QjtLQURrQixDQUF0QixDQUQ2QztDQUF6Qjs7QUFReEIsSUFBSSxjQUFjLFNBQWQsV0FBYyxDQUFDLE9BQUQsRUFBYTtBQUMzQixXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDcEMsWUFBSSxVQUFVLElBQUksY0FBSixFQUFWOzs7QUFEZ0MsZUFJcEMsQ0FBUSxJQUFSLENBQWEsUUFBUSxNQUFSLEVBQWdCLFFBQVEsUUFBUSxHQUFSLEVBQWEsUUFBUSxNQUFSLENBQWxELEVBQW1FLElBQW5FLEVBSm9DOztBQU1wQyxnQkFBUSxNQUFSLEdBQWlCLFlBQU07QUFDbkIsZ0JBQUksUUFBUSxNQUFSLElBQWtCLEdBQWxCLElBQXlCLFFBQVEsTUFBUixHQUFpQixHQUFqQixFQUFzQjtBQUMvQyx1QkFBTyxRQUFRLFFBQVEsWUFBUixDQUFmLENBRCtDO2FBQW5ELE1BRU87QUFDSCx1QkFBTyxPQUFPLDBEQUFQLEVBQW1FLE9BQW5FLENBQVAsQ0FERzthQUZQO1NBRGEsQ0FObUI7O0FBY3BDLGdCQUFRLE9BQVIsR0FBa0IsWUFBTTtBQUNwQixtQkFBTyxPQUFPLDJDQUFQLENBQVAsQ0FEb0I7U0FBTixDQWRrQjs7QUFrQnBDLFlBQUcsUUFBUSxPQUFSLEVBQWlCO0FBQ2hCLDhCQUFrQixPQUFsQixFQUEyQixRQUFRLE9BQVIsQ0FBM0IsQ0FEZ0I7U0FBcEI7O0FBSUEsZ0JBQVEsSUFBUixHQXRCb0M7S0FBckIsQ0FBbkIsQ0FEMkI7Q0FBYjs7a0JBMkJIO0FBQ1gsc0JBQUksU0FBUztBQUNULGdCQUFRLE1BQVIsR0FBaUIsS0FBakIsQ0FEUztBQUVULGVBQU8sWUFBWSxPQUFaLENBQVAsQ0FGUztLQURGIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbWFrZVBhcmFtcyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgb2JqW2tleV07XG4gICAgfSkuam9pbignJicpO1xufTtcblxubGV0IG1ha2VVUkwgPSAodXJsLCBwYXJhbXMpID0+IHtcbiAgICBpZihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHVybCArICc/JyArIG1ha2VQYXJhbXMocGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cbn07XG5cbmxldCBtYWtlUmVxdWVzdEhlYWRlciA9IChyZXF1ZXN0LCBoZWFkZXJzQXJyKSA9PiB7XG4gICAgcmV0dXJuIGhlYWRlcnNBcnIubWFwKChoZWFkZXIpID0+IHtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyW2tleV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5sZXQgbWFrZVJlcXVlc3QgPSAob3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgLy9zeW5jaHJvbm91cyByZXF1ZXN0IHR5cGVzIGFyZSBkZXByZWNhdGVkXG4gICAgICAgIHJlcXVlc3Qub3BlbihvcHRpb25zLm1ldGhvZCwgbWFrZVVSTChvcHRpb25zLnVybCwgb3B0aW9ucy5wYXJhbXMpLCB0cnVlKTtcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoJ1dlIHJlYWNoZWQgb3VyIHRhcmdldCBzZXJ2ZXIsIGJ1dCBpdCByZXR1cm5lZCBhbiBlcnJvcjogJywgcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgndGhlcmUgd2FzIGEgY29ubmVjdGlvbiBlcnJvciBvZiBzb21lIHNvcnQnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZihvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIG1ha2VSZXF1ZXN0SGVhZGVyKHJlcXVlc3QsIG9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXQob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuICAgICAgICByZXR1cm4gbWFrZVJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxufTtcblxuIl19
