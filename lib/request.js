'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var makePostData = function makePostData(postData) {
    if (postData) {
        switch (typeof postData === 'undefined' ? 'undefined' : _typeof(postData)) {
            case 'string':
                return postData;
                break;
            case 'object':
                return JSON.stringify(postData);
                break;
        }
    }
};

exports.default = function (options) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        var method = options.httpMethod ? options.httpMethod : 'GET';

        //synchronous request types are deprecated
        request.open(method, makeURL(options.url, options.params), true);

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

            //default json headers
            if (!'content-type' in options.headers) {
                request.setRequestHeader('Content-Type', 'application/json');
            }

            if (!'Accept' in options.headers) {
                request.setRequestHeader('Accept', 'application/json');
            }

            makeRequestHeader(request, options.headers);
        }

        request.send(makePostData(options.postData));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEdBQUQsRUFBUztBQUN0QixXQUFPLE9BQU8sSUFBUCxDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBcUIsVUFBVSxHQUFWLEVBQWU7QUFDdkMsZUFBTyxNQUFNLEdBQU4sR0FBWSxJQUFJLEdBQUosQ0FBWixDQURnQztLQUFmLENBQXJCLENBRUosSUFGSSxDQUVDLEdBRkQsQ0FBUCxDQURzQjtDQUFUOztBQU1qQixJQUFJLFVBQVUsU0FBVixPQUFVLENBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDM0IsUUFBRyxNQUFILEVBQVc7QUFDUCxlQUFPLE1BQU0sR0FBTixHQUFZLFdBQVcsTUFBWCxDQUFaLENBREE7S0FBWCxNQUVPO0FBQ0gsZUFBTyxHQUFQLENBREc7S0FGUDtDQURVOztBQVFkLElBQUksb0JBQW9CLFNBQXBCLGlCQUFvQixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQXNCO0FBQzFDLFNBQUksSUFBSSxHQUFKLElBQVcsT0FBZixFQUF3QjtBQUNwQixnQkFBUSxnQkFBUixDQUF5QixHQUF6QixFQUE4QixRQUFRLEdBQVIsQ0FBOUIsRUFEb0I7S0FBeEI7Q0FEb0I7O0FBTXhCLElBQUksZUFBZSxTQUFmLFlBQWUsQ0FBQyxRQUFELEVBQWM7QUFDN0IsUUFBRyxRQUFILEVBQWE7QUFDVCx1QkFBYywwREFBZDtBQUNJLGlCQUFLLFFBQUw7QUFDSSx1QkFBTyxRQUFQLENBREo7QUFFSSxzQkFGSjtBQURKLGlCQUlTLFFBQUw7QUFDSSx1QkFBTyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQVAsQ0FESjtBQUVJLHNCQUZKO0FBSkosU0FEUztLQUFiO0NBRGU7O2tCQWFKLFVBQUMsT0FBRCxFQUFhO0FBQ3hCLFdBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNwQyxZQUFJLFVBQVUsSUFBSSxjQUFKLEVBQVYsQ0FEZ0M7QUFFcEMsWUFBSSxTQUFTLFFBQVEsVUFBUixHQUFxQixRQUFRLFVBQVIsR0FBcUIsS0FBMUM7OztBQUZ1QixlQUtwQyxDQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLFFBQVEsUUFBUSxHQUFSLEVBQWEsUUFBUSxNQUFSLENBQTFDLEVBQTJELElBQTNELEVBTG9DOztBQU9wQyxnQkFBUSxNQUFSLEdBQWlCLFlBQU07QUFDbkIsZ0JBQUksUUFBUSxNQUFSLElBQWtCLEdBQWxCLElBQXlCLFFBQVEsTUFBUixHQUFpQixHQUFqQixFQUFzQjtBQUMvQyx1QkFBTyxRQUFRLFFBQVEsWUFBUixDQUFmLENBRCtDO2FBQW5ELE1BRU87QUFDSCx1QkFBTyxPQUFPLDBEQUFQLEVBQW1FLE9BQW5FLENBQVAsQ0FERzthQUZQO1NBRGEsQ0FQbUI7O0FBZXBDLGdCQUFRLE9BQVIsR0FBa0IsWUFBTTtBQUNwQixtQkFBTyxPQUFPLDJDQUFQLENBQVAsQ0FEb0I7U0FBTixDQWZrQjs7QUFtQnBDLFlBQUcsUUFBUSxPQUFSLEVBQWlCOzs7QUFHaEIsZ0JBQUcsQ0FBRSxjQUFGLElBQXFCLFFBQVEsT0FBUixFQUFpQjtBQUNyQyx3QkFBUSxnQkFBUixDQUF5QixjQUF6QixFQUF5QyxrQkFBekMsRUFEcUM7YUFBekM7O0FBSUEsZ0JBQUcsQ0FBRSxRQUFGLElBQWUsUUFBUSxPQUFSLEVBQWlCO0FBQy9CLHdCQUFRLGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLGtCQUFuQyxFQUQrQjthQUFuQzs7QUFJQSw4QkFBa0IsT0FBbEIsRUFBMkIsUUFBUSxPQUFSLENBQTNCLENBWGdCO1NBQXBCOztBQWNBLGdCQUFRLElBQVIsQ0FBYSxhQUFhLFFBQVEsUUFBUixDQUExQixFQWpDb0M7S0FBckIsQ0FBbkIsQ0FEd0I7Q0FBYiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG1ha2VQYXJhbXMgPSAob2JqKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSArICc9JyArIG9ialtrZXldO1xuICAgIH0pLmpvaW4oJyYnKTtcbn07XG5cbmxldCBtYWtlVVJMID0gKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgaWYocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiB1cmwgKyAnPycgKyBtYWtlUGFyYW1zKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG59O1xuXG5sZXQgbWFrZVJlcXVlc3RIZWFkZXIgPSAocmVxdWVzdCwgaGVhZGVycykgPT4ge1xuICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKTtcbiAgICB9XG59O1xuXG5sZXQgbWFrZVBvc3REYXRhID0gKHBvc3REYXRhKSA9PiB7XG4gICAgaWYocG9zdERhdGEpIHtcbiAgICAgICAgc3dpdGNoKHR5cGVvZiBwb3N0RGF0YSkge1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3REYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JyA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IG1ldGhvZCA9IG9wdGlvbnMuaHR0cE1ldGhvZCA/IG9wdGlvbnMuaHR0cE1ldGhvZCA6ICdHRVQnO1xuXG4gICAgICAgIC8vc3luY2hyb25vdXMgcmVxdWVzdCB0eXBlcyBhcmUgZGVwcmVjYXRlZFxuICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCBtYWtlVVJMKG9wdGlvbnMudXJsLCBvcHRpb25zLnBhcmFtcyksIHRydWUpO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yOiAnLCByZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCd0aGVyZSB3YXMgYSBjb25uZWN0aW9uIGVycm9yIG9mIHNvbWUgc29ydCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKG9wdGlvbnMuaGVhZGVycykge1xuXG4gICAgICAgICAgICAvL2RlZmF1bHQganNvbiBoZWFkZXJzXG4gICAgICAgICAgICBpZighKCdjb250ZW50LXR5cGUnKSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCEoJ0FjY2VwdCcpIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFrZVJlcXVlc3RIZWFkZXIocmVxdWVzdCwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Quc2VuZChtYWtlUG9zdERhdGEob3B0aW9ucy5wb3N0RGF0YSkpO1xuICAgIH0pO1xufTtcbiJdfQ==