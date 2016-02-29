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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSSxhQUFhLFNBQWIsVUFBYSxDQUFDLEdBQUQsRUFBUztBQUN0QixXQUFPLE9BQU8sSUFBUCxDQUFZLEdBQVosRUFBaUIsR0FBakIsQ0FBcUIsVUFBVSxHQUFWLEVBQWU7QUFDdkMsZUFBTyxNQUFNLEdBQU4sR0FBWSxJQUFJLEdBQUosQ0FBWixDQURnQztLQUFmLENBQXJCLENBRUosSUFGSSxDQUVDLEdBRkQsQ0FBUCxDQURzQjtDQUFUOztBQU1qQixJQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsR0FBRCxFQUFNLE1BQU4sRUFBYyxNQUFkLEVBQXlCO0FBQ3ZDLFdBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNwQyxZQUFJLFVBQVUsSUFBSSxjQUFKLEVBQVYsQ0FEZ0M7QUFFcEMsWUFBSSxPQUFPLE1BQU0sR0FBTixHQUFZLFdBQVcsTUFBWCxDQUFaLENBRnlCOztBQUlwQyxnQkFBUSxJQUFSLENBQWEsTUFBYixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUpvQzs7QUFPcEMsZ0JBQVEsTUFBUixHQUFpQixZQUFNO0FBQ25CLGdCQUFJLFFBQVEsTUFBUixJQUFrQixHQUFsQixJQUF5QixRQUFRLE1BQVIsR0FBaUIsR0FBakIsRUFBc0I7QUFDL0MsdUJBQU8sUUFBUSxRQUFRLFlBQVIsQ0FBZixDQUQrQzthQUFuRCxNQUVPO0FBQ0gsdUJBQU8sT0FBTywwREFBUCxFQUFtRSxPQUFuRSxDQUFQLENBREc7YUFGUDtTQURhLENBUG1COztBQWVwQyxnQkFBUSxPQUFSLEdBQWtCLFlBQU07QUFDcEIsbUJBQU8sT0FBTywyQ0FBUCxDQUFQLENBRG9CO1NBQU4sQ0Fma0I7O0FBbUJwQyxnQkFBUSxnQkFBUixDQUF5QixnQkFBekIsRUFBMkMsZ0JBQTNDLEVBbkJvQztBQW9CcEMsZ0JBQVEsSUFBUixHQXBCb0M7S0FBckIsQ0FBbkIsQ0FEdUM7Q0FBekI7O2tCQXlCSDtBQUNYLHNCQUFJLEtBQUssUUFBUTtBQUNiLGVBQU8sWUFBWSxHQUFaLEVBQWlCLE1BQWpCLEVBQXlCLEtBQXpCLENBQVAsQ0FEYTtLQUROIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbWFrZVBhcmFtcyA9IChvYmopID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgb2JqW2tleV07XG4gICAgfSkuam9pbignJicpO1xufTtcblxubGV0IG1ha2VSZXF1ZXN0ID0gKHVybCwgcGFyYW1zLCBtZXRob2QpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgcFVSTCA9IHVybCArICc/JyArIG1ha2VQYXJhbXMocGFyYW1zKTtcblxuICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCBwVVJMLCB0cnVlKTtcblxuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnV2UgcmVhY2hlZCBvdXIgdGFyZ2V0IHNlcnZlciwgYnV0IGl0IHJldHVybmVkIGFuIGVycm9yOiAnLCByZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCd0aGVyZSB3YXMgYSBjb25uZWN0aW9uIGVycm9yIG9mIHNvbWUgc29ydCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQXBpLVVzZXItQWdlbnQnLCAndGhpcyBpcyBhIHRlc3QnKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0KHVybCwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBtYWtlUmVxdWVzdCh1cmwsIHBhcmFtcywgJ0dFVCcpO1xuICAgIH1cbn07XG5cbiJdfQ==