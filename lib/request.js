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

var makePostData = function makePostData(postData) {
    if (postData) {
        return JSON.stringify(postData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLGFBQWEsU0FBYixVQUFhLENBQUMsR0FBRCxFQUFTO0FBQ3RCLFdBQU8sT0FBTyxJQUFQLENBQVksR0FBWixFQUFpQixHQUFqQixDQUFxQixVQUFVLEdBQVYsRUFBZTtBQUN2QyxlQUFPLE1BQU0sR0FBTixHQUFZLElBQUksR0FBSixDQUFaLENBRGdDO0tBQWYsQ0FBckIsQ0FFSixJQUZJLENBRUMsR0FGRCxDQUFQLENBRHNCO0NBQVQ7O0FBTWpCLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBQyxHQUFELEVBQU0sTUFBTixFQUFpQjtBQUMzQixRQUFHLE1BQUgsRUFBVztBQUNQLGVBQU8sTUFBTSxHQUFOLEdBQVksV0FBVyxNQUFYLENBQVosQ0FEQTtLQUFYLE1BRU87QUFDSCxlQUFPLEdBQVAsQ0FERztLQUZQO0NBRFU7O0FBUWQsSUFBSSxvQkFBb0IsU0FBcEIsaUJBQW9CLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBc0I7QUFDMUMsU0FBSSxJQUFJLEdBQUosSUFBVyxPQUFmLEVBQXdCO0FBQ3BCLGdCQUFRLGdCQUFSLENBQXlCLEdBQXpCLEVBQThCLFFBQVEsR0FBUixDQUE5QixFQURvQjtLQUF4QjtDQURvQjs7QUFNeEIsSUFBSSxlQUFlLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFBYztBQUM3QixRQUFHLFFBQUgsRUFBYTtBQUNULGVBQU8sS0FBSyxTQUFMLENBQWUsUUFBZixDQUFQLENBRFM7S0FBYjtDQURlOztrQkFNSixVQUFDLE9BQUQsRUFBYTtBQUN4QixXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDcEMsWUFBSSxVQUFVLElBQUksY0FBSixFQUFWLENBRGdDO0FBRXBDLFlBQUksU0FBUyxRQUFRLFVBQVIsR0FBcUIsUUFBUSxVQUFSLEdBQXFCLEtBQTFDOzs7QUFGdUIsZUFLcEMsQ0FBUSxJQUFSLENBQWEsTUFBYixFQUFxQixRQUFRLFFBQVEsR0FBUixFQUFhLFFBQVEsTUFBUixDQUExQyxFQUEyRCxJQUEzRCxFQUxvQzs7QUFPcEMsZ0JBQVEsTUFBUixHQUFpQixZQUFNO0FBQ25CLGdCQUFJLFFBQVEsTUFBUixJQUFrQixHQUFsQixJQUF5QixRQUFRLE1BQVIsR0FBaUIsR0FBakIsRUFBc0I7QUFDL0MsdUJBQU8sUUFBUSxRQUFRLFlBQVIsQ0FBZixDQUQrQzthQUFuRCxNQUVPO0FBQ0gsdUJBQU8sT0FBTywwREFBUCxFQUFtRSxPQUFuRSxDQUFQLENBREc7YUFGUDtTQURhLENBUG1COztBQWVwQyxnQkFBUSxPQUFSLEdBQWtCLFlBQU07QUFDcEIsbUJBQU8sT0FBTywyQ0FBUCxDQUFQLENBRG9CO1NBQU4sQ0Fma0I7O0FBbUJwQyxZQUFHLFFBQVEsT0FBUixFQUFpQjs7O0FBR2hCLGdCQUFHLENBQUUsY0FBRixJQUFxQixRQUFRLE9BQVIsRUFBaUI7QUFDckMsd0JBQVEsZ0JBQVIsQ0FBeUIsY0FBekIsRUFBeUMsa0JBQXpDLEVBRHFDO2FBQXpDOztBQUlBLGdCQUFHLENBQUUsUUFBRixJQUFlLFFBQVEsT0FBUixFQUFpQjtBQUMvQix3QkFBUSxnQkFBUixDQUF5QixRQUF6QixFQUFtQyxrQkFBbkMsRUFEK0I7YUFBbkM7O0FBSUEsOEJBQWtCLE9BQWxCLEVBQTJCLFFBQVEsT0FBUixDQUEzQixDQVhnQjtTQUFwQjs7QUFjQSxnQkFBUSxJQUFSLENBQWEsYUFBYSxRQUFRLFFBQVIsQ0FBMUIsRUFqQ29DO0tBQXJCLENBQW5CLENBRHdCO0NBQWIiLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBtYWtlUGFyYW1zID0gKG9iaikgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnPScgKyBvYmpba2V5XTtcbiAgICB9KS5qb2luKCcmJyk7XG59O1xuXG5sZXQgbWFrZVVSTCA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgIGlmKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdXJsICsgJz8nICsgbWFrZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufTtcblxubGV0IG1ha2VSZXF1ZXN0SGVhZGVyID0gKHJlcXVlc3QsIGhlYWRlcnMpID0+IHtcbiAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSk7XG4gICAgfVxufTtcblxubGV0IG1ha2VQb3N0RGF0YSA9IChwb3N0RGF0YSkgPT4ge1xuICAgIGlmKHBvc3REYXRhKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgbWV0aG9kID0gb3B0aW9ucy5odHRwTWV0aG9kID8gb3B0aW9ucy5odHRwTWV0aG9kIDogJ0dFVCc7XG5cbiAgICAgICAgLy9zeW5jaHJvbm91cyByZXF1ZXN0IHR5cGVzIGFyZSBkZXByZWNhdGVkXG4gICAgICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIG1ha2VVUkwob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zKSwgdHJ1ZSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdXZSByZWFjaGVkIG91ciB0YXJnZXQgc2VydmVyLCBidXQgaXQgcmV0dXJuZWQgYW4gZXJyb3I6ICcsIHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3RoZXJlIHdhcyBhIGNvbm5lY3Rpb24gZXJyb3Igb2Ygc29tZSBzb3J0Jyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYob3B0aW9ucy5oZWFkZXJzKSB7XG5cbiAgICAgICAgICAgIC8vZGVmYXVsdCBqc29uIGhlYWRlcnNcbiAgICAgICAgICAgIGlmKCEoJ2NvbnRlbnQtdHlwZScpIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoISgnQWNjZXB0JykgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWtlUmVxdWVzdEhlYWRlcihyZXF1ZXN0LCBvcHRpb25zLmhlYWRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKG1ha2VQb3N0RGF0YShvcHRpb25zLnBvc3REYXRhKSk7XG4gICAgfSk7XG59O1xuIl19
